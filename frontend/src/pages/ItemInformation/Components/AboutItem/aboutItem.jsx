import './aboutItem.css';

const AboutItem = ({item}) => {
    return ( 
        <div className = "about-item-container">
            <div className = "item-information-heading"><h2>About this item....</h2></div>
            <div><p>{item.fullDescription}</p></div>    
        </div>

     );
}
 
export default AboutItem;