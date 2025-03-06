import { PaletteIcon } from "lucide-react";
import React, { useState } from "react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const ThemeSelector = () => {
  //zustand state
  const { theme, setTheme } = useThemeStore();

  // State kiểm soát dropdown
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown dropdown-end border bg-white/10 rounded-full">
      <button
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        className={`btn btn-ghost btn-circle ${
          isOpen ? "bg-base-content/10" : ""
        }`}
      >
        <PaletteIcon className="size-5" />
      </button>
      {isOpen && ( // Chỉ hiển thị dropdown khi `isOpen` là true
        <div
          tabIndex={0}
          className="dropdown-content mt-2 p-1 shadow-2xl bg-base-200 rounded-2xl
            w-48 border border-base-content/10"
        >
          {THEMES.map((themeOption) => (
            <button
              key={themeOption.name}
              onClick={() => {
                setTheme(themeOption.name);
                // setIsOpen(false);
              }}
              className={`w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${
                theme === themeOption.name
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-base-content/5"
              }`}
            >
              <PaletteIcon className="size-5" />
              <span className="text-sm font-medium">{themeOption.label}</span>
              <div className="ml-auto flex gap-1">
                {themeOption.colors.map((color, i) => (
                  <span
                    key={i}
                    className="size-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
