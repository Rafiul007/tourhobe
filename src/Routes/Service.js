import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import herobg from "../img/sundarban2.jpg";
import Footer from "../components/Footer";
import Trip from '../components/Trip';
export default function Service() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-about" heroImg={herobg} title="Services" />
      <Trip/>
      <Footer />
    </div>
  );
}
