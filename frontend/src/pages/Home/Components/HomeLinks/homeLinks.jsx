import {Link} from "react-router-dom";
import "./homeLinks.css";
import Button from "../../../../components/Button/button";

const HomeLinks = () => {
    return ( 
        <div className = "home-links-container" >
            <div className = "home-links-title-container"><h2>Shop for...</h2></div>
            <div className = "home-category-links-container">
                
                <div className="home-category-card-container"><Link to = '/categories/weapons'><div className = "home-category-card"><img className = "home-category-image" src = {"../images/weapons.jpg"}/><h2>Weapons</h2></div></Link></div>
                <div className="home-category-card-container"><Link to = '/categories/armour'><div className = "home-category-card"><img className = "home-category-image" src = {"../images/armour.jpg"}/><h2>Armour</h2></div></Link></div>
                <div className="home-category-card-container"><Link to = '/categories/jewellery'><div className = "home-category-card"><img className = "home-category-image" src = {"../images/jewellery.jpg"}/><h2>Jewellery</h2></div></Link></div>
                <div className="home-category-card-container"><Link to = '/categories/potions'><div className = "home-category-card"><img className = "home-category-image" src = {"../images/potions.jpg"}/><h2>Potions</h2></div></Link></div>
                <div className="home-category-card-container"><Link to = '/categories/books'><div className = "home-category-card"><img className = "home-category-image" src = {"../images/books.jpg"}/><h2>Books</h2></div></Link></div>
                <div className="home-category-card-container"><Link to = '/categories/magicalitems'><div className = "home-category-card"><img className = "home-category-image" src = {"../images/magicalitems.jpg"}/><h2>Magic Items</h2></div></Link></div>
            </div>
            <div className = "home-all-category-container"><Link to = '/categories/all'><Button variant = "search">Browse all items<img className = "home-search-button-image" src = {"../images/search.png"}/></Button></Link></div>
        </div>
     );
}
 
export default HomeLinks;