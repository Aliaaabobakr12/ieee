import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

export default function GridMembers({ highBoard, sliced }) {
  return (
    <main className="min-h-screen flex flex-col max-w-[1200px] min-w-[1024px] mx-auto gap-16 my-10 items-center justify-center">
      <p className="text-3xl font-bold text-primary w-fit border-primary">
        Excutives Committees
      </p>
      <ul className="grid grid-cols-3 gap-20 items-center">
        {sliced
          ? highBoard.slice(0, 3).map((member, index) => (
              <li
                className="flex flex-col items-center rounded-3xl transition-all shadow-lg overflow-hidden w-[320px] h-full"
                key={index}
              >
                <img
                  className="w-full rounded-t-3xl hover:scale-105 transition-all h-72 object-cover"
                  src={member.img}
                />
                <div className="flex flex-col gap-2 items-center p-4">
                  <p className="font-bold text-primary">{member.name}</p>
                  <p className="text-gray-400 text-sm">{member.faculty}</p>
                  <p className="">{member.role}</p>
                  <div className="flex gap-2 text-xl font-semibold text-slate-600 items-center">
                    {member.linkedIn && (
                      <a
                        className="hover:scale-105 transition-all"
                        target="_blank"
                        href={member.linkedIn}
                      >
                        <AiFillLinkedin color="#0A66C2" size={30} />
                      </a>
                    )}
                    {member.faceBook && (
                      <a
                        className="hover:scale-105 transition-all"
                        target="_blank"
                        href={member.faceBook}
                      >
                        <AiFillFacebook color="#0866FF" size={30} />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))
          : highBoard.map((member, index) => (
              <li
                className="flex flex-col items-center rounded-3xl transition-all shadow-lg overflow-hidden w-[320px] h-full"
                key={index}
              >
                <img
                  className="w-full rounded-t-3xl hover:scale-105 transition-all h-72 object-cover"
                  src={member.img}
                />
                <div className="flex flex-col gap-2 items-center p-4">
                  <p className="font-bold text-primary">{member.name}</p>
                  <p className="text-gray-400 text-sm text-center">
                    {member.faculty}
                  </p>
                  <p className="">{member.role}</p>
                  <div className="flex gap-2 text-xl font-semibold text-slate-600 items-center">
                    {member.linkedIn && (
                      <a
                        className="hover:scale-105 transition-all"
                        target="_blank"
                        href={member.linkedIn}
                      >
                        <AiFillLinkedin color="#0A66C2" size={30} />
                      </a>
                    )}
                    {member.faceBook && (
                      <a
                        className="hover:scale-105 transition-all"
                        target="_blank"
                        href={member.faceBook}
                      >
                        <AiFillFacebook color="#0866FF" size={30} />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
      </ul>
      {sliced && (
        <Link
          className="text-sm font-semibold px-6 py-3 bg-primary
           text-white rounded hover:bg-primary/75 transition shadow-md"
          href={"/ex-com"}
        >
          View more
        </Link>
      )}
    </main>
  );
}
