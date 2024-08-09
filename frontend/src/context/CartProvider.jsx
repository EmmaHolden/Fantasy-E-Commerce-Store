import { createContext } from 'react'
import { useEffect, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    let localCart = JSON.parse(localStorage.getItem('localCart')) || []
    const [cart, setCart] = useState(localCart);

    useEffect(() => {
      localStorage.setItem('localCart', JSON.stringify(cart));
    }, [cart])
  
    return (
      <div>
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
      </div>
    );
  };

  export default CartProvider;
