import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "../index.css";
import bgImg from "../assets/wuka-2.webp";

function HeroSection() {
  return (
    <Section
      class="hero-section"
      name="hero"
    >
      <div className="hero-section-text">
        <h1 className=" animate__animated animate__fadeIn  animate__delay-1s">
          WUK△
        </h1>
        <h2 className=" animate__animated animate__fadeIn  animate__delay-2s">
          THE ALPHA
        </h2>
        <h2>
          <a
            href="https://spacefly.lnk.to/rigel"
            target="_blank"
          >
            Stream the Album here
          </a>
        </h2>
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

  .hero-section-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 40%;
    padding: 5% 2rem;
    text-align: center;

    @media (max-width: 800px) {
      background-color: #ffffff86;
      width: 100%;
      height: 100vh;
      padding: 25% 2rem;
    }

    @media (max-width: 400px) {
      padding: 25% 1rem;
    }

    h1 {
      font-size: var(--extralarge-fontSize);
      padding-top: 5%;
      z-index: 10;
      background-color: #1d1d1d;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: #ffffff7e 3px 5px 1px;

      @media (max-width: 800px) {
        h1 {
          font-size: var(--semilarge-fontSize);
        }
      }

      @media (max-width: 400px) {
        h1 {
          font-size: var(--large-fontSize);
        }
      }

      @media (max-width: 360px) {
        h1 {
          font-size: var(--medium-fontSize);
        }
      }
      span {
        writing-mode: horizontal-tb;
      }
    }

    h2 {
      margin: 0 0 5% 0;
      z-index: 10;
      font-size: var(--large-fontSize);
      background-color: #1d1d1d;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: #ffffff7e 3px 5px 1px;

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
