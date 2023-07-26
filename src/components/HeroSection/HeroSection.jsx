import React from "react";
import styled from "styled-components";
// import { createGlobalStyle } from "styled-components";
import "../../index.css";
import bgImg from "../../assets/img/wuka-2.webp";

function HeroSection() {
	return (
		<Section className="hero-section">
			<div className="hero-section-text animate__animated animate__fadeIn  animate__delay-1s">
				<h1>WUKA</h1>
				<h2>THE ALPHA</h2>
				<nav>
					<a href="https://spacefly.lnk.to/rigel" target="_blank">
						Listen to Album here
					</a>
				</nav>
			</div>
		</Section>
	);
}

export default HeroSection;

const Section = styled.section`
	width: 100%;
	height: 100vh;
	background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-size: cover;
	font-family: "Crimson Text";
	position: relative;

	@media (max-width: 500px) {
		background-position: center;
	}

	.hero-section-text {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 15;
		text-align: center;

		@media (min-width: 800px) {
			position: absolute;
			top: 0;
			left: 0;
			width: 40%;
			height: 40%;
			padding: 5% 2rem;
		}

		nav {
			a {
				font-size: var(--large-fs);
				color: #ffffff;
				background-color: var(--dark-color);
				padding: 10px;
				text-decoration: none;
				&:hover {
					color: #cf3259;
					background-color: #f5f5f5;
					box-shadow: -12px 10px 67px 0px rgba(0, 0, 0, 0.75);
					-webkit-box-shadow: -12px 10px 67px 0px rgba(0, 0, 0, 0.75);
					-moz-box-shadow: -12px 10px 67px 0px rgba(0, 0, 0, 0.75);
				}

				@media (max-width: 500px) {
					font-size: var(--medium-fs);
				}
			}
		}

		@media (max-width: 800px) {
			background-color: #0e0c0c49;
			width: 100%;
			height: 100vh;
			padding: 70% 2rem;
		}

		@media (max-width: 400px) {
			padding: 25% 1rem;
		}

		h1 {
			font-size: var(--semiextralarge-fs);
			padding-top: 5%;
			z-index: 10;
			background-color: #ffffff7e;
			-webkit-background-clip: text;
			-moz-background-clip: text;
			background-clip: text;
			color: transparent;
			text-shadow: #994444 3px 5px 1px;

			@media (min-width: 800px) {
				font-size: var(--extralarge-fs);
			}

			@media (max-width: 500px) {
				padding-top: var(--spacing-130);
			}
		}

		h2 {
			margin-bottom: 5%;
			z-index: 10;
			font-size: var(--large-fs);
			background-color: #ffffff7e;
			-webkit-background-clip: text;
			-moz-background-clip: text;
			background-clip: text;
			color: transparent;
			text-shadow: #1d1d1d 3px 5px 1px;

			a {
				&:hover {
					color: #cf3259;
				}
			}
		}

		ul {
			li {
				list-style: none;
				padding: 10px 0;

				a {
					color: #cf3259;
					text-decoration: none;
					box-shadow: inset 0 0 0 0 #636363;
					margin: 0 -0.25rem;
					padding: 0 0.25rem;
					transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
					font-size: 24px;
					font-family: "Cinzel";
					font-weight: 700;
					transition: 1s all;

					@media (max-width: 400px) {
						font-size: 16px;
					}
				}

				a:hover {
					box-shadow: inset 10px 0 10px 0 #636363;
					color: #000000;
				}
			}
		}
	}
`;
