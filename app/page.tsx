import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import { League_Spartan } from "@next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Home() {
  return (
    <main className={leagueSpartan.className}>
      <Navbar />
      <h1>test</h1>
      <Link href="portfolio">Portfolio</Link>
      <Link href="portfolio/test">Portfolio test</Link>
    </main>
  );
}
