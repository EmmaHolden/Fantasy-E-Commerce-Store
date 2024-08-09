import { useContext } from 'react'
import './cartProductCard.css';
import { StockContext } from "../../../../context/StockProvider";
import { CartContext } from "../../../../context/CartProvider";
import EditQuantityButtonGroup from "../../../../components/EditQuantityButtonGroup/editQuantityButtonGroup";
import Button from "../../../../components/Button/button";
import { getItem } from '../../../../utils/getItem';
import { deleteHandler } from '../../../../utils/cartFunctions';

const CartProductCard = ({item}) => {
    const [stock, setStock] = useContext(StockContext);
    const [cart, setCart] = useContext(CartContext);
    let {cartItem, stockItem} = getItem(item.identityNumber, cart, stock)

    return ( 
        <div>
            <div key = {item._identityNumber}>    
                {stockItem ? 
                <div className = "cart-product-container">
                    <div className="cart-image-container"><img className = "cart-product-image" src = {stockItem.image}/></div>
                    <div className="cart-name-container"><p>{stockItem.name}</p></div>                    
                    <div className='cart-number-of-items'>
                        <EditQuantityButtonGroup item={stockItem}/>
                    </div>
                    <div className="delete-button-container"><Button variant='delete' onClick={() => deleteHandler(cartItem, cart, setCart)}>Delete</Button></div>
                    <div className='subtotal-container'><p>{cartItem.subTotal}</p><img className = "gold-coin" src = {"../images/gold.png"}/></div>
                </div>
                :
                <p>Can't find that stock item</p>}
              </div>  
        </div>
     );
}
 
export default CartProductCard;