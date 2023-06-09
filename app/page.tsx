import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import PageName from "@/components/PageName";
import AboutUsBanner from "@/components/AboutUsBanner";
import FeaturedCard from "@/components/FeaturedCard";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <PageName pageName="Home" aria-hidden="true" />
        <Navbar />
        <Hero />
      </header>
      <section className={styles.welcomeSection}>
        <div>
          <h1>
            Welcome to <br />
            Arch Studio
          </h1>
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div>
          <Image
            src="/images/home/desktop/image-welcome.jpg"
            width={350}
            height={568}
            alt="dettaglio di un edificio"
          />
        </div>
      </section>
      <section>
        <AboutUsBanner />
      </section>
      <section>
        <div className={styles.featuresHeader}>
          <h3>Featured</h3>
          <Button linkTo="portfolio">See All</Button>
        </div>
        <div className={styles.cardsContainer}>
          <FeaturedCard
            imageName="image-del-sol"
            projectName="Image Del Sol"
            anchorText="View All Projects"
            number="1"
            date=""
          />
          <FeaturedCard
            imageName="image-228b"
            projectName="228B Tower"
            anchorText="View All Projects"
            number="2"
            date=""
          />
          <FeaturedCard
            imageName="image-prototype"
            projectName="Le Prototype"
            anchorText="View All Projects"
            number="3"
            date=""
          />
        </div>
        <div className={styles.featuresMobileBtn}>
          <Button linkTo="portfolio">See All</Button>
        </div>
      </section>
    </>
  );
}
