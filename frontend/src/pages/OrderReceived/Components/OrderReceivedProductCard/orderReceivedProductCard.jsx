import { useContext } from 'react';
import { StockContext } from '../../../../context/StockProvider';
import './orderReceivedProductCard.css'
import Total from '../../../../components/Total/total';

const OrderReceivedProductCard = ({finalOrder}) => {

    const orderNumber = Math.random().toString(36).substring(3,9).toUpperCase()
    const [stock, setStock] = useContext(StockContext);

    const orderProduct = (item) => {
        let stockItem = stock.find(stockItem => stockItem._id === item.identityNumber)

        return (
          <>
            <p>{item.numberSelected} x {stockItem.name} = <span>{stockItem.price * item.numberSelected}<img className = "gold-coin" src = {"../images/gold.png"}/></span></p>
            
          </>
        )
      }

    return ( 
        <div className="order-received-order-list">
            <h2>Order Number: {orderNumber}</h2>
            <div className = "items-in-order-list">
            {finalOrder.map((item, index) => 
                <div key = {index}>{orderProduct(item)}</div>
            )}
            </div>
            <div><Total stock={stock} cart={finalOrder}/></div>
        </div>
     );
}
 
export default OrderReceivedProductCard;