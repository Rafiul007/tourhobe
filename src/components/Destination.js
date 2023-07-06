import React from "react";
import "./DestinationStyle.css";
import bndr2 from "../img/bandarban2.jpg";
import bndr1 from "../img/bandarban3.jpg";
import cox1 from "../img/cox1.jpg";
import cox2 from "../img/cox2.jpg";
import DestinationData from "./DestinationData";
export default function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Travel is an investment in yourself</p>
      <DestinationData
      cName= "first-des"
        heading="Bandarban"
        text="Discover Bandarban, a captivating hill district in southeastern
            Bangladesh. With its enchanting landscapes, cascading waterfalls,
            and lush green hills, it's a haven for nature enthusiasts. Explore
            iconic attractions like Nilgiri Hills, Chimbuk Hill, and Sangu River
            for breathtaking vistas. Immerse yourself in the rich cultural
            diversity of indigenous tribes, adding a unique dimension to your
            visit. Unforgettable experiences await in Bandarban."
        img1={bndr1}
        img2={bndr2}
      />
      <DestinationData
      cName="first-des-rev"
        heading="Cox's Bazar"
        text="Experience the wonders of Cox's Bazar, the world's longest natural sandy beach located in Bangladesh. 
              Stretching over 120 kilometers, it offers pristine shores, azure waters, and captivating sunsets. 
              Explore the vibrant beach town and indulge in thrilling water sports or simply unwind on the golden sands. 
              Don't miss visiting Himchori, Inani Beach, and the nearby St. Martin's Island for unforgettable natural beauty. 
              Discover the perfect blend of relaxation and adventure in Cox's Bazar."
        img1={cox1}
        img2={cox2}
      />
    </div>
  );
}
