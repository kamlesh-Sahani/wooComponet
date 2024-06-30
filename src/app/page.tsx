import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ComponentCard from "./components/ComponentCard";

export default function Home() {
  return (
    <div className="bg-[#131317] w-[100%] h-[100%] flex flex-col pl-20 pr-20 justify-center items-center gap-20">
      <div className="text-[#d0d1d5] flex flex-col gap-3 justify-center items-center pt-20 ">
        <h1 className="text-[#ffff] text-6xl font-semibold  bg-blue-600 p-2 pl-4 pr-4 rounded-md">
          Build your component library
        </h1>
        <p className="text-[#9a989c] text-xl w-[60%] text-center">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Stable.
        </p>
        <div className="flex items-center gap-4 my-4">
          <Link href="">
            <button className="border-[1px] font-semibold hover:border-[#3b076b] border-[#412a6f] bg-[#160c1f] hover:bg-[#1f0337] transition duration-200 py-[5px] px-[14px] rounded-lg">
              Get Started
            </button>
          </Link>
          <Link href="/">
            <button className="font-semibold flex items-center gap-2 border-[1px] hover:border-[#202529] border-[#4b5763] bg-[#1c2025] hover:bg-[#39414b] transition duration-200 py-[4px] px-[15px] rounded-lg">
              <FaGithub /> GitHub
            </button>
          </Link>
        </div>

        <div className="flex gap-4 ">
          <img
            className="md:w-[6rem] max-md:w-[4rem] max-sm:w-[3.1rem] object-contain"
            src="react js_logo.png"
            alt="React.js"
          />
          <img
            className="md:w-[16rem] max-md:w-[10rem] max-sm:w-[8.1rem] object-contain"
            src="tailwindcss-logotype-white.png"
            alt="Tailwind CSS"
          />
          <img
            className="md:w-[6rem] max-md:w-[4rem] max-sm:w-[3.1rem] object-contain"
            src="nextjs.png"
            alt="Next.js"
          />
          <img
            className="md:w-[6rem] max-md:w-[4rem] max-sm:w-[3.1rem] object-contain"
            src="react-icons.svg"
            alt="React-Icons"
          />
        </div>
      </div>

      <div className="w-[90%] justify-center flex  flex-col items-center gap-7 mt-10">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-white  bg-blue-600 p-2 pl-4 pr-4 font-semibold text-2xl w-[300px] rounded-md">
            Building with blocks
          </h1>
          <p className="text-[#9a989c] text-xl ">
            Get started with over 400+ block sections coded with Tailwind CSS
            and CUI to build high-quality website pages. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Accusamus magni iste asperiores
            cupiditate quae odio enim similique voluptatum excepturi doloremque!
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />
          <ComponentCard  link={"/component"} />

        </div>
      </div>

      <div className="w-[90%] justify-center flex  flex-col items-center gap-7 mt-10">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-white  bg-blue-600 p-2 pl-4 pr-4 font-semibold text-2xl w-[300px] rounded-md">
            Building with blocks
          </h1>
          <p className="text-[#9a989c] text-xl ">
            Get started with over 400+ block sections coded with Tailwind CSS
            and CUI to build high-quality website pages. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Accusamus magni iste asperiores
            cupiditate quae odio enim similique voluptatum excepturi doloremque!
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />
          <ComponentCard  link={"/Component"} />

        </div>
      </div>
    </div>
  );
}
