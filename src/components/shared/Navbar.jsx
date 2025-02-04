"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Navbar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Fragment>
      <nav className="bg-indigo-400 text-white w-[90%] m-auto p-4 rounded-sm my-4">
        <ul className="flex justify-center gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`${pathName === "/products" && "text-[#000]"}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/font">Font</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
