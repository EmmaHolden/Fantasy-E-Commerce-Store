'use client' 
import React from "react"
import { useParams } from "react-router-dom";
import { getItem } from "../../utils/getItem";
import Button from "../../components/Button/button";
import { useContext } from 'react'
import { StockContext } from "../../context/StockProvider";
import { CartContext } from "../../context/CartProvider";
import { addHandler, deleteHandler} from '../../utils/cartFunctions';
import "./itemInformation.css";
import EditQuantityButtonGroup from "../../components/EditQuantityButtonGroup/editQuantityButtonGroup";
import OutOfStock from "../../components/OutOfStock/outOfStock";
import Header from "../../components/Header/HeaderContainer/header";
import Footer from "../../components/Footer/footer";
import ItemReviews from "./Components/ItemReviews/itemReviews";
import AboutItem from "./Components/AboutItem/aboutItem";
import PriceInformation from "./Components/PriceInformation/priceInformation";
import ButtonGroup from "../../components/ButtonGroup/buttonGroup";

const ItemInformation = () => {
    const { id } = useParams()
    const [stock, setStock] = useContext(StockContext);
    const [cart, setCart] = useContext(CartContext);
    let {cartItem, stockItem} = getItem(id, cart, stock)

    return ( 
        <>
            {!stockItem | !stock ?
                <p>LOADING...</p>
            :
            <>
                <Header/>
                <div  className = "item-information-main-container">  
                    <div className = "item-information-title-container">
                        <h1>{stockItem.name}</h1>
                    </div>
                    <div className = "item-information-top-container ">
                        <img className = "item-information-image" src = {stockItem.image}/>
                        <div>
                            <PriceInformation item={stockItem}/>
                            <ButtonGroup cartIsNull={cartItem == null} isInStock = {stockItem.numberInStock > 0} cartItem={cartItem} stockItem={stockItem} cart={cart} setCart={setCart}/>
                        </div>
                    </div>
                    <AboutItem item={stockItem}/>
                    <ItemReviews item={stockItem}/>                
                </div>
                <Footer/>
            </>
            }
        </>
 

     );
}
 
export default ItemInformation;