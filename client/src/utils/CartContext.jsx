import { createContext, useContext, useState } from 'react';
const emptyCart = {};
export const CartContext = createContext()
const storedCart = localStorage.getItem('cart');
const cartMemory = JSON.parse(storedCart);
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState(cartMemory)

    return(
        <CartContext.Provider value={{cart,setCart}}>
           {children}
        </CartContext.Provider>
    )
} 