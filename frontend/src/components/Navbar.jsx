import React from "react";
import { ShoppingBagIcon } from "lucide-react";
import { Link, useResolvedPath } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";
import Drawer from "./ui/Drawer";
import { useProductStore } from "../store/useProductStore";
const Navbar = () => {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";
  const { totalProducts } = useProductStore();
  return (
    <>
      <nav className="max-w-full fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 px-4 sm:px-6 lg:px-8 py-4 flex items-center">
        <div className="flex items-center justify-center md:hidden z-[9999] mr-1">
          <Drawer>
            <li>
              <a>PRODUCT</a>
            </li>
            <li>
              <a>NEW IN</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
          </Drawer>
        </div>
        <div className=" md:max-w-[70%] mx-auto container backdrop-blur-sm bg-white/10 rounded-full border border-white/20 shadow-lg px-6 py-3 will-change-[backdrop-filter]">
          <div className=" flex items-center justify-center md:justify-between w-full ">
            {/* Logo */}
            <Link to="/" className="hidden md:flex items-center space-x-2">
              <span className="font-semibold font-mono tracking-widest text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                PERN
              </span>
            </Link>

            {/* Navigation menu */}
            <ul className="hidden md:flex space-x-8 text-white/80 ">
              {["PRODUCT", "NEW IN", "ABOUT"].map((item, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer font-semibold transition-colors hover:text-white group p-1 "
                >
                  <span className="font-semibold  bg-clip-text text-transparent bg-gradient-to-r to-secondary from-secondary">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6"></span>
                </li>
              ))}
            </ul>

            {/* Right side controls */}

            {isHomePage && (
              <div className="flex items-center space-x-4">
                <div className="indicator">
                  <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                    <ShoppingBagIcon className="size-5" />
                    <span className="badge badge-sm badge-primary indicator-item">
                      {totalProducts}
                    </span>
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar w-12"
                  >
                    <div className="w-16 rounded-full hover:scale-105 transition-transform ease-in-out duration-100">
                      <img
                        alt="user"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="text-base-content/80 transition-colors mr-auto">
          <ThemeSelector />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
