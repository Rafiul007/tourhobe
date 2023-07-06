import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import herobg from "../img/tanguar.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={herobg}
        title="A Journey Through Life"
        text="Choose your journey with us"
        btnText = "Travel now"
        url= "/service"
        btnClass= "hero-btn"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  );
}
