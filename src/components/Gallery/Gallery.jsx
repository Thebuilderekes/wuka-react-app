import { useState, useEffect } from "react";
import "./gallery.css";

const images = [
	"../src/assets/img/wuka-gal.jpg",
	"../src/assets/img/wuka-galll.jpg",
];

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
		<div className="gallery-container">
			<div className="dark-backdrop">
				<img
					src={images[currentIndex]}
					alt={`Image ${currentIndex + 1}`}
					className="gallery-img"
				/>
			</div>
		</div>
	);
}

export default Gallery;
