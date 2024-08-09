import {Link} from "react-router-dom";
import "./saleBanner.css";

const SaleBanner = () => {
    return ( 
        <div className = "sale-banner-container">
            <div>
                <img className = "left-image" src = {"../images/frogcoins.jpg"}/>
            </div>
            <div className = "middle-container">
                <Link to = '/categories/all'>
                <h2>MOON MAYHEM FESTIVAL</h2>
                <p><span className = "offer-container" >50% off</span> on the night of the vanished moon!</p>
                </Link>
            </div>
            <div>
                <img className = "right-image" src = {"../images/eclipse.jpg"}/>
            </div>
        </div>
     );
}
 
export default SaleBanner;