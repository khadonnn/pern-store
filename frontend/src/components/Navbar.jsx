import React from "react";
import { Palette, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";
import Drawer from "./ui/Drawer";
const Navbar = () => {
  // const { pathname } = useResolvedPath();
  // const isHomePage = pathname === "/";
  return (
    <>
      <nav className="max-w-full fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 px-4 sm:px-6 lg:px-8 py-4 flex">
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
        <div className=" md:max-w-[70%] mx-auto container backdrop-blur-xl bg-white/10 rounded-full border border-white/20 shadow-lg px-6 py-3">
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
                  <span className="font-semibold  bg-clip-text text-transparent bg-gradient-to-r to-primary from-secondary">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-gray-200 group-hover:w-3/6"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-gray-200 group-hover:w-3/6"></span>
                </li>
              ))}
            </ul>

            {/* Right side controls */}

            <div className="flex items-center space-x-4">
              <button className="text-white/80 hover:text-white transition-colors">
                <ShoppingCart size={24} />
              </button>
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
          </div>
        </div>
        <div className="text-white/80 hover:text-white transition-colors ml-1">
          <ThemeSelector />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
