import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import img1 from "../assets/img12.png"
import img2 from "../assets/img10.webp"
import img3 from "../assets/img11.jpeg"
import img4 from "../assets/img12.png"
import img5 from "../assets/img13.png"

const MerchCard = styled.div /*style*/ `
border-radius:7px;
background:white;
width: 25%;
display:block;
flex-direction:row;
max-width:max-content ;



@media (min-width: 769px) and (max-width:900px){
   width:90%;
   height:65%;
   min-height:fit-content;
   margin-bottom:1rem;
   margin-right: 1.9rem;
  }
@media (min-width: 380px) and (max-width:768px){
   width:90%;
   height:65%;
   min-height:fit-content;
   margin-bottom:1rem;
   margin-right: 1.9rem;
  }
@media (max-width: 380px) {
   width:90%;
   height:65%;
   min-height:fit-content;
   margin-bottom:1rem;
   margin-right: 3rem;
  }

@media (min-width: 901px){
   height:65%;

   margin-bottom:1rem;
   
  }
` 

const ImgDiv = styled.img /*style*/ `

width:90%;
height:70%;
object-fit:cover;
margin-top:1rem;

`

const MerchInfo = styled.div /*style*/ `
  width: 100%;
  height: 30%;
  min-height:fit-content;
  display: flex;
  flex-direction: column;
  color:black;
  align-items:center;
  gap:1rem;
  

  .titlo {
    font-size:150%;
    height:10%;
    width:100%;
    margin: 0;

  }

  p {
    margin: 0; /* Remove default margin on paragraphs */
    height: 10%;
    width:90%;
    text-align:center;
    font-size:90%;
  }
` 


const Card = () => {
  
  const[merch,setMerch] = useState([]);

  useEffect (() => {
    const fetchData = async () => {
      try {
        
        // const response = await fetch("http://localhost:5173/pink/api/merch" );
        //regresar el fetch a local host para produccion
        const response = await fetch( "http://0.0.0.0:5173/pink/api/merch");
        if (!response.ok){
          throw new Error('Network response was not ok');
        }
         const merchData = await response.json();
        console.log( "Merch data: " , merchData)
        console.log( "Merch data: " , merchData.merch[0].imageUrl)
        try {
         setMerch(merchData.merch);
         
        }
        catch(err){
          console.log(err);
        }
      } catch(err){
        console.log(err)
        console.log("There was an error  " ,  err);
      }
    }
    fetchData()
  },[])
  console.log("Merc state " ,  merch)
 
    return (
      <>
      {merch.map((item) => (
        <MerchCard key={item.id}>
            <ImgDiv  src= {item.imageUrl}  alt={item.name}/>     
            <MerchInfo>
                <h1 className='titlo'>{item.name}</h1>
                <p>{item.description} </p>
                <h3>Precio: ${item.price}</h3>
        </MerchInfo>         
        </MerchCard>
        ))}
        </>
  );
  }

  export default Card;