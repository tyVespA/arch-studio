import React from "react";
import PageName from "@/components/PageName";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <div>
      <header>
        <PageName pageName="Contact" aria-hidden="true" />
        <Navbar />
      </header>
    </div>
  );
}
