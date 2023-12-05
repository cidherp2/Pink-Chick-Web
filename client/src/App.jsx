import { useState } from 'react'
import AppRoutes from './Routes'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './App.css'
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import { CartProvider } from './utils/CartContext'

const stripePromise = loadStripe('pk_test_51OCqBSIHMJDsY8j88LN9JLKg8pv9cpCgb7K0iVpns0sugelBGXK1LWtzHLciVNfe5elRq97LcTz3xnk1kcmb2zDk00xJySUXNk');

function App() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <CartProvider>
          <Router>
            <AppRoutes />
          </Router>
        </CartProvider>
      </Elements>
    </>
  )
}

export default App
