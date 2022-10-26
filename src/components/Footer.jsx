import React from 'react'
import styled from 'styled-components';
import "../index.css"
import wukaFooterImg  from "../assets/wuka-footer.jpg";
import instagram from "../assets/icons8-instagram-logo-footer.png";
import facebook from "../assets/icons8-facebook-footer.png";
import twitter from "../assets/icons8-twitter-footer.png";

function Foot() {
    return (
      <Footer>
      <div className="container">
        <div className="footer-img">
          <img src={wukaFooterImg} alt="wuka the artiste"/>
        </div>
        <div className="follow">
          <p>FOLLOW WUKA</p>
          <ul>
            <li>
                <a href="">
                    <img src={facebook} alt="facebook logo"/>
                </a>
            </li>
            <li>
                <a href="https://instagram.com/denwuka"><img src={instagram}
                  alt="instagram logo"/>
                </a>
            </li>
            <li>
                <a href="">
                    <img src={twitter} alt="twitter logo"/>
                </a>
            </li>
          </ul>
          <div className="attribution">
            <p className="attribute"> designed by <a href="https://twitter.com/iamthebuilder__" target="_blank">Ekeopre
              </a> </p>
          </div>
        </div>
      </div>
    </Footer>
  
    )
  }

export default Foot

const Footer = styled.footer`
background-color: var(--heading-bg);
.container {
    display: flex;

    .footer-img {

        img {
            width: 100%;
        }
    }

}


.follow {
    display: flex;
    

    ul {
    display: flex;
        li {

            list-style: none
        }
    }
}


`