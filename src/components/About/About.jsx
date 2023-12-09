import React from "react";
import "../../index.css";
import cartoonImg from "../../assets/img/cartoon-img.png";
import styled from "styled-components";
import "animate.css";

function About() {
  return (
    <Section className="about-section" id="about">
      <img src={cartoonImg} alt="cartoon-like image of wuka" />
      <div className="card ">
        <h2 className="about-heading animate__animated animate__swing animate__infinite	infinite">
          ABOUT
        </h2>
        <p>
          Introducing the mesmerizing melodies and soul-stirring compositions of
          WUKA. With the release of his highly anticipated debut album{" "}
          <a href="https://spacefly.lnk.to/rigel" target="_blank">
            "RIGEL"
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
  gap: 2rem;
  align-items: center;
  background-color: var(--pink-color);
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
    border-radius: 16px;
    background-color: var(--cream-color);
    box-shadow: 10px 10px 20px 0px rgba(99, 54, 58, 0.75);
    -webkit-box-shadow: 10px 10px 20px 0px rgba(99, 54, 58, 0.75);
    -moz-box-shadow: 10px 10px 20px 0px rgba(99, 54, 58, 0.75);
    padding: var(--spacing-1) var(--spacing-5);
    text-align: center;

    @media (min-width: 1200px) {
      width: 60%;
    }

    @media (max-width: 699px) {
      width: 90%;
      padding: var(--spacing-5);
      margin: var(--spacing-3) var(--spacing-5);
    }

    h2 {
      /* width: 50%; */
      font-size: var(--large-fs);
      text-align: center;
      color: var(--text-color);
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
        color: var(--text-color);
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
