import "./header.css";
import SaleBanner from "../SaleBanner/saleBanner";
import Logo from "../Logo/logo";
import ItemsInCart from "../ItemsInCart/itemsInCart";
import { useLocation } from "react-router-dom";
import BackToProducts from "../BackToProducts/backToProducts";
import Advert from "../Advert/advert";

const Header = () => {
    const location = useLocation();
    return (
        <>
        {['/', '/categories/all', 
        '/categories/jewellery', 
        '/categories/weapons', 
        '/categories/armour',
        '/categories/potions',
        '/categories/books',
        '/categories/magicalitems'
    
    ].includes(location.pathname) ?
        <div className = "standard-header">
                <Logo/>
                <SaleBanner/>
                <ItemsInCart/>                                
        </div>
        : location.pathname === '/cart' ?
        <div className="cart-header">
            <div className="cart-header-split-third"><Logo/></div>      
            <h1 className="cart-header-split-third">Cart</h1>
            <div className="cart-header-split-third"><BackToProducts/></div>
    </div>
        :
            <div className = "item-information-header">
                <div className="item-header-split-twenty"><BackToProducts/></div>
                <div className="item-header-split-sixty"><Advert/></div>
                <div className="item-header-split-twenty"><ItemsInCart/></div>
            </div>
        }
        </>
    );
}
 
export default Header;