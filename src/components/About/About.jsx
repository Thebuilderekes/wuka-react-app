import React from "react";
import "../../index.css";
import cartoonImg from "../../assets/img/cartoon-img.png";
import styled from "styled-components";
import "animate.css";

function About() {
	return (
		<Section className="about-section" id="about">
			<img src={cartoonImg} alt="cartoon-like image of wuka" />
			<div className="card">
				<h2 className="about-heading animate__animated animate__swing animate__infinite	infinite">
					ABOUT
				</h2>
				<p>
					Introducing the mesmerizing melodies and soul-stirring compositions of
					our talented musician names WUKA. With the release of his highly
					anticipated debut album{" "}
					<a href="https://spacefly.lnk.to/rigel">"Rigel"</a>, he invites
					listeners on an extraordinary musical journey that transcends genres
					and captivates hearts. This groundbreaking collection showcases his
					unique artistry, effortlessly blending elements of pop, rock, and
					alternative, creating an unmistakable sound that resonates with
					audiences worldwide. <br />
					<br />
					With each captivating performance and every heartfelt lyric, his star
					power continues to shine brighter, firmly establishing him as a force
					to be reckoned with in the industry. Stay tuned as this musical
					virtuoso continues to soar to new heights, enchanting audiences with
					his soulful voice, mesmerizing compositions, and an unwavering
					dedication to his craft. With his debut album as a testament to his
					undeniable talent, he is poised to make an enduring impact on the
					world of music, captivating hearts and captivating the hearts and
					minds of music lovers everywhere.
				</p>
			</div>
		</Section>
	);
}

export default About;

const Section = styled.div`
	display: flex;
	flex-direction: column;
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

		@media (min-width: 700px) {
			margin: 2% 15%;
		}

		@media (max-width: 699px) {
			padding: 5% 10%;
			margin: 3% 5%;
		}

		h2 {
			font-size: var(--large-fontSize);
			text-align: center;
			color: #ccddef;
			background-color: var(--dark-color);
			padding: 1% 5%;
			margin: 2% 30%;
			font-weight: 700;

			@media (min-width: 1400px) {
				margin: 2% 20%;
			}

			@media (max-width: 900px) {
				margin: 2% 25%;
				padding: 3%;
			}

			@media (max-width: 600px) {
				text-align: center;
				color: #ccddef;
				background-color: var(--dark-color);
				padding: 1% 10%;
				margin: 2% 23%;
			}

			@media (max-width: 500px) {
				font-size: var(--medium-fontSize);
				text-align: center;
				color: #ccddef;
				background-color: var(--dark-color);
				padding: 1% 0%;
				margin: 2% 20%;
			}
		}

		p {
			font-size: var(--medium-fontSize);
			margin: 5% 0;
			line-height: 1.5;

			a {
				color: ;
			}

			@media (max-width: 520px) {
				font-size: var(--default-fontSize);
				margin: 5% 2%;
			}
		}
	}
`;
