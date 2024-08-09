import "./priceInformation.css";

const PriceInformation = ({item}) => {
    return ( 
        <div className = "price-information-container">
            <h3 className = "price-information-green-text">TODAY ONLY - 50% OFF</h3>
            <p> WAS: &nbsp;&nbsp;<span className = "price-information-strikethrough-red">{item.price * 2}</span> GP</p>
            <p>NOW: &nbsp;<span className = "price-information-green-text">{item.price}</span>&nbsp;GP</p>
        </div>
     );
}
 
export default PriceInformation;