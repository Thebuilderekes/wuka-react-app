import React from "react";
// import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";
import { useState } from "react";
import "../index.css";
import "../css/navigation.css";
import CloseIcon from "../assets/close-icon.png";
import HamburgerIcon from "../assets/hamburger-icon.png";
import instagram from "../assets/icons8-instagram-logo-footer.png";
import facebook from "../assets/icons8-facebook-footer.png";
// import twitter from "../assets/icons8-twitter-footer.png";

function Navigation() {
  const [navb, setNavb] = useState(true);
  const handleClick = () => setNavb(!navb);
  const [click, setClick] = useState(true);
  const handleMenu = () => setNavb(!navb);

  return (
    <header className="header">
      <div className="nav-container">
        <div className="top-icons">
          <a href="">
            <img
              src={facebook}
              alt="facebook logo"
            />
          </a>
          <a href="https://instagram.com/denwuka">
            <img
              src={instagram}
              alt="instagram logo"
            />
          </a>
        </div>
        <nav className="desktop-nav nav">
          <ul className="desktop-navItems">
            <li>
              <Link
                smooth={true}
                offset={50}
                duration={500}
                className="desktop-navLink"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="desktop-navLink"
                smooth={true}
                offset={50}
                duration={500}
                to="about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="desktop-navLink"
                smooth={true}
                offset={50}
                duration={500}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
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
        <ul className={!navb || !click ? "display-mobile-nav" : "display-none"}>
          <li>
            <Link
              onClick={handleClick}
              smooth={true}
              offset={50}
              duration={500}
              className="mobile-navLink"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              className="mobile-navLink"
              smooth={true}
              offset={50}
              duration={500}
              to="about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              className="mobile-navLink"
              smooth={true}
              offset={50}
              duration={500}
              to="contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
//how to create a responsive navbar in react?
