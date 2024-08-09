import './orderReceivedSomethingWrong.css';
import { Link } from "react-router-dom"

const OrderReceivedSomethingWrong = () => {
    return ( 
        <div className = "order-received-something-wrong">
            <h2>Oops. Something has gone wrong.</h2>
            <p>Your order has not been successful. Please try again and if the problem persists, contact us by pigeon.</p>
            <h3>Click <Link to='/categories/all'><span className="link">here</span></Link> to browse our product selection!</h3>
      </div>
     );
}
 
export default OrderReceivedSomethingWrong;