import GridWithTwo from "@/components/events/GridWithTwo";
import React from "react";

export default function Page() {
  const comps = [
    {
      name: "JAC-ECC 2022",
      date: "19/12/2022",
      img: "https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2023/07/317749464_1115682232447151_6037372735688246040_n.jpg",
      loc: "HQ, E-JUST, Burg Al-Arab, Alexandria, Egypt",
    },
    {
      name: "JAC-ECC 2022",
      date: "19/12/2022",
      img: "https://ieeenu.com/images/edition2.webp",
      loc: "HQ, E-JUST, Burg Al-Arab, Alexandria, Egypt",
    },
  ];
  return (
    <div className="mt-[100px]">
      <GridWithTwo grid={comps} headerName={"Competitions"} />
    </div>
  );
}
