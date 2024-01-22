import React from 'react';
import styled from 'styled-components';
 // Import CheckoutForm component


const ItemContainer = styled.div /*style*/`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  min-height: fit-content;
  gap: 5rem;


  @media (min-width:360px) and (max-width:780px) {
    max-width:fit-content;
  
  }

`;

const ItemDetails = styled.div /*style*/`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ItemImage = styled.img /*style*/`
  width: 10rem;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  

  @media (max-width: 768px) {
    width: 5rem;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const ItemName = styled.h4 /*style*/`
  margin: 0;
`;

const ItemPrice = styled.p /*style*/`
  margin: 0;
`;

const QuantityInput = styled.input /*style*/`
  width: 10rem;

  @media  (min-width:360px) and (max-width:780px){
 width:4rem;

}
 
`;

const RemoveButton = styled.button /*style*/`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  @media  (min-width:360px) and (max-width:780px){
 width:5rem;
 padding:0;

}
  
`;

const GameTitle = styled.h4 /*style*/`
  color: black;
  font-weight: bold;
  margin-bottom: 5px;
`;

const PriceTag = styled.span /*style*/`
  background-color: white;
  color: #000;
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: bold;
  
`;

const DivInfo = styled.div /*style*/`
width:10rem;
display:flex;
gap:.5rem;
flex-direction:column;

@media screen (min-width:360) and (max-width:780){
  
}
`
const SizeSelector = styled.select /*style*/`
  width: 10rem;

  @media (min-width: 360px) and (max-width: 780px) {
    width: 4rem;
  }
`;

const CartItem = ({ item, onRemove, onQuantityChange, onSizeChange }) => {
  const price = !isNaN(item.price) ? parseInt(item.price, 10) : 0;


  return (
    <ItemContainer>
      <ItemDetails>
        <ItemImage src={item.imageUrl} alt={item.name} />
        <div>
          <GameTitle>{item.name}</GameTitle>
          <PriceTag>${price.toFixed(2)}</PriceTag>
        </div>
      </ItemDetails>
      <DivInfo>
        <QuantityInput
          type="number"
          min="1"
          pattern="\d*"
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value, 10))}
        />
        <SizeSelector
          value={item.size}
          onChange={(e) => onSizeChange(item.id, e.target.value)}
        >
          <option value="small">S</option>
          <option value="medium">M</option>
          <option value="large">L</option>
          <option value="large">XL</option>
        </SizeSelector>
        <RemoveButton onClick={() => onRemove(item.id)}>Remove</RemoveButton>
      </DivInfo>
    </ItemContainer>
  );
};

export default CartItem;