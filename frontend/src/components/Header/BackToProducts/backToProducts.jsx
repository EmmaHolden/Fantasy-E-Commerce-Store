import { Link } from "react-router-dom";
import "./backToProducts.css";
import Button from "../../Button/button";

const BackToProducts = () => {
    
    return ( 
        <Link to='/categories/all'>
            <Button variant="return-products">
                <img className="back-arrow" src = {"../images/backarrow.png"}/>
                Back to Products
            </Button>
        </Link>
     );
}
 
export default BackToProducts;