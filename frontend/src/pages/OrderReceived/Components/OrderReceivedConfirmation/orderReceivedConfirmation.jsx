import './orderReceivedConfirmation.css'

const OrderReceivedConfirmation = ({changeMade}) => {
    return ( 
        <div className="order-received-confirmation">
        {changeMade ? 
            <p>Unfortunately there were some stock changes while you were browsing. Some items may have been removed or quantity changed.</p>
            :
            <p>We are pleased to confirm that all items in your order are in stock and ready for you to enjoy.</p>}
            <p>You have 2 moons to collect your items from Bilger's Bazaar. After this time, your items will be returned to stock. Failure to collect may result in refusal of business in the future.</p>
            <p>Should you require a courier to deliver your items, you can pigeon a letter to our store stating your desired drop-off location and a quote can be arranged.*</p>
        </div>
     );
}
 
export default OrderReceivedConfirmation;