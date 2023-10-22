import Link from "next/link";
import React from "react";

function LinksList() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "EX-COM",
      path: "/ex-com",
    },
    {
      name: "Competitions",
      path: "/competitions",
    },
    {
      name: "Partnerships",
      path: "/partnerships",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <ul className="flex gap-10 text-xs font-semibold text-slate-600">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className="hover:text-primary transition-all hover:border-b-4 border-primary py-2"
            href={link.path}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  return (
    <nav className="z-50 fixed top-0 w-full">
      <div className="flex items-center justify-between max-w-[1200px] min-w-[1024px] py-4 mx-auto">
        <img
          src="https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2022/07/cropped-cropped-gate-with-uni-1-8.png"
          className="w-40"
        />
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
