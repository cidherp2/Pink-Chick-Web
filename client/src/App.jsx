import { useState } from 'react'
import AppRoutes from './Routes'

import './App.css'
import { CartProvider } from './utils/CartContext'

function App() {
  return (
    <>
    <CartProvider>
    <AppRoutes/>
    </CartProvider>
    </>
  )
}

export default App
