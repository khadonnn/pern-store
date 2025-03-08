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
  //form state
  formData: {
    name: "",
    price: "",
    image: "",
  },
  // re-render when typing
  setFormData: (formData) => set({ formData }),
  resetForm: () => set({ formData: { name: "", price: "", image: "" } }),
  //=> new state no render
  // setFormData: (key, value) =>
  //   set((state) => ({
  //     formData: { ...state.formData, [key]: value },
  //   })),
  // resetForm: () =>
  //   set(() => ({
  //     formData: { name: "", price: "", image: "" },
  //   })),
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
      const res = await axios.get(`${BASE_URL}/api/products`);
      set({ products: res.data.data, error: null }); //first data of axios, 2 data in api return
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
  //Delete product
  deleteProduct: async (id) => {
    set((state) => {
      const deletedProduct = state.products.find((p) => p.id === id);
      if (!deletedProduct) return state;
      return {
        products: state.products.filter((p) => p.id !== id), // Ẩn sản phẩm trên UI
        deletedProducts: [...state.deletedProducts, deletedProduct], // Lưu vào danh sách xoá tạm
      };
    });
    toast.success("Product deleted successfully");
  },
}));

// deleteProduct: async (id) => {
//   set({ loading: true });
//   try {
//     await axios.delete(`${BASE_URL}/api/products/${id}`);
//     set((prev) => ({
//       products: prev.products.filter((product) => product.id !== id),
//     }));
//     toast.success("Product deleted successfully");
//   } catch (error) {
//     console.log("Erorr deleteProduct", error);
//     toast.error("Something went wrong, please try again later");
//   } finally {
//     set({ loading: false });
//   }
// },
