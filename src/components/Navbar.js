import "./navbarStyle.css";
import { MenuItems } from "./MenuItems";
import {useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="NavBarIteams">
      <h1 className="navbar-logo">TourHobe</h1>

      <ul
        className={mobile ? "nav-menu active" : "nav-menu"}
        onClick={() => setMobile(true)}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url} >
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>SignUp</button>
      </ul>
      <button className="menu-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )} 
      </button>
    </nav>
  );
}
