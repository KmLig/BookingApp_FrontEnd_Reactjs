import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">BookingApp</h1>
        <ul className="navbar__menu">
          <li className="navbar__item"><Link to="/" className="navbar__link">Home</Link></li>
          <li className="navbar__item"><Link to="/hotels" className="navbar__link">Hotels</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
