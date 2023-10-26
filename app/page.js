import CompAndEve from "@/components/home/compAndEve";
import Hero from "@/components/home/hero";
import Partnerships from "@/components/home/partnership";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Partnerships />
      <CompAndEve />
    </main>
  );
}
