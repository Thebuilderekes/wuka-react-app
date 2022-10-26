import React from 'react'
import "../index.css"
import cartoonImg from "../assets/cartoon-img.png"
import styled from 'styled-components';

function About() {
  return (
    <Section className = "about-section">
         <img src={cartoonImg} alt="" />
         <div className="card">      
           <h2 className="about-heading">WHO AM I?</h2> 
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

    padding: 10% 0;
}

img{
    width: 300px;
    height: 300px;
    border-radius: 50%;

    @media(max-width:400px){
        width: 200px;
        height: 200px;
    }
}

.card{
    border-radius: 16px;
    background-color: #B4AB98;
    box-shadow: 10px 10px 20px 0px rgba(99,54,58,0.75);
-webkit-box-shadow: 10px 10px 20px 0px rgba(99,54,58,0.75);
-moz-box-shadow: 10px 10px 20px 0px rgba(99,54,58,0.75);
    padding: 1% 10%;
    margin: 2% 20%;
    
    @media(max-width:400px){
        padding: 1% 10%;
        margin: 3% 5%;

    }


    h2 {
        font-size: var(--semilarge-fontSize) ;
        text-align: center;
        color: #CCDDEF;
        background-color: var(--heading-bg);
        padding: 1% 10%;
        margin: 2% 10%;

        @media(max-width:1400px){
            font-size: var(--large-fontSize) ;
        }

        @media(max-width:400px){
            font-size: var(--large-fontSize) ;
            text-align: center;
            color: #CCDDEF;
            background-color: var(--heading-bg);
            padding: 1% 10%;
            margin: 2% 0;
    

        }
    
    }
    
    p {
        font-size: var(--medium-fontSize );
        margin: 5% 10%;
        line-height: 1.5;

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