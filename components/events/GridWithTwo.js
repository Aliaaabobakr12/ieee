import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function GridWithTwo({ grid, headerName }) {
  return (
    <main className="min-h-screen flex flex-col max-w-[1200px] min-w-[1024px] mx-auto gap-16 items-center">
      <p className="text-3xl font-bold text-primary w-fit border-primary">
        {headerName}
      </p>
      <ul className="grid grid-cols-2 gap-20 w-full">
        {grid.map((event, index) => (
          <li
            className="flex flex-col rounded-3xl transition-all shadow-lg overflow-hidden w-full h-full relative"
            key={index}
          >
            <div className="bg-primary w-full h-2 absolute top-0" />
            <img
              className="w-full rounded-t-3xl h-72 object-cover"
              src={event.img}
            />
            <div className="flex flex-col gap-2 p-4">
              <p className="font-bold text-primary">{event.name}</p>
              <p className="text-gray-600 text-sm">{event.date}</p>
              <div className="flex items-center gap-2 ">
                <p className="text-primary">
                  <FaLocationDot />
                </p>
                <p>{event.loc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
