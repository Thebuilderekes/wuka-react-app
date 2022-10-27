import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "../index.css";
import bgImg from "../assets/wuka-2.webp";

function HeroSection() {
  return (
    <Section class="hero-section">
      <div className="hero-section-text">
        <h1 className= " animate__animated animate__fadeIn  animate__delay-1s">WUK△</h1>
        <h2  className= " animate__animated animate__fadeIn  animate__delay-2s">Album launching on the 11th of November</h2>
        <h3  className= " animate__animated animate__fadeIn  animate__delay-2s">TRACKS</h3>
        <ul class="music-link">
          <li>
            <a className = "animate__animated animate__fadeInUp animate__delay-3s" 
              href="https://distrokid.com/hyperfollow/wukaandquiries/midnight"
              target="_blank"
            >
              "Midnight" music with Quiries Odoko
            </a>
          </li>
          <li>
            <a className = "animate__animated animate__fadeInUp animate__delay-3s"
              href="https://www.youtube.com/watch?v=yV0KPRgC8uc&feature=youtu.be"
              target="_blank"
            >
              {" "}
              "Closer" video with Quiries Odoko
            </a>
          </li>
          <li>
            <a className = "animate__animated animate__fadeInUp animate__delay-3s" href="https://linki.st/denwuka" target="_blank">
              Youtube content
            </a>
          </li>
          <li>
            <a className = "animate__animated animate__fadeInUp animate__delay-3s" 
              href="https://audiomack.com/wuka-1/album/music-and-i-4"
              target="_blank"
            >
              Music and I
            </a>
          </li>
        </ul>
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
  font-family: 'Crimson Text';

  .hero-section-text {
    width: 30%;
    padding: 10% 2rem;
    text-align: center;

    @media(max-width: 1400px){
      padding: 25% 2rem;
      width: 100%;
    }

    @media(max-width: 800px){
      width: 100%;
      padding: 30% 2rem;
      background-color: #f5efef63;
    }

    @media(max-width: 400px){
    width: 100%;
    padding: 30% 2rem;
    top:0;
    right: 0;
    bottom: 0;
    }

    h1 {
      font-size: var(--extralarge-fontSize);
      padding-top: 5%;
      opacity: 0.7;
      z-index: 10;

      @media(max-width:800px){
            h1 {
              font-size: var(--semilarge-fontSize);
            }
          }

      @media(max-width:400px){
            h1 {
              font-size: var(--large-fontSize);
            }
          }

      @media(max-width:360px){
            h1 {
            font-size: var(--medium-fontSize);
            }
}
      span {
        writing-mode: horizontal-tb;
      }
    }

 

    h2 {
      margin: 5% 0;
      z-index: 10;
      font-size: var(--medium-fontSize);
    }

    h3{
      font-size: var(--large-fontSize);
    }
    @media(max-width: 400px){
      h3{
      font-size: var(--medium-fontSize);
    }
    }


    ul {

      li {
        list-style: none;
        padding: 5% 0;
        
        a {
          color: #cf3259;
          font-size: 24px;
          font-family: "Cinzel";
           font-weight: 700;

          @media(max-width: 400px){
            font-size: 16px;

          }
        }
      }
    }


  }
`;


