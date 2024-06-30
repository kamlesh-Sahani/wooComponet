import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
export default function Layout({ children }:{children:ReactNode}) {
  return (
    <div className="flex  w-full h-screen max-xl:justify-between pl-5 pr-5 max-sm:pl-0 max-sm:pr-0 xl:gap-10   xl:justify-center">
      <Sidebar />
      {children}
    </div>
  );
}
