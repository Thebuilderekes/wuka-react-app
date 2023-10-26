import React from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../../index.css";

function Navigation() {
	const [showNav, setShowNav] = useState(true);
	const handleClick = () => setShowNav(!showNav);
	const iconStyle = {
		color: "white",
		fontSize: "2rem",
	};

	useEffect(() => {
		const handleClickOutside = () => {
			if (setShowNav(true)) {
				console.log("clicked outside");
				setShowNav(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showNav]);

	return (
		<Header className="header">
			<div className={showNav ? "show-desktop-menu" : "show-mobile-menu"}>
				<nav className="social-icons">
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
				<nav className="nav nav">
					<ul className={showNav ? "navItems" : "mobile-nav "}>
						<li>
							<a className="navLink" href="index.html">
								Home
							</a>
						</li>
						<li>
							<a className="navLink" href="#about">
								About
							</a>
						</li>
						<li>
							<a className="navLink" href="#footer">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
			{/* Navigation toggle button */}
			<button
				className="btn"
				role="navigation"
				aria-label="navigation toggle button"
				onClick={handleClick}
			>
				{showNav ? <FaBars style={iconStyle} /> : <FaTimes style={iconStyle} />}
				{/* when the setShowNav(showNav) is true, it means that the mobile navigation is closed indicating mobile hamburger icon is displayed to allow user click/tap open the menu is in display.
          However, when setShowNav(!showNav) is false it means that the mobile navigation is not closed but the close menu icon is now in display to allow user click/tap to close the menu  (false) */}
			</button>
		</Header>
	);
}

export default Navigation;

const Header = styled.header`
	background-color: var(--dark-color);
	display: flex;
	justify-content: space-between;
	padding: 1rem 20px;
	width: 100%;
	position: fixed;
	z-index: 999;

	/*TODO: start: figure out why you have to style .social-icons and li here to  for mobile because it is not working down where it is suppose to be nested and styled, might have something to do with ::marker*/
	.social-icons {
		display: flex;
		gap: 1rem;
	}

	li {
		list-style: none;

		@media (max-width: 700px) {
			margin: 20px 0;
		}
		a {
			text-decoration: none;
			color: #ffffff;
			font-size: 1.2rem;
			font-family: "Crimson Text";
			text-transform: uppercase;
		}
	}
	/*TODO: end */

	.show-desktop-menu {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;

		.show-mobile-menu {
			display: flex;
			flex-direction: column;
			padding: 0 20px;

			@media (max-width: 1400px) {
				flex-direction: row;
			}
		}

		@media (max-width: 780px) {
			flex-direction: column;
		}

		.social-icons {
			display: flex;

			a {
				text-decoration: none;
				color: #ffffff;
			}
		}

		.nav {
			display: none;
			flex-direction: column;
			list-style: none;

			@media (min-width: 800px) {
				display: block;
			}

			@media (max-width: 800px) {
				padding: 100px 0;
			}

			.navItems {
				display: flex;
				flex-direction: row;
				list-style: none;

				@media (min-width: 800px) {
					display: flex;
					flex-direction: row;
				}

				li {
					.navLink {
						text-decoration: none;
						color: #ffffff;
						padding: 20px 10px;
						font-size: 1.2rem;
						text-transform: uppercase;
						cursor: pointer;
						font-family: "Crimson Text";
						transition: all 1000ms ease;

						&:hover {
							color: #cf3259;
						}
					}
				}
			}
		}
	}

	button {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-color: transparent;
		margin: 0 10px;
		color: #ffffff;
		font-weight: 600;
		border: none;

		@media (min-width: 800px) {
			display: none;
		}
	}
`;
