import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <picture>
        <source
          media="(min-width: 638px)"
          srcSet="/images/home/desktop/image-hero-paramour.jpg"
        />
        <source
          media="(min-width: 375px)"
          srcSet="/images/home/tablet/image-hero-paramour.jpg"
        />
        <img
          src="/images/home/mobile/image-hero-paramour.jpg"
          alt="paramount"
        />
      </picture>
      <div className={styles.description}>
        <h2>Project Paramount</h2>
        <p>
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
        <button>See</button>
      </div>
    </div>
  );
}
