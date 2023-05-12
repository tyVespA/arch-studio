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
      <Image
        src={`/images/about/desktop/${photoName}.jpg`}
        width={350}
        height={320}
        alt="primo piano del dirigente"
      ></Image>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
}
