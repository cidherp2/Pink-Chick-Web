import { Children, createContext, useContext, useState } from 'react';
const emptyCart = {};
const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState(emptyCart)

    return(
        <CartContext.Provider value={{cart,setCart}}>
           {children}
        </CartContext.Provider>
    )
} 