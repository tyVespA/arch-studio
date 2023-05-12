import React from "react";
import styles from "./FeaturedCard.module.css";
import Link from "next/link";

export default function FeaturedCard({
  imageName,
  projectName,
  anchorText,
  number,
  date,
}: {
  imageName: String;
  projectName: String;
  anchorText: String;
  number: String;
  date: String;
}) {
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
      <div className={styles.projectInfo}>
        <h4>{projectName}</h4>
        <Link href="Portfolio">{anchorText}</Link>
        <p>{date}</p>
      </div>
    </div>
  );
}
