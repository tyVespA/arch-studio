import React from "react";
import styles from "./PageName.module.css";

export default function PageName({ pageName }: { pageName: String }) {
  return (
    <div className={styles.pageNameContainer} aria-hidden="true">
      <div className={styles.line}></div>
      <p className={styles.pageName}>{pageName}</p>
    </div>
  );
}
