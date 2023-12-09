import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

export default function Navigation() {
  const iconStyle = {
    color: "white",
    fontSize: "2rem",
  };
  const [navb, setNavb] = useState(true);
  const [click, setClick] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const handleClick = () => setNavb(!navb);
  const handleMenu = () => setNavb(!navb);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 2000) {
        setPreviousScrollPosition(currentScrollPosition);
        setIsVisible(false);
      } else if (currentScrollPosition < 2000) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScrollPosition]);

  return (
    <>
      {isVisible && (
        <Header className="navbar header">
          <div className="nav-container">
            <div className="social-media-icons">
              <a className="logo" aria-label="home" href="/" target="_blank">
                WUKA
              </a>
            </div>
            <nav className="desktop-nav nav">
              <ul className="desktop-navItems">
                <li>
                  <a className="desktop-navLink" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="desktop-navLink" href="#about">
                    About
                  </a>
                </li>

                <li>
                  <a className="desktop-navLink" href="#footer">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <button
              className="nav-toggler"
              role="navigation"
              aria-label="menu"
              onClick={handleClick}
            >
              {!navb ? (
                <FaTimes style={iconStyle} />
              ) : (
                <FaBars style={iconStyle} />
              )}
            </button>
          </div>

          <nav className="mobile-nav nav">
            <ul
              className={
                !navb || !click ? "display-mobile-nav" : "hide-mobile-nav"
              }
            >
              <li>
                {" "}
                <a className="mobile-navLink" onClick={handleMenu} href="/">
                  Home
                </a>
              </li>

              <li>
                {" "}
                <a
                  className="mobile-navLink"
                  onClick={handleMenu}
                  href="#about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="mobile-navLink"
                  onClick={handleMenu}
                  href="#footer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </Header>
      )}
    </>
  );
}

const Header = styled.div`
  background-color: var(--dark-color);
  padding: 1rem 0;
  width: 100%;
  position: fixed;
  z-index: 999;
  font-family: "Crimson Text";
  border-bottom: 1px solid rgb(56, 56, 56);

  .hide-mobile-nav {
    opacity: 0;
    display: none;
  }

  .logo {
    color: var(--text-color);
    font-size: var(--medium-fs);
    text-decoration: none;
    font-weight: 900;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    font-family: "Inter";

    .social-media-icons {
      display: flex;
    }

    @media (max-width: 1400px) {
      padding: 0 2rem;
    }

    @media (max-width: 780px) {
      padding: 0 1.5rem;
    }

    //DESKTOP NAVIGATION STYLES

    .desktop-nav {
      display: none;

      .desktop-navItems {
        display: flex;
        li {
          list-style: none;
          .desktop-navLink {
            color: var(--text-color);
            padding: 0 10px;
            font-size: var(--medium-fs);
            cursor: pointer;
            -webkit-transition: all 500ms ease;
            transition: all 500ms ease;
            text-decoration: none;

            &:hover {
              color: var(--pink-color);
            }
          }
        }
      }

      @media (min-width: 800px) {
        display: block;
      }
    }

    button.nav-toggler {
      display: none;
      background-color: transparent;
      color: var(--text-color);
      font-weight: 600;
      border: none;

      @media (min-width: 800px) {
        display: none;
      }

      @media (max-width: 799px) {
        display: block;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  //MOBILE NAVIGATION STYLES

  .mobile-nav {
    .display-mobile-nav {
      display: flex;
      opacity: 1;
      transition:
        opacity 1s,
        display 1s;
      flex-direction: column;
      align-items: center;
      padding-top: 13%;
      height: 100vh;

      li {
        padding: 2rem 0;
        list-style: none;
        .mobile-navLink {
          font-size: var(--semi-large-fs);
          color: var(--text-color);
          text-decoration: none;
        }
      }
    }
  }
`;
//how to create a responsive navbar in react?
