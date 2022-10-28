import React from 'react';
import styled from 'styled-components';
import "../index.css";
import wukaFooterImg  from "../assets/wuka-footer.jpg";
import instagram from "../assets/icons8-instagram-logo-footer.png";
import facebook from "../assets/icons8-facebook-footer.png";
import twitter from "../assets/icons8-twitter-footer.png";

function Foot() {
    const footer = "#footer"
    return (
      <Footer>
      <div className="container" id = {footer}>
        <div className="footer-img">
          <img src={wukaFooterImg} alt="wuka the artiste"/>
        </div>

        <div className= "follow">
          <h3>FOLLOW WUK△</h3>
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
            <p className="attribute"> Designed by <a href="https://twitter.com/iamthebuilder__" target="_blank">The Builder
              </a> </p>
          </div>
        </div>
        </div>
    </Footer>
  
    )
  }

export default Foot

const Footer = styled.footer`
.container {
    width: 100%;
    display: flex;
    overflow-x:hidden;
    font-family: 'Cinzel';

    @media(max-width: 800px){
        flex-direction: column;

        .footer-img {
            padding: 0;
            margin: 0;
            width:100%;
            
            img {
                width:100%;
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
          background-color:#181b1b;

         > h3 {
            margin: 3rem 0;
            font-size: var(--large-fontSize);
            font-weight: 600;
            color: #CCDDEF;
          }
        ul {
            display: flex;
            list-style: none;

            li{
                list-style: none;
                padding: 0 1rem;

                 a{
                     img  {
                        transition: 1s all;
                     }
                    
                    img:hover{
                 transform: scaleY(20px);
                }
                 }
            
            }
        }

        .attribution {

            .attribute {
                color: #CCDDEF;
                margin: 3rem 0;
                
                a {
                    color: #CCDDEF;
                }
            }
        }
    }
}

`