import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import herobg from "../img/potrait2.jpg";
import Footer from "../components/Footer";
import ContractForm from "../components/ContractForm";
export default function Contact() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-about" heroImg={herobg} title="Contact" />
      <ContractForm/>
      <Footer />
    </div>
  );
}
