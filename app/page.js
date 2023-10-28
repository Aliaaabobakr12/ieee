import GridMembers from "@/components/ex-com/ex-com";
import CompAndEve from "@/components/home/compAndEve";
import Hero from "@/components/home/hero";
import Partnerships from "@/components/home/partnership";
import Image from "next/image";
import { highBoard } from "./ex-com/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Partnerships />
      <GridMembers highBoard={highBoard} sliced />
      {/* <CompAndEve /> */}
    </main>
  );
}
