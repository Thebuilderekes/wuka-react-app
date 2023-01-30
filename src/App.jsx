import React from "react";

import Navigation from "./components/NavigationMenu/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Foot from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <About />
      <Foot />
    </div>
  );
}

export default App;
