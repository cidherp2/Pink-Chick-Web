// CheckoutForm.js
import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useCartContext } from '../utils/CartContext';

const CheckoutForm = ({ items, totalPrice, isFormValid}) => {
  const { cart, setCart } = useCartContext();
  const stripe = useStripe();

  const handleCheckout = async ( ) => {
    // Call your server to create a Checkout Session
    const response = await fetch(
      'https://pinkhicks-b921d828c404.herokuapp.com/pink/api/pago/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        totalPrice,
      }),
    });

    const session = await response.json();

    // Redirect to Checkout page
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Handle error (e.g., show an error message)
      console.error(result.error.message);
    }

    const emptyCart = null
    setCart(emptyCart)
  };

  return (
    <button onClick={handleCheckout} disabled={!stripe || !isFormValid} >
      Pay
    </button>
  );
};

export default CheckoutForm;
