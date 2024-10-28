import { Tooltip as ReactToolTip } from "react-tooltip";
import styled from "styled-components";
import "../../index.css";
import { FaInstagram, FaYoutube, FaSoundcloud } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const iconStyle = { color: "var(--white-color)", fontSize: "4rem" };
const socialLinks = [
  {
    url: "https://soundcloud.com/wuka7healpha/sets/rigel-933478488",
    text: <FaSoundcloud style={iconStyle} />,
    ariaLabel: "sound cloud icon to channel",
    tooltip: "Sound cloud",
  },
  {
    url: "https://instagram.com/denwuka",
    text: <FaInstagram style={iconStyle} />,
    ariaLabel: "Instagram icon to channel",
    tooltip: "Instagram",
  },
  {
    url: "https://www.youtube.com/channel/UCti39pqcX9znmY2QPsM9rSw",
    ariaLabel: "YouTube icon to channel",
    text: <FaYoutube style={iconStyle} />,
    tooltip: "YouTube",
  },
];
function Foot({ url, ariaLabel, text, tooltip }) {
  return (
    <Footer id="footer">
      <Fade>
        <div className="footer-text__container">
          <a className="back-to-top-btn" href={`${socialLinks[0].url}`}>
            Stream Album
          </a>
          <dl>
            <dt>
              <h3>Follow Wuka</h3>
            </dt>
            <dd>
              <ul>
                {socialLinks.map((link) => (
                  <li key={link.tooltip}>
                    <a
                      href={link.url}
                      aria-label={link.ariaLabel}
                      target="_blank"
                      rel="noreferrer noopener"
                      data-tooltip-id={link.tooltip}
                      data-tooltip-content={link.tooltip}
                      data-tooltip-place
                    >
                      {link.text}
                    </a>
                    <ReactToolTip id={link.tooltip} place="bottom-end" />
                  </li>
                ))}
              </ul>
            </dd>
          </dl>

          <small className="attribute">
            {" "}
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/ekeopre-beredugo-204580111/"
              target="_blank"
              aria-label="link to website developer"
            >
              The Builder
            </a>{" "}
          </small>
        </div>
      </Fade>
    </Footer>
  );
}

export default Foot;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: var(--spacing-8);

  font-family: "Crimson Text";
  background: var(--dark-color);
  width: 100%;

  .footer-text__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    /*		@media (max-width: 900px) {
			margin: var(--spacing-10) 0;
		}
    */

    @media (max-width: 500px) {
      padding-top: var(--spacing-15);
      padding-left: var(--spacing-2);
      padding-right: var(--spacing-2);
    }

    .back-to-top-btn {
      font-size: var(--medium-fs);
      margin-bottom: var(--spacing-1);
      background-color: var(--dark-pink-color);
      color: #ffffff;
      padding: var(--spacing-2);
    }

    .back-to-top-btn:hover {
      background-color: var(--darker-pink-color);
    }

    dl {
      dt {
        h3 {
          text-transform: uppercase;
          margin: 3rem 0;
          font-weight: 600;
          color: var(--white-color);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          text-shadow:
            -0.09em 0 0 #f22613,
            0.09em 0 0 #02a9be;
          font-size: var(--semi-extra-large-fs);
          text-align: center;

          @media (max-width: 1240px) {
            font-size: var(--mid-large-fs);
          }

          @media (max-width: 1050px) {
            font-size: var(--large-fs);
          }

          @media (max-width: 500px) {
            font-size: var(--mid-extra-large-fs);
          }
        }
      }

      dd {
        ul {
          display: flex;
          justify-content: center;
          list-style: none;
          padding-bottom: var(--spacing-10);

          li {
            list-style: none;
            padding: 0 1rem;
          }
        }
      }
    }
  }

  .attribute {
    width: 100%;
    padding: var(--spacing-1) 0;
    color: var(--white-color);
    background-color: var(--mid-dark-color);
    text-align: center;
    font-size: var(--default-fs);

    a {
      text-decoration: underline;
      color: var(--white-color);
    }
  }
`;
