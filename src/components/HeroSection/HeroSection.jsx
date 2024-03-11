import React from "react";
import { useEffect, useState } from 'react';
import styled from "styled-components";
import "../../index.css";
import bgImg from "../../assets/img/wuka-2.webp";

function HeroSection() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
	  const handleWindowScroll = () => {
		const newScrollPosition = window.scrollY;
		setScrollPosition(newScrollPosition);
	  };
  
	  window.addEventListener('scroll', handleWindowScroll);
  
	  // Cleanup function to remove event listener on unmount
	  return () => window.removeEventListener('scroll', handleWindowScroll);
	}, []);
  
	const heroSectionStyle = {
	  transform: `translateX(${scrollPosition * 0.2}px)`, // Adjust multiplier for desired movement
	  marginLeft: `${scrollPosition * 0.1}px`, // Adjust multiplier for margin-left
	  backgroundImage: `url(${bgImg})`, // Replace with your image path
	  backgroundSize: 'cover',
	  backgroundPosition: 'center',
	  height: '100vh', // Ensure full viewport height
	};

	return (
		<Section className="hero-section" style={heroSectionStyle} id="hero-section">
			<div className="hero-section-text animate__animated animate__fadeInLeft  animate__delay-1s">
				<div className="hero-section-text__container">
					<h1 className="main-heading">WUKA</h1>
					<h2 className="sub-heading">THE ALPHA</h2>
					<nav>
						<a href="https://spacefly.lnk.to/rigel" target="_blank">
							Stream Now
						</a>
					</nav>
				</div>
			</div>
		</Section>
	);
}

export default HeroSection;

const Section = styled.section`
	width: 100%;
	height: 100vh;
	/* background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-size: cover; */
	font-family: "Crimson Text";

	@media (max-width: 500px) {
		background-position: center;
	}

	.hero-section-text {
		width: 100%;
		height: 100vh;

		@media (max-width: 500px) {
			background: #f3869814;
			justify-content: end;
		}
	}

	.hero-section-text__container {
		width: 42%;
		height: inherit;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;

		@media (max-width: 500px) {
			width: 100%;
			gap: 0.8rem;
			padding-top: var(--spacing-70);
		}
	}

	.main-heading {
		color: #22313f;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		text-shadow: -0.09em 0 0 #f22613, 0.09em 0 0 #02a9be;
		font-size: var(--extra-large-fs);

		@media (max-width: 1030px) {
			font-size: var(--large-fs);
		}
	}

	.sub-heading {
		font-size: var(--large-fs);
		font-weight: 900;

		@media (max-width: 1030px) {
			font-size: var(--medium-fs);
		}
	}
	nav {
		margin-top: var(--spacing-5);
		width: 100%;
	}

	a {
		text-decoration: none;
		font-size: var(--medium-fs);
		background: var(--dark-color);
		color: var(--white-color);
		padding: var(--spacing-2) var(--spacing-5);
		-webkit-transition: all 300ms ease;
		transition: all 300ms ease;
		&:hover {
			background: var(--cream-color);
			color: var(--dark-color);
			box-shadow: 2px 5px 4px rgb(0, 0, 0);
		}
	}
`;
