
import React from "react";
import ComponentCard from '../components/ComponentCard';

const page = () => {
  const arr = new Array(10).fill(1);
  return (
    <div className="flex flex-col gap-6 w-[90%] overflow-y-auto h-screen pt-10 max-md:w-[75%] max-sm:w-[100%] no-scroll ">
      <h1 className="font-semibold text-xl text-white ml-7">components</h1>
      <div className="flex flex-wrap gap-7  justify-center">
        {arr.map((value, index) => (
          <ComponentCard  link={"/code"} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default page;
