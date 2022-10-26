import React from 'react'
import styled from 'styled-components';
import "../index.css"
import bgImg from '../assets/wuka-2.jpg'

function HeroSection() {
  return (
    <Section class ="hero-section">
            <h1>WUKA</h1>
            <h2>Album launching on the 1th of November</h2>
    </Section>
  )
}

export default HeroSection


const Section= styled.section`
width: 100%;
height: 100vh;
background-image: url(${bgImg});
background-repeat: no-repeat;
background-size: cover;

@media(max-width: 400px){

    background-postiton: left center;

}

h1 {
    font-size: var(--extralarge-fontSize);
    padding-top: 5%;
    opacity: 0.5;
    z-index: 10;

    span {
        writing-mode: horizontal-tb;
    }
}

h2 {
    z-index: 10;
    font-size: var(--medium-fontSize);
}

`