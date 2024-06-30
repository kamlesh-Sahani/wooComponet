import React from "react";
import Link from "next/link";
const Sidebar = () => {
  const arr = new Array(20).fill(1);
  return (
    <div className="text-[#eaeaea] bg-[#000e] h-screen flex flex-col gap-10 w-1/4 p-4 pt-10 overflow-y-auto  max-sm:hidden">

      <div className="flex flex-col gap-3 ">
        <h1 className="text-white font-semibold text-xl 2xl:text-4xl">Button</h1>
        <div className=" flex flex-col gap-1 ">
          {arr.map((value, index) => (
            <Link
              href={"/"}
              className=" font-semibold  cursor-pointer transition-max-height duration-500 ease-out overflow-hidden  text-[#9e9eaa] hover:text-[#36B5EF] hover:ml-4 hover:transition-all hover:ease-in-out   hover:duration-30 2xl:text-2xl"
              key={index}
            >
              colored button
            </Link>
          ))}
        </div>

      </div>

      <div className="flex flex-col gap-3 ">
        <h1 className="text-white font-semibold text-xl">Button</h1>
        <div className=" flex flex-col gap-1 ">
          {arr.map((value, index) => (
            <Link
              href={"/"}
              className=" font-semibold  cursor-pointer transition-max-height duration-500 ease-out overflow-hidden  text-[#9e9eaa] hover:text-[#36B5EF] hover:ml-4 hover:transition-all hover:ease-in-out   hover:duration-30"
              key={index}
            >
              colored button
            </Link>
          ))}
        </div>

      </div>

      <div className="flex flex-col gap-3 ">
        <h1 className="text-white font-semibold text-xl">Button</h1>
        <div className=" flex flex-col gap-1 ">
          {arr.map((value, index) => (
            <Link
              href={"/"}
              className=" font-semibold  cursor-pointer transition-max-height duration-500 ease-out overflow-hidden  text-[#9e9eaa] hover:text-[#36B5EF] hover:ml-4 hover:transition-all hover:ease-in-out   hover:duration-30"
              key={index}
            >
              colored button
            </Link>
          ))}
        </div>

      </div>
      



    </div>
  );
};

export default Sidebar;
