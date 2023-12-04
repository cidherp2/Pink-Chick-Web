import React from 'react';
import styled from "styled-components";
import img1 from "../assets/img1.jpeg"
import Card from './Card';

const MerchContainer = styled.div /*style*/ `
display: inline-flex;
width: 100%;
height: 100vh;
justify-content:space-between;
flex-wrap:wrap;
flex-direction:row;
margin-top:3rem;


@media (min-width: 380px) and (max-width:768px){
   flex-direction:column;
   flex-wrap:nowrap;
   justify-content:space-between;
   margin-top:0;
   align-items:center;
   margin-bottom: 3rem;
 
  }


@media (min-width: 769px) and (max-width:900px) {
   flex-direction:column;
   flex-wrap:nowrap;
   align-items:center;
   margin-top:0;
 
  }
@media (min-width: 901px) {
   flex-direction:row;
   margin-top:1rem;
   gap: 1rem;
  

  }

` 

const MerchStore = () => {
    return (
     <MerchContainer>
     <Card/>
     </MerchContainer>
  );
  }

  export default MerchStore;