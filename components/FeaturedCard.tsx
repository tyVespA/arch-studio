import React from "react";
import styles from "./FeaturedCard.module.css";
import Link from "next/link";

export default function FeaturedCard({ imageName, projectName, number }) {
  return (
    <div className={styles.picture}>
      <picture>
        <source
          media="(min-width: 760px)"
          srcSet={`/images/portfolio/desktop/${imageName}.jpg`}
        />
        <source
          media="(min-width: 375px)"
          srcSet={`/images/portfolio/tablet/${imageName}.jpg`}
        />
        <img
          src={`/images/portfolio/mobile/${imageName}.jpg`}
          alt={`${imageName}`}
        />
      </picture>
      <p className={styles.number}>{number}</p>
      <div className={styles.projectName}>
        <h4>{projectName}</h4>
        <Link href="#">View All Projects</Link>
      </div>
    </div>
  );
}
