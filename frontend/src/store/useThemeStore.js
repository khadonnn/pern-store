import { create } from "zustand";
export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("favorite-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("favorite-theme", theme);
    set({ theme });
  },
}));
