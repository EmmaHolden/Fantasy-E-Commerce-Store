'use client' 
import React from "react"
import "../../main.css";
import { useParams } from "react-router-dom";
import { useContext } from 'react'
import ProductCard from "./Components/ProductCard/productCard";
import "./categories.css";
import Header from "../../components/Header/HeaderContainer/header";
import Footer from "../../components/Footer/footer";
import CategoryFilter from "./Components/CategoryFilter/categoryFilter";
import FilterInput from "./Components/FilterInput/filterInput";
import { StockContext } from "../../context/StockProvider";

const Categories = () => {
  const { category } = useParams()
  const [stock, setStock] = useContext(StockContext);

  return (
    <div>
      <Header/>
      <FilterInput/>
      <CategoryFilter/>
      <div className = "browse-stock-container">

      {category === "all"
      ? 
      stock.filter(item => item.visible === true).map((item) => 

      <div key = {item._id}>    
        <ProductCard item = {item}/>
      </div>        
        
        )
        :
        stock.filter(item => item.category === `${category}` & item.visible === true).map((item) => 
        <div key = {item._id}>    
          <ProductCard item = {item}/>
        </div>    
        )
        }

      </div>
      <Footer/>

    </div>
  );
}

export default Categories;