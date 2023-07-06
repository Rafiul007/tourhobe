import React from "react";
import "./TripStyle.css";
import TripData from "./TripData";
import trip1 from "../img/cox2.jpg";
import trip2 from "../img/bandarban1.jpg";
import trip3 from "../img/sajek.jpg";
export default function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>

      <div className="trip-card">
        <TripData
          img={trip1}
          heading="Trip in Cox's Bazar"
          text="Unveil paradise at Cox's Bazar - a symphony of sun,
           sand, and serenity. Lose yourself in the embrace of the world's 
           longest sandy beach, where turquoise waves dance with golden 
           shores. Embark on an unforgettable adventure, where blissful 
           moments and enchanting sunsets paint the canvas of your dreams."
        />
        <TripData
          img={trip2}
          heading="Trip in Bandarban"
          text="Discover tranquility in Bandarban - a hidden gem of nature's 
          embrace. Let lush green hills and cascading waterfalls enchant your 
          senses. Immerse yourself in the vibrant tapestry of indigenous 
          cultures as you explore the secrets of this picturesque hill district.
           In Bandarban, find solace, adventure, and a world of breathtaking beauty 
           waiting to be explored."
        />
        <TripData
          img={trip3}
          heading="Trip in Sajek"
          text="Unveil the allure of Sajek, a paradise nestled amidst the misty hills.
           Let your senses awaken to the breathtaking landscapes and rolling green valleys.
            Surrender to the tranquility of this remote getaway, where untouched nature 
            and mesmerizing sunsets captivate your soul. Experience serenity like never 
            before in Sajek, a haven for seekers of peace and natural beauty."
        />
      </div>
    </div>
  );
}
