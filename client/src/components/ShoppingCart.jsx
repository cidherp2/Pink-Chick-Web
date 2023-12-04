import React, { useState } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../utils/CartContext'; // Import the CartContext

const ShoppingCartContainer = styled.div /*style*/`
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const CartItem = styled.div /*style*/`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const QuantitySelector = styled.select /*style*/`
  margin-left: 10px;
`;

const ShoppingCart = () => {
  const { cart, setCart } = useCartContext();

  const handleQuantityChange = (itemId, newQuantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: { ...prevCart[itemId], quantity: newQuantity },
    }));
  };

  const handleRemoveItem = (itemId) => {
    const newCart = { ...cart };
    delete newCart[itemId];
    setCart(newCart);
  };

  const calculateTotal = () => {
    let total = 0;
    Object.values(cart).forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <ShoppingCartContainer>
      <h2>Shopping Cart</h2>
      {Object.values(cart).map((item) => (
        <CartItem key={item.id}>
          <div>
            <strong>{item.name}</strong> - ${item.price} each
          </div>
          <div>
            <QuantitySelector
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            >
              {[...Array(10).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </QuantitySelector>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        </CartItem>
      ))}
      <div>
        <strong>Total: ${calculateTotal()}</strong>
      </div>
      <button>Checkout</button>
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
