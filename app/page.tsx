import { Hero } from "@/components"; //can import like this using index.ts in components
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  );
}
