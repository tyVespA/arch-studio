import React from "react";
import Image from "next/image";
import styles from "./EmployeeCard.module.css";

export default function EmployeeCard({
  photoName,
  name,
  role,
}: {
  photoName: String;
  name: String;
  role: String;
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
