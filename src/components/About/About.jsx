import React from "react";

import { Fade } from "react-awesome-reveal";
import "../../index.css";
import cartoonImg from "../../assets/img/cartoon-img.png";
import styled from "styled-components";
import "animate.css";

function About() {
  return (
    <Section aria-labelleby="about_wuka" className="about-section" id="about">
      <img src={cartoonImg} alt="cartoon-like image of wuka" />
      <div className="card">
        <Fade triggerOnce>
          <h2
            className="about-heading animate__animated animate__swing animate__infinite	infinite"
            id="about_wuka"
          >
            ABOUT
          </h2>
          <p>
            Introducing the mesmerizing melodies and soul-stirring compositions
            of WUKA. Listen to his highly anticipated{" "}
            <a
              className="album_link"
              href="https://spacefly.lnk.to/rigel"
              target="_blank"
            >
              debut album{" "}
            </a>{" "}
            as he invites listeners on an extraordinary musical journey that
            transcends genres and captivates hearts.
          </p>
          <p>
            This groundbreaking collection showcases his unique artistry,
            effortlessly blending elements of pop, rock, and alternative,
            creating an unmistakable sound that resonates with audiences
            worldwide.
          </p>
        </Fade>
      </div>
    </Section>
  );
}

export default About;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  background: rgb(183, 90, 100);
  background: linear-gradient(
    90deg,
    rgba(183, 90, 100, 1) 0%,
    rgba(111, 39, 46, 1) 0%,
    rgba(183, 90, 100, 1) 31%
  );
  padding: var(--spacing-5);
  font-family: "Crimson Text";
  padding: var(--spacing-10);

  @media (max-width: 500px) {
    padding: var(--spacing-15) var(--spacing-5);
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

    @media (max-width: 800px) {
      margin: var(--spacing-8) 0;
    }
    @media (max-width: 400px) {
      width: 150px;
      height: 150px;
      margin: var(--spacing-5) 0;
    }
  }

  .card {
    background-color: var(--cream-color);
    -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;

    padding: var(--spacing-1) var(--spacing-5);
    text-align: center;

    @media (min-width: 1200px) {
      width: 60%;
    }

    .album_link {
      text-decoration: underline;
    }

    @media (max-width: 699px) {
      width: 100%;
      padding: var(--spacing-5);
      margin: var(--spacing-3) var(--spacing-5);
    }

    h2 {
      font-size: var(--large-fs);
      text-align: center;
      color: var(--white-color);
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
      margin: var(--spacing-5) 0;
      line-height: 1.5;
      text-align: left;
      color: var(--dark-color);

      a {
        color: var(--dark-pink-color);
      }

      @media (max-width: 520px) {
        font-size: var(--semi-medium-fs);
        margin: var(--spacing-5) 0%;
      }
    }
  }
`;
