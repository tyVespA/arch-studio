/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "./EmployeeCard.module.css";

export default function EmployeeCard({
  photoName,
  name,
  role,
}: {
  photoName: string;
  name: string;
  role: string;
}) {
  return (
    <div className={styles.employeeCard}>
      <img
        src={`/images/about/desktop/${photoName}.jpg`}
        alt="primo piano del dirigente"
      />
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
}
