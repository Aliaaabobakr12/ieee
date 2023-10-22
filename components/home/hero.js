import Link from "next/link";
import React from "react";

function Partnerships() {
  const images = [
    {
      image:
        "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2022/08/Untitled-design-1.png",
      link: "https://www.alex.technesummit.com/2023",
    },
    {
      image:
        "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2022/09/MFC.Logo_.circular.2022.png",
      link: "https://makerfaire.com/",
    },
    {
      image:
        "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2022/12/logos-RGB-06-370x208-1.png",
      link: "https://eui.edu.eg/en/news/egypt-makes-electronics/",
    },
    {
      image:
        "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2022/12/Huras-Student-Branch-370x143-1.jpeg",
      link: "https://www.ieee.org/",
    },
    {
      image:
        "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2022/12/Robota-Logo-370x123-1.png",
      link: "https://www.robota-eg.com/",
    },
  ];

  return (
    <ul className="flex items-center gap-10">
      {images.map((image, index) => (
        <li key={index}>
          <a target="_blank" href={image.link}>
            <img
              className="w-28 h-28 object-contain hover:scale-110 transition-all"
              src={image.image}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

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
      <Partnerships />
    </div>
  );
}
