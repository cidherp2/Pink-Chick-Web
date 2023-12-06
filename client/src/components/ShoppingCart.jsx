import React from 'react';
import CartItem from './CartItemPink';
import { useCartContext } from '../utils/CartContext';
import styled from 'styled-components';
import CartItemModal from './PaymentModal';
import { useState } from 'react';
const color = "black"

const Strong = styled.strong /*style*/ `
font-size:xx-large;
background:white;
padding-right: 1rem;
padding-left:1rem;
border-radius:1rem;
&.vacio{
  color: #000;
  padding-right: 3rem;
padding-left:3rem;

}
@media (min-width:360px) and (max-width:780px) {
  font-size:larger;
  }

`

const Button = styled.button /*style*/`
margin-top: 2rem;
@media (min-width:360px) and (max-width:780px) {
  margin-right:4rem;
  }
`
const DivStrong = styled.div /*style*/ `
flex-direction:row;
display:flex;
justify-content:center;

color: #000;

@media (min-width:360px) and (max-width:780px) {
  width:85%;
  height: 2rem;
  }


`

const Cart = () => {
  const { cart, setCart } = useCartContext();
  const [showModal, setShowModal] = useState(false);

  const handleProceedToCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCheckout = () => {
    // Handle checkout logic
    // ...
    setShowModal(false);
  };

  const handleContinueShopping = () => {
    setShowModal(false);
    // Add any logic for continuing shopping
  };

   const handleRemove = (itemId) => {
    setCart({
      items: cart?.items?.filter((item) => item.id !== itemId) || [],
    });
  };

  // Function to update quantity
   const handleQuantityChange = (itemId, newQuantity) => {
    setCart({
      items: cart?.items?.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity  } : item 
      ),
    });
  };
   


  

  const handleSizeChange = (itemId, newSize) => {
    setCart({
      items: cart?.items?.map((item) =>
        item.id === itemId ? { ...item, size: newSize } : item
      ),
    });
  };


  // Calculate total price
  const totalPrice =
    cart?.items?.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    ) ?? 0;

    localStorage.setItem('cart', JSON.stringify(cart));

    return (
      <div>
        <h1>Carrito</h1>
        {cart?.items && cart.items.length > 0 ? (
          <div>
            {cart.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemove}
                onQuantityChange={handleQuantityChange}
                onSizeChange={handleSizeChange}
               
              />
            ))}
            <DivStrong>
              <Strong>Precio Total: ${totalPrice.toFixed(2)}</Strong>
            </DivStrong>
            <Button onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
          </div>
        ) : (
          <Strong className='vacio'>Tu carrito está vacío</Strong>
        )}
       
      {showModal && (
        <CartItemModal
          items={cart.items}
          totalPrice={totalPrice}
          onClose={handleCloseModal}
          onCheckout={handleCheckout}
          onContinueShopping={handleContinueShopping}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
          onSizeChange={handleSizeChange}
          
        />
      )}
    </div>
  );
};

export default Cart;