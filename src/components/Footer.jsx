import React from "react";
import styled from "styled-components";
import "../index.css";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import wukaFooterImg from "../assets/wuka-footer.jpg";

function Foot() {
  const iconStyle = { color: "white", fontSize: "1.8rem" };
  return (
    <Footer name="contact">
      <div className="container">
        <div className="footer-img">
          <img
            src={wukaFooterImg}
            alt="wuka the artiste"
          />
        </div>

        <div className="follow">
          <h3>FOLLOW WUK△</h3>
          <ul>
            <li>
              <a href="">
                <FaFacebookF style={iconStyle} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/denwuka">
                <FaInstagram style={iconStyle} />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter style={iconStyle} />
              </a>
            </li>
          </ul>
          <div className="attribution">
            <p className="attribute">
              {" "}
              Designed by{" "}
              <a
                href="https://twitter.com/iamthebuilder__"
                target="_blank"
              >
                The Builder
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Foot;

const Footer = styled.footer`
  .container {
    width: 100%;
    display: flex;
    overflow-x: hidden;
    font-family: "Cinzel";

    @media (max-width: 800px) {
      flex-direction: column;

      .footer-img {
        padding: 0;
        margin: 0;
        width: 100%;

        img {
          width: 100%;
          padding: 0;
          margin: 0;
        }
      }
    }

    .follow {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #181b1b;

      > h3 {
        margin: 3rem 0;
        font-size: var(--large-fontSize);
        font-weight: 600;
        color: #ccddef;
      }
      ul {
        display: flex;
        list-style: none;

        li {
          list-style: none;
          padding: 0 1rem;

          a {
            img {
              transition: 1s all;
            }

            img:hover {
              transform: scaleY(20px);
            }
          }
        }
      }

      .attribution {
        .attribute {
          color: #ccddef;
          margin: 3rem 0;

          a {
            color: #ccddef;
          }
        }
      }
    }
  }
`;
