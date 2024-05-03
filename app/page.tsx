import { Navbar } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      
      <Navbar/>

      <span className="text-5xl">My NextJS page</span>

      <Link href={'/general/about'}>About Page</Link>

    </main>
  );
}
