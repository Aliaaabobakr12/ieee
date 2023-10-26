import Link from "next/link";
import React from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";

export default function CompAndEve() {
  const list = [
    {
      name: "Events",
      count: "3",
      icon: <BsFillCalendarEventFill />,
      path: "/events",
    },
    {
      name: "Competitions",
      count: "1",
      icon: <FaMedal />,
      path: "/competitions",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-12 w-full">
      <p className="text-3xl font-bold text-primary pb-2 border-b-4 w-fit border-primary">
        Check Our Latest
      </p>
      <ul className="flex items-center gap-40 justify-center">
        {list.map((item, index) => (
          <Link
            href={item.path}
            className="flex flex-col gap-4 items-center p-10 bg-sky-200/25 rounded-lg w-[250px] hover:scale-110 transition-all"
            key={index}
          >
            <span className="text-primary text-7xl">{item.icon}</span>
            <div className="flex gap-2 text-xl font-semibold text-slate-600 tracking-widest">
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
