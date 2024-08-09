'use client' 
import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { StockContext } from "../../context/StockProvider";
import { CartContext } from "../../context/CartProvider"
import "./orderReceived.css";
import { Link } from "react-router-dom"
import { getStockItem } from "../../apis/getStockItem";
import { editStock } from "../../apis/editStock";
import OrderReceivedProductCard from "./Components/OrderReceivedProductCard/orderReceivedProductCard";
import OrderReceivedConfirmation from "./Components/OrderReceivedConfirmation/orderReceivedConfirmation";
import OrderReceivedSomethingWrong from "./Components/OrderReceivedSomethingWrong/orderReceivedSomethingWrong";

const OrderReceived = () => {

const [changeMade, setChangeMade] = useState(false)
const [stock, setStock] = useContext(StockContext);
const [cart, setCart] = useContext(CartContext);
const [finalOrder, setFinalOrder] = useState([...cart])

let getItem = async (item) => {
    let stockItem = await getStockItem(item.identityNumber)
    if (stockItem.numberInStock < item.numberSelected){
        setChangeMade(true)
        let newFinalOrder = [...cart]
        item.numberSelected = stockItem.numberInStock;
        setFinalOrder(newFinalOrder)
    }
    stockItem.numberInStock -= item.numberSelected;
    await editStock(stockItem);
    let newStock = [...stock]
    let localStockItem =  stock.find((item) => item._id === stockItem._id)
    localStockItem.numberInStock = stockItem.numberInStock;
    setStock(newStock)
}


useEffect(() => {
    finalOrder.map((item) => {
        getItem(item)
    })
    setCart([])
}, []);


  return (
    <div>
      {finalOrder.length > 0 ? 
      <div>
          <div className = "order-received-main-container">
          <h1>Order Confirmed!</h1>
          <div className="order-received-top-container">
            <OrderReceivedProductCard finalOrder = {finalOrder}/>
            <OrderReceivedConfirmation changeMade={changeMade}/>
          </div>
            
            <h2 className="order-received-browse-more">Click <Link to='/categories/all'><span className="link">here</span></Link> to begin another order!</h2>
            <p className="smallprint">*Please note that courier delivery is at your own risk and we do not take responsibility for missing or damaged items. 
            For extra security and peace of mind, please ask in store about insurance to cover lost or damaged items in the case of bandit attacks, natural disasters and weather damage.</p>
          </div>

      </div>
      
      :
      <OrderReceivedSomethingWrong/>
      }

    </div>
  );
}

export default OrderReceived;