import Button from "../Button/button";
import { useContext } from 'react';
import { getItem } from "../../utils/getItem";
import { increaseQuantity, decreaseQuantity } from "../../utils/cartFunctions";
import { StockContext } from "../../context/StockProvider"
import { CartContext } from "../../context/CartProvider";
import "./editQuantityButtonGroup.css";

const EditQuantityButtonGroup = ({item}) => {

    const [stock, setStock] = useContext(StockContext);
    const [cart, setCart] = useContext(CartContext);
    let {cartItem, stockItem} = getItem(item._id, cart, stock)

    return ( 
    <>
        <Button variant='edit' onClick={() => decreaseQuantity(cartItem, stockItem, cart, setCart)}>-</Button>
            <div className='number-of-items'><p>{cartItem.numberSelected}</p></div>
        <Button variant='edit' disabled = {stockItem.numberInStock <= cartItem.numberSelected} onClick={() => increaseQuantity(cartItem, stockItem, cart, setCart)}>+</Button>
    </> 
     );
}
 
export default EditQuantityButtonGroup;