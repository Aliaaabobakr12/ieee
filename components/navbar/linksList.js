"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function LinksList() {
  const pathname = usePathname();
  const links = [
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
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <ul className="flex gap-10 text-xs font-semibold text-slate-600">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className={`hover:text-primary transition-all hover:border-b-4 border-primary py-2 ${
              pathname === link.path && "text-primary border-b-4 border-primary"
            }}`}
            href={link.path}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
