import React from "react";
import Home from "./pages/Home/home";
import Categories from "./pages/Categories/categories"
import Cart from "./pages/Cart/cart"
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockProvider from "./context/StockProvider";
import CartProvider from "./context/CartProvider";
import packageJson from "../package.json";
import ItemInformation from "./pages/ItemInformation/itemInformation";
import OrderReceived from "./pages/OrderReceived/orderReceived";
import ScrollToTop from "./utils/scrollToTop";



const App = () => {    

    console.log(process.env.REACT_APP_BUILD_NUM)
    console.log(packageJson.version)
   
    console.log(`VERSION: ${packageJson.version}.${process.env.REACT_APP_BUILD_NUM}`);

    return (
        <div>
            <BrowserRouter>
                <StockProvider>
                    <CartProvider>
                        <ScrollToTop/>
                            <Routes>
                                <Route
                                    path='/'
                                    element={<Home />}
                                />   
                                <Route
                                    path='/categories/:category'
                                    element={<Categories />}
                                />   
                                <Route
                                    path='/cart'
                                    element={<Cart />}
                                />
                                <Route 
                                path="/item/:id"
                                element={<ItemInformation />} 
                                />
                                <Route 
                                path="/order-received"
                                element={<OrderReceived />} 
                                />
                            </Routes>
                    </CartProvider>
                </StockProvider>
            </BrowserRouter>

        </div>

    )
}

export default App