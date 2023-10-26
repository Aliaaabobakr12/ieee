import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-[1200px] min-w-[1024px] mx-auto gap-16">
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-[60%]">
          <p className="text-primary text-lg font-bold">SINCE 1963</p>
          <p className="text-secondary font-bold text-5xl w-[500px] leading-[60px]">
            Be A Part in One Of The Biggest Tech Communities!
          </p>
          <p className="text-lg w-[600px] font-medium">
            If you are intrested in any tecnology Field, You are in the right
            place. Join IEEE @ E-JUST Universty Student Branch and Start the
            learning Journey!
          </p>
        </div>
        <img src="/hero.png" className="w-[40%]" />
      </div>
    </div>
  );
}
