import React from "react";
import { useState } from "react";
import "../index.css";
import "../css/navigation.css";
import CloseIcon from "../assets/close-icon.png";
import HamburgerIcon from "../assets/hamburger-icon.png";
import instagram from "../assets/icons8-instagram-logo-footer.png";
import facebook from "../assets/icons8-facebook-footer.png";
import twitter from "../assets/icons8-twitter-footer.png";



function Navigation() {
  const [navb, setNavb] = useState(true);
  const handleClick = () => setNavb(!navb);
  const [click, setClick] = useState(true);
  const handleMenu = () => setNavb(!navb);
  const footer = "#footer"
  const about = "#about"
  return (
    <header className="header">
      <div className="nav-container">
        <div className="top-icons">
          <a href="">
            <img src={facebook} alt="facebook logo" />
          </a>
          <a href="https://instagram.com/denwuka">
            <img src={instagram} alt="instagram logo" />
          </a>
        </div>
        <nav className="desktop-nav nav">
          <div className="desktop-navItems">
            <a className="desktop-navLink" href="/">
              Home
            </a>
            <a className="desktop-navLink" href={about}>
              About
            </a>
            <a className="desktop-navLink" href={footer}>
              Contact
            </a>
          </div>
        </nav>
        <button
          className="btn"
          role="navigation"
          aria-label="main"
          onClick={handleClick}
        >
          {!navb ? (
            <img
              src={CloseIcon}
              alt="close navigation icon"
            />
          ) : (
            <img
                src={HamburgerIcon}
              alt="open navigation icon"
            />
          )}
        </button>
      </div>

      <nav className="mobile-nav nav">
        <div
          className={!navb || !click ? "display-mobile-nav" : "display-none"}
        >
          <a className="mobile-navLink" onClick={handleMenu} href="/">
            Home
          </a>
          <a className="mobile-navLink" onClick={handleMenu} href={about}>
            About
          </a>
          <a className="mobile-navLink" onClick={handleMenu} href={footer}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navigation
//how to create a responsive navbar in react?
