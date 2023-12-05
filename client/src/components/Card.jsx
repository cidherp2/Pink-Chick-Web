// Card.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MerchModal from './MerchModal'; // Import the MerchModal component

const MerchCard = styled.div /*style*/`
  border-radius: 7px;
  background: white;
  width: 25%;
  display: block;
  flex-direction: row;
  max-width: max-content;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;

  }

  @media (min-width: 769px) and (max-width: 900px) {
    width: 90%;
    height: 65%;
    min-height: fit-content;
    margin-bottom: 1rem;
    margin-right: 1.9rem;
  }

  @media (min-width: 360px) and (max-width: 768px) {
    width: 90%;
    height: 65%;
    min-height: fit-content;
    margin-bottom: 1rem;
    margin-right: 1.9rem;
  }
  @media (max-width: 360px) {
    width: 90%;
    height: 65%;
    min-height: fit-content;
    margin-bottom: 1rem;
    margin-right: 3rem;
  }

  @media (min-width: 901px) {
    height: 65%;
    margin-bottom: 1rem;
  }
`;

const ImgDiv = styled.img /*style*/`
  width: 90%;
  height: 70%;
  min-height: 70%;
  object-fit: cover;
  margin-top: 1rem;

  @media (min-width: 262px) {
    height: 301.66px;
  }
`;

const MerchInfo = styled.div /*style*/`
  width: 100%;
  height: 30%;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  gap: 1.8rem;

  .titlo {
    font-size: 150%;
    height: 10%;
    width: 100%;
    margin: 0;
  }

  p {
    margin: 0;
    height: 10%;
    width: 90%;
    text-align: center;
    font-size: 90%;
  }
  h3 {
    height: 10%;
    width: 90%;
  }

  @media (min-width: 769px) and (max-width: 900px) {
    
      min-height: fit-content;
      gap: 1rem;
    
  }

  @media (min-width: 360px) and (max-width: 768px) {
    
      min-height: fit-content;
      gap: 1.7rem;
   
  }
  @media (max-width: 360px) {
   
      min-height: fit-content;
      gap: 1rem;
   
  }
`;

const Card = () => {
  const [merch, setMerch] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
 


  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:5173/pink/api/merch" );
        //regresar el fetch a localhost para producción
        const response = await fetch(
          'http://localhost:5173/pink/api/merch' &&
            'http://192.168.1.70:5173/pink/api/merch'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const merchData = await response.json();
        // console.log('Merch data: ', merchData);
        // console.log('Merch data: ', merchData.merch[0].imageUrl);
        try {
          setMerch(merchData.merch);
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log(err);
        console.log('There was an error  ', err);
      }
    };
    fetchData();
  }, []);


  // console.log('Merc state ', merch);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

 

  return (
    <>
      {merch.map((item) => (
        <MerchCard key={item.id} onClick={() => openModal(item)}>
          <ImgDiv src={item.imageUrl} alt={item.name} />
          <MerchInfo>
            <h1 className="titlo">{item.name}</h1>
            <p>{item.description} </p>
            <h3>Precio: ${item.price}</h3>
          </MerchInfo>
        </MerchCard>
      ))}
      <MerchModal isOpen={selectedItem !== null} closeModal={closeModal} item={selectedItem} />
    </>
  );
};

export default Card;
