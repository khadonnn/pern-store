import { AlignJustify } from "lucide-react";
import React from "react";

const Drawer = ({ children }) => {
  return (
    <div className="drawer  bg-white/20 rounded-full w-10 h-10 p-2 ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className=" bg-transparent border-none hover:bg-base-300 cursor-pointer"
        >
          <AlignJustify />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 top-0 absolute left-0   ">
          {/* Sidebar content here */}
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
