import React from 'react'
import "../index.css"
import cartoonImg from "../assets/cartoon-img.png"
import styled from 'styled-components';
import 'animate.css';

function About() {
    const about = "#about"
  return (
    <Section className = "about-section" id ={about}>
         <img src={cartoonImg} alt="" />
         <div className="card">      
           <h2 className="about-heading animate__animated animate__swing animate__infinite	infinite">WHO AM I?</h2> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maiores nam vitae magnam aliquid est accusamus itaque obcaecati corporis dicta modi voluptatum quibusdam rerum provident, non tempore. Quasi eius odio accusamus laboriosam ducimus aut autem aperiam. Labore iusto voluptate maxime. Neque explicabo ex nesciunt obcaecati aliquam velit ipsa quibusdam vero?
           </p>
        </div>
    </Section>
  )
}

export default About


const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #B75A64;
padding: 5%;

@media(max-width:400px){
    padding: 15% 0;
}

img{
    width: 200px;
    height: 200px;
    border-radius: 50%;

    @media(max-width:400px){
        width: 150px;
        height: 150px;
        margin: 5% 0;
    }
}

.card{
    border-radius: 16px;
    background-color: #B4AB98;
    box-shadow: 10px 10px 20px 0px rgba(99,54,58,0.75);
-webkit-box-shadow: 10px 10px 20px 0px rgba(99,54,58,0.75);
-moz-box-shadow: 10px 10px 20px 0px rgba(99,54,58,0.75);
    padding: 1% 5%;


    @media(min-width:700px){
        margin: 2% 25%;

    }


    @media(max-width:400px){
        padding: 5% 10%;
        margin: 3% 5%;
    }

    h2 {
        font-size: var(--semilarge-fontSize) ;
        text-align: center;
        color: #CCDDEF;
        background-color: var(--dark-color);
        padding: 1% 10%;
        margin: 2% 10%;
        font-family: 'Crimson Text';
        font-weight: 700;

        @media(min-width:1400px){
            font-size: var(--large-fontSize) ;
            margin: 2% 20%;
        }

        @media(max-width: 900px){
            margin: 2% 30%;
            padding: 3%

        }
        

        @media(max-width:400px){
            font-size: var(--large-fontSize) ;
            text-align: center;
            color: #CCDDEF;
            background-color: var(--dark-color);
            padding: 1% 10%;
            margin: 2% 0;
        }
    }
    
    p {
        font-size: var(--medium-fontSize );
        margin: 5% 0;
        line-height: 1.5;
        font-family: 'Crimson Text';


        @media(max-width:400px){
            font-size: var(--default-fontSize );
            margin: 5% 2%;

        }
    }
}


`;

const Img = styled.img`
    border-radius: 50%;
    margin: 0 auto;
`;