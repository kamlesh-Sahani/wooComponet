import React from "react";
import Link from "next/link";
interface ComponentCardType {
  link:string;
}
const ComponentCard = ({link}:ComponentCardType) => {
  return (
    <Link href={link} >
      <div
        className="flex flex-col gap-2 w-[280px] h-[280px]  hover:-translate-y-3 hover:transition-all   transition-all hover:ease-in-out  ease-in-out  hover:duration-30  duration-30   cursor-pointer"
      >
        <div className="w-full h-3/4 flex justify-center items-center  bg-[#515151]">
          <button className="font-bold bg-[#731fc788] text-white flex justify-center items-center w-30 h-10">
            Click me
          </button>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="font-semibold text-xl text-white">Rounded button</h1>
          <p className="text-[#a8a8a8]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, voluptates!
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ComponentCard;
