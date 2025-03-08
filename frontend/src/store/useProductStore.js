import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:8080";
export const useProductStore = create((set, get) => ({
  //product state
  products: [],
  deletedProducts: [],
  loading: false,
  error: null,
  currentPage: 1, // Lưu trữ trang hiện tại
  totalPages: 1,
  currentProduct: null,
  //form state
  formData: {
    name: "",
    price: "",
    image: "",
  },
  // form
  setFormData: (formData) => set({ formData }),
  resetForm: () => set({ formData: { name: "", price: "", image: "" } }),
  //add product
  addProduct: async (e) => {
    e.preventDefault();
    set({ loading: true });
    try {
      const { formData } = get();
      await axios.post(`${BASE_URL}/api/products`, formData);
      get().fetchProducts();
      get().resetForm();
      document.getElementById("add_product_modal").close();
      toast.success("Product created successfully");
    } catch (error) {
      console.log("Erorr add product", error);
      toast.error("Something went wrong, please try again later");
    } finally {
      set({ loading: false });
    }
  },
  //Fetch products
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const page = get().currentPage;
      const res = await axios.get(`${BASE_URL}/api/products/?page=${page}`);
      set({
        products: res.data.data,
        totalPages: res.data.pagination.totalPages,
        error: null,
      }); //first data of axios, 2 data in api return
    } catch (error) {
      if (error.status == 429)
        set({
          error: "Too many requests, please try again later.",
          products: [],
        });
      else
        set({
          error: "Something went wrong, please try again later.",
          products: [],
        });
    } finally {
      set({ loading: false });
    }
  },
  //doi trang
  setPage: (page) => {
    set({ currentPage: page });
    get().fetchProducts(); // Gọi lại API khi đổi trang
  },
  //delete
  deleteProduct: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
      }));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log("Erorr deleteProduct", error);
      toast.error("Something went wrong, please try again later");
    } finally {
      set({ loading: false });
    }
  },
  //1 product
  fetchProduct: async (id) => {
    set({ loading: true });
    try {
      const res = await axios.get(`${BASE_URL}/api/products/${id}`);
      set({
        currentProduct: res.data.data,
        formData: res.data.data,
        error: null,
      });
    } catch (error) {
      if (error.status == 429)
        set({ error: "Too many requests, please try again later." });
      else set({ error: "Something went wrong, please try again later." });
    } finally {
      set({ loading: false });
    }
  },
  updateProduct: async (id) => {
    set({ loading: true });
    try {
      const { formData } = get();
      const res = await axios.put(`${BASE_URL}/api/products/${id}`, formData);
      set({
        currentProduct: res.data.data,
        formData: res.data.data,
        error: null,
      });
      toast.success("Product updated successfully");
    } catch (error) {
      toast.error("Something went wrong, please try again later");
      console.log("Erorr update product", error);
    } finally {
      set({ loading: false });
    }
  },
  //seed products
  fetchSeedProducts: async () => {
    set({ loading: true });
    try {
      // Gọi API seed database trước
      const seedRes = await axios.get(`${BASE_URL}/api/seed`);

      if (!seedRes.data.success) {
        throw new Error(seedRes.data.error || "Seeding failed");
      }

      // Sau khi seed thành công, fetch lại danh sách sản phẩm
      const page = get().currentPage;
      const res = await axios.get(`${BASE_URL}/api/products/?page=${page}`);

      set({
        products: res.data.data,
        totalPages: res.data.pagination.totalPages,
        error: null,
      });
    } catch (error) {
      if (error.response?.status === 429) {
        set({
          error: "Too many requests, please try again later.",
          products: [],
        });
      } else {
        set({
          error:
            error.message || "Something went wrong, please try again later.",
          products: [],
        });
      }
    } finally {
      set({ loading: false });
    }
  },
}));

//Delete product fake
// deleteProduct: async (id) => {
//   set((state) => {
//     const deletedProduct = state.products.find((p) => p.id === id);
//     if (!deletedProduct) return state;
//     return {
//       products: state.products.filter((p) => p.id !== id), // Ẩn sản phẩm trên UI
//       deletedProducts: [...state.deletedProducts, deletedProduct], // Lưu vào danh sách xoá tạm
//     };
//   });
//   toast.success("Product deleted successfully");
// },
