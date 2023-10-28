import React from "react";

export default function Partnerships() {
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
    <div className="flex flex-col items-center justify-center py-20 bg-sky-100/25 gap-12 w-full">
      <p className="text-3xl font-bold text-primary border-primary">
        Our Partnerships
      </p>
      <ul className="flex items-center gap-20 justify-center">
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
    </div>
  );
}