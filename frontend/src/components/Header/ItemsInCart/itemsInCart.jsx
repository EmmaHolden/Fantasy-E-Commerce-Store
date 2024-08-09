import { Link } from "react-router-dom";
import "./itemsInCart.css";
import { CartContext } from "../../../context/CartProvider";
import { useContext } from 'react'

const ItemsInCart = () => {
    const [cart, setCart] = useContext(CartContext);

    return ( 
        <Link to='/cart'>
        <div className = "cart-button-container">
            <img className = "cart-button" src = {"../images/cart.png"}/>
            <p className = "number-items-in-cart">{cart.length}</p>
        </div>   
        </Link>
     );
}
 
export default ItemsInCart;