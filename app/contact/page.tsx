import React from "react";
import PageName from "@/components/PageName";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <header>
        <PageName pageName="Contact" aria-hidden="true" />
        <Navbar />
      </header>
      <section className={styles.heroSection}>
        <picture>
          <source
            media="(min-width: 760px)"
            srcSet="/images/contact/desktop/image-hero.jpg"
          />
          <source
            media="(min-width: 375px)"
            srcSet="/images/contact/tablet/image-hero.jpg"
          />
          <img
            src="/images/contact/mobile/image-hero.jpg"
            alt="persona che lavora al computer"
          />
        </picture>
        <div className={styles.heroText}>
          <h2>
            Tell us about <br /> your project
          </h2>
          <p>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </section>
      <section className={styles.contactDetails}>
        <h2>
          Contact <br />
          Details
        </h2>
        <address className={styles.mainOffice}>
          <div>
            <h4>Main Office</h4>
            <p>
              Mail:{" "}
              <Link href="mailto:archone@mail.com<">archone@mail.com</Link>
            </p>
            <p>Address: 1892 Chenoweth Drive TN</p>
            <p>Phone : 123-456-3451</p>
          </div>
          <button className={styles.mapLink}>
            <p>View on map</p>{" "}
            <Image
              src="/images/icons/icon-arrow.svg"
              width={26}
              height={20}
              alt="simbolo freccia"
            />
          </button>
        </address>
        <address className={styles.secondaryOffice}>
          <div>
            <h4>Main Office</h4>
            <p>
              Mail:{" "}
              <Link href="mailto:archtwo@mail.com<">archtwo@mail.com</Link>
            </p>
            <p>Address : 3399 Wines Lane TX</p>
            <p>Phone : 832-123-4321</p>
          </div>
          <button className={styles.mapLink}>
            <p>View on map</p>{" "}
            <Image
              src="/images/icons/icon-arrow.svg"
              width={26}
              height={20}
              alt="simbolo freccia"
            />
          </button>
        </address>
      </section>
      <section className={styles.mapSection}>MAP</section>
      <section className={styles.formSection}>FORM</section>
    </div>
  );
}
