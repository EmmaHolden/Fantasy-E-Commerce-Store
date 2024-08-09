import { createContext, useContext } from 'react'
import { useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { getStock } from '../apis/getStock';

export const StockContext = createContext();

const StockProvider = (props) => {
    const [stock, setStock] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const stockData = await getStock()
            let newStock = []
            newStock = stockData.products
            newStock.map(item => item.visible = true)
            setStock(newStock)
        }
        fetchProducts();
      }, []);

  
    return (
      <div>
        <StockContext.Provider value={[stock, setStock]}>
            {props.children}
        </StockContext.Provider>
      </div>
    );
  };

  export default StockProvider;