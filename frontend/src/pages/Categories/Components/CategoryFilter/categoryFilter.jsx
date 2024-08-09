import './categoryFilter.css';
import { useState } from "react";
import Button from '../../../../components/Button/button';
import {Link} from "react-router-dom";


const CategoryFilter = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return ( 
        <div className="stock-page-container">
            <div className="filter-buttons-container">
                <div><Button variant="filter" onClick={toggleOpen}>Filter Stock...</Button></div>
                {open && 
                <div className = "options-buttons-container">
                    <Link to='/categories/all'><Button variant="options" onClick={() => setOpen(close)}>All</Button></Link>
                    <Link to='/categories/weapons'><Button variant="options" onClick={() => setOpen(close)}>Weapons</Button></Link>
                    <Link to='/categories/armour'><Button variant="options" onClick={() => setOpen(close)}>Armour</Button></Link>
                    <Link to='/categories/jewellery'><Button variant="options" onClick={() => setOpen(close)}>Jewellery</Button></Link>
                    <Link to='/categories/potions'><Button variant="options" onClick={() => setOpen(close)}>Potions</Button></Link>
                    <Link to='/categories/books'><Button variant="options" onClick={() => setOpen(close)}>Books</Button></Link>
                    <Link to='/categories/magicalitems'><Button variant="options" onClick={() => setOpen(close)}>Magical Items</Button></Link>      
                </div>}
            </div>
        </div> 
    );
}
 
export default CategoryFilter;

