import { useContext } from 'react'
import {Link} from "react-router-dom";
import "./productCard.css";
import Button from '../../../../components/Button/button';
import EditQuantityButtonGroup from '../../../../components/EditQuantityButtonGroup/editQuantityButtonGroup';
import OutOfStock from '../../../../components/OutOfStock/outOfStock';
import { StockContext } from '../../../../context/StockProvider';
import { CartContext } from '../../../../context/CartProvider';
import { addHandler, deleteHandler } from '../../../../utils/cartFunctions';
import { getItem } from '../../../../utils/getItem';
import ButtonGroup from '../../../../components/ButtonGroup/buttonGroup';


const ProductCard = ({item}) => {
    const [stock, setStock] = useContext(StockContext);
    const [cart, setCart] = useContext(CartContext);
    let {cartItem, stockItem} = getItem(item._id, cart, stock)

    return (
        <div className = "product-card-container">
            <Link to = {`/item/${stockItem._id}`}>
            <div className="image-overlay-container">
                <img className = "product-card-image" src = {stockItem.image}/>
                <div className = "product-card-description"><p>{stockItem.basicDescription}</p></div>
            </div>
            </Link>
            <div className = "stock-item-name-price"><div><p>{stockItem.name}</p></div><div className = "stock-price"><img className = "gold-coin" src = {"../images/gold.png"}/><p>{stockItem.price}</p></div></div>
            <ButtonGroup cartIsNull={cartItem == null} isInStock = {stockItem.numberInStock > 0} cartItem={cartItem} stockItem={stockItem} cart={cart} setCart={setCart}/>
        </div>
    )
}
 
export default ProductCard;