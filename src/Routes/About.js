import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutbg from "../img/a.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs"
export default function About() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-about" heroImg={aboutbg} title="About us" />
      <AboutUs/>
      <Footer />
    </div>
  );
}
