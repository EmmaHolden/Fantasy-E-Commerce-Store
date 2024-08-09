import "./emptyCartCard.css";
import { Link } from "react-router-dom"

const EmptyCartCard = () => {
    return ( 
        <div className = "cart-empty-container">
        <h2>Oh no!</h2>
        <p>Looks like there's nothing in your cart!</p>
        <p>Click <Link to='/categories/all'><span className="link">here</span></Link> to shop for items now!</p>
      </div>
     );
}
 
export default EmptyCartCard;