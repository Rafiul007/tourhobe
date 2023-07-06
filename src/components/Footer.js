import React from "react";
import "./FooterStyle.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TourHobe</h1>
          <p>Choose your journey with us</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Version</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Facebook</a>
          <a href="/">Discord</a>
          <a href="/">Instagram</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
          <a href="/">Hiring</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">@Rafie</a>
        </div>
      </div>
    </div>
  );
}
