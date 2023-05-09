import React from "react";
import styles from "./PageName.module.css";

export default function PageName({ pageName }) {
  return (
    <div className={styles.pageNameContainer} aria-hidden="true">
      <p className={styles.pageName}>{pageName}</p>
    </div>
  );
}
