import GridMembers from "@/components/ex-com/ex-com";
import React from "react";

export const highBoard = [
  {
    img: "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2023/10/1-01-1024x1024.jpg",
    name: "Gasser Amr",
    faculty: "Computer Science Engineer",
    role: "Chairman",
    faceBook: "https://www.facebook.com/gasser.amrr/",

    linkedIn: "https://www.linkedin.com/in/gasseramr/",
  },
  {
    img: "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2023/10/2-01-1024x1024.jpg",
    name: "Mohamed A. Hasabo",
    faculty: "Industrial and Manufacturing Engineer",
    role: "Vice-Chairman",
    linkedIn: "https://www.linkedin.com/in/mohamed-a-hasabo-3461b3188/",
  },
  {
    img: "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2023/10/3-01-1024x1024.png",
    name: "Kareem Aboelmhaseb",
    faculty: "Mechatronics Engineer",
    role: "Technical Director",
    linkedIn: "https://www.linkedin.com/in/kareem-aboelmhasen-959b47279/",
  },
  {
    img: "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2023/10/4-01-01-1024x1024.png",
    name: "Mennatallah Zain Eldeen",
    faculty: "Biomedical and Bioinformatics Engineering major",
    role: "Treasurer",
    linkedIn: "https://www.linkedin.com/in/mennatallah-zain-el-deen-2235b61b7/",
  },
  {
    img: "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2023/10/5-01-1024x1024.png",
    name: "Yara Atallah",
    faculty: "Computer Science Engineer",
    role: "Vice-Chairman",
  },
];

export default function Page() {
  return (
    <div className="mt-[100px]">
      {" "}
      <GridMembers highBoard={highBoard} />{" "}
    </div>
  );
}
