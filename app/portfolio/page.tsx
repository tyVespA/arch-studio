import React from "react";
import PageName from "@/components/PageName";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function portfolio() {
  return (
    <div>
      <header>
        <PageName pageName="Portfolio" aria-hidden="true" />
        <Navbar />
      </header>
    </div>
  );
}
