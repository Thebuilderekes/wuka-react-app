import React from "react";
import "../../index.css";
import cartoonImg from "../../assets/img/cartoon-img.png";
import styled from "styled-components";
import "animate.css";

function About() {
	return (
		<Section className="about-section" id="about">
			<img src={cartoonImg} alt="cartoon-like image of wuka" />
			<div className="card   animate__animated animate__fadeIn animate__delay-4s ">
				<h2 className="about-heading animate__animated animate__swing animate__infinite	infinite">
					ABOUT
				</h2>
				<p className="  animate__animated animate__fadeIn animate__delay-5s ">
					Introducing the mesmerizing melodies and soul-stirring compositions of
					WUKA. With the release of his highly anticipated debut album{" "}
					<a href="https://spacefly.lnk.to/rigel" target="_blank">
						"Rigel"
					</a>{" "}
					&nbsp; he invites listeners on an extraordinary musical journey that
					transcends genres and captivates hearts.
				</p>
				<p>
					This groundbreaking collection showcases his unique artistry,
					effortlessly blending elements of pop, rock, and alternative, creating
					an unmistakable sound that resonates with audiences worldwide.
				</p>
			</div>
		</Section>
	);
}

export default About;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 20;
	align-items: center;
	background-color: #b75a64;
	padding: 5%;
	font-family: "Crimson Text";

	@media (max-width: 800px) {
		padding: 18% 0;
	}

	@media (max-width: 400px) {
		padding: 15% 0;
	}

	img {
		width: 200px;
		height: 200px;
		border-radius: 50%;

		@media (max-width: 800px) {
			margin: 8% 0;
		}
		@media (max-width: 400px) {
			width: 150px;
			height: 150px;
			margin: 5% 0;
		}
	}

	.card {
		border-radius: 16px;
		background-color: #b4ab98;
		box-shadow: 10px 10px 20px 0px rgba(99, 54, 58, 0.75);
		-webkit-box-shadow: 10px 10px 20px 0px rgba(99, 54, 58, 0.75);
		-moz-box-shadow: 10px 10px 20px 0px rgba(99, 54, 58, 0.75);
		padding: 1% 5%;
		text-align: center;

		@media (min-width: 700px) {
			width: 60%;
			margin: 2% 15%;
		}

		@media (max-width: 699px) {
			width: 90%;
			padding: 5% 5%;
			margin: 3% 5%;
		}

		h2 {
			/* width: 50%; */
			font-size: var(--large-fs);
			text-align: center;
			color: #ccddef;
			background-color: var(--dark-color);
			padding: var(--spacing-1) var(--spacing-5);
			margin: 0 var(--spacing-20);
			font-weight: 700;

			@media (min-width: 1400px) {
				margin: var(--spacing-2) var(--spacing-20);
			}

			@media (max-width: 900px) {
				margin: var(--spacing-2) var(--spacing-25);
				padding: var(--spacing-3);
			}

			@media (max-width: 600px) {
				text-align: center;
				color: #ccddef;
				background-color: var(--dark-color);
				padding: var(--spacing-1) var(--spacing-10);
				margin: var(--spacing-2) var(--spacing-25);
			}

			@media (max-width: 500px) {
				font-size: var(--medium-fs);
				background-color: var(--dark-color);
				padding: var(--spacing-1) 0%;
				margin: var(--spacing-2) var(--spacing-20);
			}
		}

		p {
			font-size: var(--medium-fs);
			margin: var(--spacing-2) 0;
			line-height: 1.5;
			text-align: left;

			a {
				color: #f5172d;
			}

			@media (max-width: 520px) {
				margin: var(--spacing-5) 0%;
			}
		}
	}
`;
