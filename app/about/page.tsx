import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import PageName from "@/components/PageName";
import Navbar from "@/components/Navbar";
import EmployeeCard from "@/components/EmployeeCard";

export default function page() {
  return (
    <div>
      <header>
        <PageName pageName="About Us" aria-hidden="true" />
        <Navbar />
      </header>
      <section className={styles.heroSection}>
        <picture>
          <source
            media="(min-width: 760px)"
            srcSet="/images/about/desktop/image-hero.jpg"
          />
          <source
            media="(min-width: 375px)"
            srcSet="/images/about/tablet/image-hero.jpg"
          />
          <img
            src="/images/about/mobile/image-hero.jpg"
            alt="persona che lavora al computer"
          />
        </picture>
        <div className={styles.heroText}>
          <h2>
            Your team of <br /> professionals
          </h2>
          <p>
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </section>
      <section className={styles.heritageSection}>
        <div className={styles.heritageText}>
          <h2>
            Our <br />
            Heritage
          </h2>
          <p>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.{" "}
          </p>
          <p>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
        <div className={styles.heritageImage}>
          <picture>
            <source
              media="(min-width: 760px)"
              srcSet="/images/about/desktop/image-heritage.jpg"
            />
            <source
              media="(min-width: 375px)"
              srcSet="/images/about/tablet/image-heritage.jpg"
            />
            <img
              src="/images/about/mobile/image-heritage.jpg"
              alt="persona che lavora al computer"
            />
          </picture>
        </div>
      </section>
      <section className={styles.leadersSection}>
        <div className={styles.leadersText}>
          <h2>
            The <br />
            Leaders
          </h2>
        </div>
        <div className={styles.leadersGrid}>
          <EmployeeCard
            photoName="avatar-jake"
            name="Jake Richards"
            role="Chief Architect"
          />
          <EmployeeCard
            photoName="avatar-thompson"
            name="Thompson Smith"
            role="Head of Finance"
          />
          <EmployeeCard
            photoName="avatar-jackson"
            name="Jackson Rourke"
            role="Lead Designer"
          />
          <EmployeeCard
            photoName="avatar-maria"
            name="Maria Simpson"
            role="Senior Architect"
          />
        </div>
      </section>
    </div>
  );
}
