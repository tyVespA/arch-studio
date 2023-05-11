import React from "react";
import styles from "./Button.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Button({ children, linkTo }) {
  return (
    <Link href={linkTo}>
      <button className={styles.button}>
        <div>
          {children}
          <Image
            src="/images/icons/icon-arrow.svg"
            width={26}
            height={20}
            alt="simbolo freccia"
          />
        </div>
      </button>
    </Link>
  );
}
