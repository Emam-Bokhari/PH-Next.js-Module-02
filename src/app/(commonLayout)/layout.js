import Navbar from "@/components/shared/Navbar";
import { Fragment } from "react";

export default function CommonLayout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <footer className="p-4 bg-gray-400 text-black text-center">
        All Rights Reserved
      </footer>
    </Fragment>
  );
}
