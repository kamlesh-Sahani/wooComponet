import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import NavMenu from "./NavMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md max-w-[100%]">
      <div className="flex justify-between items-center px-6 h-[68px] bg-[#131317a4] border-b-[0.1px] border-[#1b1d1f] ">
        <div className="flex justify-between items-center gap-8">
          <h1 className="text-white font-semibold text-xl ">CUI</h1>
          <Link href="/" className="md:hidden">
            <button className="w-10px h-10px border-[1px] hover:border-[#1d2126] border-[#4b5763] rounded-xl p-[7px] bg-[#1C2025] hover:bg-[#39414b] transition duration-200">
              <IoMenu style={{ color: "white" }} />
            </button>
          </Link>
        </div>
        <ul className="flex justify-between items-center gap-8 text-[#BDC6CE] font-semibold mr-4 max-md:hidden">
          <Link href="/" className=" hover:text-[#ffff] active:text-[#9370DB]">
            <li>Docs</li>
          </Link>
          <Link
            href="/Component"
            className=" hover:text-[#ffff] active:text-[#9370DB]"
          >
            <li>Components</li>
          </Link>
          <Link href="/" className=" hover:text-[#ffff] active:text-[#9370DB]">
            <li>Templates</li>
          </Link>
          <Link href="/" className=" hover:text-[#ffff] active:text-[#9370DB]">
            <li>CUI</li>
          </Link>
        </ul>
        <Link href="/">
          <button className="w-10px h-10px border-[1px] hover:border-[#1d2126] border-[#4b5763] rounded-xl p-[7px] bg-[#1C2025] hover:bg-[#39414b] transition duration-200">
            <FaUser style={{ color: "white" }} />
          </button>
        </Link>
      </div>
      <NavMenu />
    </nav>
  );
};

export default Navbar;
