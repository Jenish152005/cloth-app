import React, { useState } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Clothing Store</div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-box" />
      </div>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/mens">Mens</Link>
          </li>
          <li>
            <Link to="/womens">Womens</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/cart">CArt</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
      </div>
    </header>
  );
};

export default Header;
