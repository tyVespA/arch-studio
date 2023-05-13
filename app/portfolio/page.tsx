import React from "react";
import styles from "./page.module.css";
import PageName from "@/components/PageName";
import Navbar from "@/components/Navbar";
import FeaturedCard from "@/components/FeaturedCard";

export default function portfolio() {
  return (
    <div>
      <header>
        <PageName pageName="Portfolio" aria-hidden="true" />
        <Navbar />
      </header>
      <main className={styles.portfolioGrid}>
        <FeaturedCard
          imageName="image-seraph"
          projectName="Seraph Station"
          anchorText=""
          number=""
          date="September 2019"
        />
        <FeaturedCard
          imageName="image-eebox"
          projectName="Eebox Building"
          anchorText=""
          number=""
          date="August 2017"
        />
        <FeaturedCard
          imageName="image-federal"
          projectName="Federal II Tower"
          anchorText=""
          number=""
          date="March 2017"
        />
        <FeaturedCard
          imageName="image-del-sol"
          projectName="Image Del Sol"
          anchorText=""
          number=""
          date="January 2016"
        />
        <FeaturedCard
          imageName="image-prototype"
          projectName="Le Prototype"
          anchorText=""
          number=""
          date="October 2015"
        />
        <FeaturedCard
          imageName="image-228b"
          projectName="228B Tower"
          anchorText=""
          number=""
          date="April 2015"
        />
        <FeaturedCard
          imageName="image-edelweiss"
          projectName="Grand Edelweiss Hotel"
          anchorText=""
          number=""
          date="December 2013"
        />
        <FeaturedCard
          imageName="image-netcry"
          projectName="Netcry Tower"
          anchorText=""
          number=""
          date="August 2012"
        />
        <FeaturedCard
          imageName="image-hypers"
          projectName="Hypers"
          anchorText=""
          number=""
          date="January 2012"
        />
        <FeaturedCard
          imageName="image-sxiv"
          projectName="SXIV Tower"
          anchorText=""
          number=""
          date="March 2011"
        />
        <FeaturedCard
          imageName="image-trinity"
          projectName="Trinity Bank Tower"
          anchorText=""
          number=""
          date="September 2010"
        />
        <FeaturedCard
          imageName="image-paramour"
          projectName="Project Paramour"
          anchorText=""
          number=""
          date="February 2008"
        />
      </main>
    </div>
  );
}
