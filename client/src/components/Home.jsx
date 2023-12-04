import { Outlet } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import styled from "styled-components";
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img4 from '../assets/img4.jpeg'
import img3 from '../assets/img3.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
import img8 from '../assets/img8.jpeg'
import img9 from '../assets/img9.jpeg'

import Carousel from 'react-material-ui-carousel'

const Wrapper = styled.section /*style*/`
   color: #BF4F74;
   font-size: 1.5em;
   letter-spacing:1rem;
   background-color:beige;
   width: 49%;
   height: 75%;
   margin-top:1rem;
   display:inline-flex;
   flex-wrap:wrap;
   flex-direction:row;
   justify-content:center;
   border:tomato;

   &.secondary{
   background-color: purple;
   right:0;
   }

   @media (min-width: 769px) and (max-width:900px){
   width:90%;
   height:65%;
   min-height:max-content;
   margin-bottom:1rem;
   margin-right: 1.9rem;
  }
@media (min-width: 380px) and (max-width:768px){
   width:90%;
   height:65%;
   min-height:max-content;
   margin-bottom:1rem;
   margin-right: 1.9rem;
  }

@media (min-width: 901px){
   width:90%;
   height:65%;

   margin-bottom:1rem;
   margin-right: 2.8rem;
   
  }
   `

   const Container = styled.div /*style*/`
   width: 100%;
   height: 100%;
   display: inline-flex;
   overflow: hidden;
   justify-content:center;
   
   `
   const ImgCont = styled.img /*style*/`
    object-fit:cover;
   width:50%;
   height:50%;

   &.tertiary {
    width:25%;
    height:100%;
    right:10rem;
    object-position:70% 100%;
  }

&:hover{
    transform: scale(1.2);
    cursor: pointer;
    background: url('../assets/img4.jpeg')
}

   &.secondary{
    width:25%;
    height:100%;
    right:10rem;
    object-position:50% 50%;
 ;

   }
   &.primary{
    width:25%;
    height:100%;
  
    object-position:90% 50%;

   }

   &.ford{
    width:25%;
    height:100%;
 
    object-position:72% 50%;
   }

   &.fifth{
    width:25%;
    height:100%;
    object-position:32% 50%;
   }
   `

const Home = () =>{
    const [imageSource, setImageSource] = useState(img1);

  const handleMouseOver = () => {
    // Change the image source when the mouse is over
    setImageSource(img7);
  };

  const handleMouseOut = () => {
    // Change the image source back when the mouse is out
    setImageSource(img1);
  };

    return(
        <>
        <Container >
        {/* <Wrapper>
        <ImgCont src={img7} alt="Logo" />
        <ImgCont src={img8} alt="Logo" />
        <ImgCont src={img5} alt="Logo" />
        <ImgCont src={img6} alt="Logo" />
        </Wrapper> */}

        <Wrapper className="secondary">
        <ImgCont className="primary " src={imageSource} alt="Logo" />
        <ImgCont className="tertiary" src={img2} alt="Logo" />
        <ImgCont className="ford" src={img3} alt="Logo" />
        <ImgCont className="fifth" src={img9} alt="Logo" />
        </Wrapper>
        </Container>
      
        </>

    );
}

export default Home;