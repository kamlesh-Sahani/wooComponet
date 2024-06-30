import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-[10%] bg-[#100f12] pt-10 max-md:px-5">
      <div className="md:flex justify-between items-center md:pr-4 ">
        <div className="flex flex-col max-md:items-center text-sm gap-2 text-[#B4BCC7] ">
          <h1 className="text-white">Don't miss out!</h1>
          <p>Subscribe to our newsletter for latest updates.</p>
          <form action="POST" className=" flex gap-2 mt-1">
            <input
              placeholder="example@gmail.com"
              className="border-[1px] border-[#4b5763] bg-[#1c2025] transition duration-200 py-[5px] px-[13px] rounded-lg outline-none shadow-md shadow-black "
              type="text"
            />
            <button
              className="border-[1px] hover:border-[#3b076b] border-[#412a6f] bg-[#160c1f] hover:bg-[#1f0337] transition duration-200 py-[4px] px-[10px] rounded-lg shadow-md shadow-black text-[#ffffff] font-semibold"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex text-white text-sm gap-8 max-md:mt-12 max-md:justify-center">
          <h1>
            Products
            <ul className="text-[#B4BCC7]">
              <li>Components</li>
              <li>Base UI</li>
              <li>Templates</li>
              <li>CUI</li>
            </ul>
          </h1>
          <h1>
            Resources
            <ul className="text-[#B4BCC7]">
              <li>Icons</li>
              <li>Projects</li>
              <li>Templates</li>
              <li>Customization</li>
              <li>Design Kits</li>
            </ul>
          </h1>
          <h1>
            Company
            <ul className="text-[#B4BCC7]">
              <li>About Us</li>
              <li>Vision</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy policy</li>
              <li>Contact us</li>
            </ul>
          </h1>
        </div>
      </div>

      <div className=" text-sm text-[#B4BCC7] w-full flex items-center justify-between border-t-[1px] border-[#384249] py-7 mt-6">
        <div className="flex items-center gap-4 ">
          <Link href="/">
            <p>Copyright © 2024</p>
          </Link>
          |
          <Link href="/">
            <p>Trademark Policy</p>
          </Link>
        </div>
        <Link href="/">
          <p className="text-[#66B3FF]">Github</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
