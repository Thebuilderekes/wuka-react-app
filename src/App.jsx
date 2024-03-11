import React from "react";

import Navigation from "./components/NavigationMenu/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Foot from "./components/Footer/Footer";
import CalendarDemo from "./components/Booking/Booking";
import "./index.css";

function App() {
	return (
		<div className="app-body">
			<Navigation />
			<HeroSection />
			<main>
			<About />
			<CalendarDemo/>
			<Gallery />
			</main>
			<Foot />
		</div>
	);
}

export default App;
