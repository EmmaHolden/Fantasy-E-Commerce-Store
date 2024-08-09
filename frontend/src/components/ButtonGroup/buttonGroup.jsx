import { addHandler, deleteHandler } from "../../utils/cartFunctions";
import Button from "../Button/button";
import EditQuantityButtonGroup from "../EditQuantityButtonGroup/editQuantityButtonGroup";
import './buttonGroup.css'

const ButtonGroup = ({cartIsNull, isInStock, cartItem, stockItem, cart, setCart}) => {
    return ( 
        <div className="button-group-container">
        {!cartIsNull ?
            <>
            <EditQuantityButtonGroup item={stockItem}/>
            <Button variant='delete' onClick={() => deleteHandler(cartItem, cart, setCart)}>Delete</Button>
            </>
            : isInStock ?
            <Button variant='add' onClick={() => addHandler(stockItem, cart, setCart)}>Add to Cart</Button>
            :
            <OutOfStock/>
        }
        </div>
     );
}
 
export default ButtonGroup;