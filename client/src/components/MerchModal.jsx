// MerchModal.js
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div /*style*/ `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div /*style*/ `
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: black;
  position: relative;
`;

const Cerrar = styled.button /*style*/ `
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1rem;
  margin-right: 1rem;
  background-color: #e74c3c;
`;

const MerchModal = ({ isOpen, closeModal, item }) => {
  if (!isOpen) {
    return null;
  }

  const addToCart = () => {
    try {
      console.log("Item added to cart:", item);
      // You can add your logic to add the item to the cart here
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <Cerrar onClick={closeModal}>X</Cerrar>
        <button onClick={addToCart}>Añadir al carrito</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MerchModal;
