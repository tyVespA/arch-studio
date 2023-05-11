import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link href="#" className={styles.logoContainer}>
          <Image src="/logo-white.svg" width={97} height={40} alt="logo" />
        </Link>
        <Link href="#">Portfolio</Link>
        <Link href="#">Portfolio</Link>
        <Link href="#">Portfolio</Link>
      </div>
      <div className={styles.footerBtn}>
        <Button linkTo="#">See Out Portfolio</Button>
      </div>
    </footer>
  );
}
