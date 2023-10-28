import Link from "next/link";
import React from "react";
import LinksList from "./linksList";

export default function Navbar() {
  return (
    <nav className="z-50 fixed top-0 w-full bg-white/90 backdrop-blur">
      <div className="flex items-center justify-between max-w-[1200px] min-w-[1024px] py-4 mx-auto">
        <Link href={"/"}>
          <img
            src="https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2022/07/cropped-cropped-gate-with-uni-1-8.png"
            className="w-40"
          />
        </Link>
        <LinksList />
        <Link
          className="text-sm font-semibold px-6 py-3 bg-primary
           text-white rounded-full hover:bg-primary/75 transition shadow-md"
          href={"/recruitment"}
        >
          Recruitment
        </Link>
      </div>
    </nav>
  );
}
