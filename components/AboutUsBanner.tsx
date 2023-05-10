import React from "react";
import styles from "./AboutUsBanner.module.css";
import Button from "./Button";

export default function AboutUsBanner() {
  return (
    <div className={styles.aboutUsBanner}>
      <picture>
        <source
          media="(min-width: 635px)"
          srcSet="/images/home/desktop/image-small-team.jpg"
        />
        <source
          media="(min-width: 375px)"
          srcSet="/images/home/tablet/image-small-team.jpg"
        />
        <img src="/images/home/mobile/image-small-team.jpg" alt="paramount" />
      </picture>
      <div className={styles.cta}>
        <h2>
          Small team, <br />
          big ideas
        </h2>
        <Button linkTo="#">About Us</Button>
      </div>
    </div>
  );
}
