import React from "react";
// import * as Scroll from 'react-scroll';
import { FaBars, FaTimes, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import "../../index.css";
import "./navigation.css";
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
				<nav className="top-icons">
					<a
						href="https://instagram.com/denwuka"
						aria-label="instagram icon to page"
					>
						<FaInstagram style={iconStyle} />
					</a>
					<a href="" aria-label="facebook icon to page">
						<FaFacebookF style={iconStyle} />
					</a>
				</nav>
				<nav className="desktop-nav nav">
					<ul className="desktop-navItems">
						<li>
							<a className="desktop-navLink" href="index.html">
								Home
							</a>
						</li>
						<li>
							<a className="desktop-navLink" href="index.html#about">
								About
							</a>
						</li>
						<li>
							<a className="desktop-navLink" href="index.html#footer">
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<button
					className="btn"
					role="navigation"
					aria-label="navigation toggle button"
					onClick={handleClick}
				>
					{!navb ? <FaTimes style={iconStyle} /> : <FaBars style={iconStyle} />}
					{/* when the setNavb(navb) it means that the navigation is (true) closed and not in display so display the hamburger bars icon.
          However, when setNavb(!navb) it means that the navigation is (false) open and in display so display the times close icon  */}
				</button>
			</div>

			<nav className="mobile-nav nav">
				<ul className={!navb || !click ? "display-mobile-nav" : "display-none"}>
					<li>
						<a
							className="mobile-navLink"
							onClick={handleMenu}
							href="index.html"
						>
							Home
						</a>
					</li>
					<li>
						<a onClick={handleMenu} className="mobile-navLink" href="#about">
							About
						</a>
					</li>
					<li>
						<a onClick={handleMenu} className="mobile-navLink" href="#footer">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
