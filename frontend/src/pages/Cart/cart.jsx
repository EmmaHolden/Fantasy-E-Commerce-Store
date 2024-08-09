'use client' 
import React from "react";
import { useContext } from 'react';
import { StockContext } from "../../context/StockProvider";
import { CartContext } from "../../context/CartProvider"
import Button from "../../components/Button/button";
import { deleteAllHandler } from "../../utils/cartFunctions";
import "./cart.css";
import EmptyCartCard from "./Components/EmptyCartCard/emptyCartCard";
import { Link } from "react-router-dom"
import CartProductCard from "./Components/CartProductCard/cartProductCard";
import Header from "../../components/Header/HeaderContainer/header";
import Footer from "../../components/Footer/footer";
import Total from "../../components/Total/total";

const Cart = () => {
const [stock, setStock] = useContext(StockContext);
const [cart, setCart] = useContext(CartContext);

  return (
    <div>
      {stock ? 
      <div>
        <Header/>
        {cart.length > 0 ? 
          <div className = "cart-container">
            {cart.map((item) => 
                <CartProductCard key={item.identityNumber} item={item}/>
            )}
            <div className="cart-bottom-container">
              <div className="cart-confirm-order-button-container">
                <Link to = "/order-received"><Button variant="checkout">Confirm Your Order</Button></Link>
              </div>
              <div className = "cart-total-and-delete-container">
                  <Total cart={cart} stock={stock}/>
                  <Button variant="delete-all" onClick={() => deleteAllHandler(setCart)}>Delete All</Button>
              </div>
            </div>
          </div>
        :
        <EmptyCartCard/>
        }
        <Footer/>
      </div>
      
      :
      <p>Loading...</p>
      }

    </div>
  );
}

export default Cart;