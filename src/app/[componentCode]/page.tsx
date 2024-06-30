"use client";
import { MdGridView } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
const page = ({ params }: { params: { componentCode: string } }) => {
  const [codeOrPreview, setCodeOrPreview] = useState(false);
  const code = `"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
                  <div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                      <Image
                        src={"/jordans.webp"}
                        alt="jordans"
                        height="400"
                        width="400"
                        className="object-contain"
                      />
                      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        Air Jordan 4 Retro Reimagined
                      </p>

                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                        February 17, 2024. Your best opportunity to get these right now is by
                        entering raffles and waiting for the official releases.
                      </p>
                      <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                        <span>Buy now </span>
                        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                          $100
                        </span>
                      </button>
                    </BackgroundGradient>
                  </div>
  );
}
`;
  return (
    <div className="text-[#d0d1d5] flex w-2/3 overflow-y-auto  justify-center   max-sm:w-full ">
      <div className="flex flex-col gap-10  pt-12 pl-3 w-full">
        <div className="flex flex-col gap-2 justify-self-start  w-[100%] ">
          <h1 className="text-5xl text-white font-semibold">Moving Border</h1>
          <p className="text-xl ">
            A border that moves around the container. Perfect for making your
            buttons stand out.
          </p>
        </div>

        <div className="flex flex-col gap-7  items-center ">
          <div className="flex gap-3 self-stretch">
            <button
              className={`h-10 w-[140px] flex gap-2 justify-center items-center ${
                !codeOrPreview ? "bg-[#27272A] text-white" : ""
              } rounded-md font-semibold`}
              onClick={() => setCodeOrPreview(false)}
            >
              <MdGridView />
              Preview
            </button>

            <button
              className={`h-10 w-[140px] flex gap-2 justify-center items-center ${
                codeOrPreview ? "bg-[#27272A] text-white" : ""
              } rounded-md font-semibold`}
              onClick={() => setCodeOrPreview(true)}
            >
              <HiCode />
              Code
            </button>
          </div>

          <div className="bg-[#282A36] rounded-md w-[90%] flex justify-center">
            {/* preview design*/}
            {codeOrPreview ? (
              <div className="">
                <CopyBlock
                  text={code}
                  language={"jsx"}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLongLines
                />
              </div>
            ) : (
              <div className="flex justify-center items-center p-10 overflow-x-auto ">
                <button className="h-10  w-[140px] flex gap-2 justify-center items-center bg-[#27272A] rounded-md font-semibold">
                  <HiCode />
                  Code
                </button>
              </div>
            )}
          </div>
        </div>

        {/** installation process */}
        <div className="flex flex-col gap-8 ">
          <h1 className="text-4xl text-white font-semibold ">Installation</h1>

          <div className="flex flex-col gap-5 ml-12   justify-center ">
            <div className="flex flex-col gap-4 ">
              <p className="text-xl font-medium"> Install dependencies</p>
              <div className="overflow-x-auto w-[90%]">
                <CopyBlock
                  text={`npm i framer-motion clsx tailwind-merge`}
                  language={"jsx"}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLongLines
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xl">Add util file</p>
              <div className="overflow-x-auto w-[90%]">
                <CopyBlock
                  text={`import { ClassValue, clsx } from "clsx";
                    import { twMerge } from "tailwind-merge";
                    export function cn(...inputs: ClassValue[]) {
                      return twMerge(clsx(inputs));
}
`}
                  language={"jsx"}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLongLines
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xl"> Install dependencies</p>
              <div className="overflow-x-auto w-[90%]">
                <CopyBlock
                  text={`npm i framer-motion clsx tailwind-merge`}
                  language={"html"}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLongLines
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
