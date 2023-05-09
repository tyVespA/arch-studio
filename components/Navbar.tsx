import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.header}>
      <Link href="#">
        <Image
          src="/logo.svg"
          width={97}
          height={40}
          alt="logo della compagnia"
        />
      </Link>
      <button className={styles.hamburger}>
        <Image
          src="/images/icons/icon-hamburger.svg"
          width={24}
          height={17}
          alt="bottone menu"
        />
      </button>
      <nav className={styles.navbar}>
        <Link href="">Portfolio</Link>
        <Link href="">About Us</Link>
        <Link href="">Contact</Link>
      </nav>
    </div>
  );
}
