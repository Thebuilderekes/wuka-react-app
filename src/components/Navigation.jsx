import React from "react";
// import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import "../index.css";
import "../css/navigation.css";
// import twitter from "../assets/icons8-twitter-footer.png";

function Navigation() {
  const [navb, setNavb] = useState(true);
  const handleClick = () => setNavb(!navb);
  const [click, setClick] = useState(true);
  const handleMenu = () => setNavb(!navb);
  const iconStyle = { color: "white", fontSize: "1.8rem" };
  return (
    <header className="header">
      <div className="nav-container">
        <div className="top-icons">
          <a href="">
            <FaFacebookF style={iconStyle} />
          </a>
          <a href="https://instagram.com/denwuka">
            <FaInstagram style={iconStyle} />
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
          {!navb ? <FaTimes style={iconStyle} /> : <FaBars style={iconStyle} />}
        </button>
      </div>

      <nav className="mobile-nav nav">
        <ul className={!navb || !click ? "display-mobile-nav" : "display-none"}>
          <li>
            <Link
              onClick={handleMenu}
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
              onClick={handleMenu}
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
              onClick={handleMenu}
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
