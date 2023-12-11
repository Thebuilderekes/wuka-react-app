import { useState, useEffect } from "react";
import styled from "styled-components";
// import "./gallery.css";
import wukaphoto1 from "../../assets/img/wuka-gal1.jpg";
import wukaphoto2 from "../../assets/img/wuka-gal2.jpg";

const images = [wukaphoto1, wukaphoto2];

function Gallery() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Increment currentIndex, and loop back to 0 when reaching the end
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 2000); // Change the delay to adjust the slideshow speed

		// Clear the interval when the component is unmounted
		return () => clearInterval(intervalId);
	}, []); // Empty dependency array ensures the effect runs only once on mount

	return (
		<Section className="gallery-container">
			<div className="dark-backdrop">
				<img
					src={images[currentIndex]}
					alt={`Image ${currentIndex + 1}`}
					className="gallery-img"
				/>
			</div>
		</Section>
	);
}

export default Gallery;

const Section = styled.section`
	position: relative;
	width: 100%;
	height: 70vh;
	overflow: hidden;
	z-index: 666;

	.dark-backdrop {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;

		.gallery-img {
			z-index: -1;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top center;
			filter: brightness(95%);
		}
	}
`;
