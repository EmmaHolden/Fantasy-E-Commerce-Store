import { useEffect, useState } from "react";
import "./total.css";

  const Total = ({cart, stock}) => {
    const [total, setTotal] = useState()

    let getTotal = () => {
        let subTotals = cart.map(item => item.subTotal)
        let total = subTotals.reduce((accumulator, currentValue) => { return accumulator += currentValue})
        return total
    }

    useEffect(() => {
        let total = getTotal()
        setTotal(total)
    }, [cart, stock])
 
    return (
        <div className="total">
            <p>Total: {total}</p>
            <img className = "gold-coin" src = {"../images/gold.png"}/>
        </div>
    )
}

export default Total;