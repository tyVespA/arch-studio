import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>test</h1>
      <Link href="portfolio">Portfolio</Link>
      <Link href="portfolio/test">Portfolio test</Link>
    </main>
  );
}
