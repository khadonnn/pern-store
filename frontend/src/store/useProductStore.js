import { create } from "zustand";
import axios from "axios";
const BASE_URL = "http://localhost:8080";
export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(`${BASE_URL}/api/products`);
      set({ products: res.data.data, error: null }); //first data of axios, 2 data in api return
    } catch (error) {
      if (error.status == 429)
        set({ error: "Too many requests, please try again later." });
    } finally {
      set({ loading: false });
    }
  },
}));
