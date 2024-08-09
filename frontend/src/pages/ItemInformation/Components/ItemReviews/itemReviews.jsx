import ItemReviewCard from "../ItemReviewCard/itemReviewCard";
import "./itemReviews.css";

const ItemReviews = ({item}) => {
    return ( 
        <div className = "item-reviews-card">
            <div className = "item-information-heading"><h2>What our customers have to say...</h2></div>
            <div className = "item-reviews-container">{item.reviews.map((review, index) => <ItemReviewCard review={review} index={index}/>)}</div>
        </div>    
     );
}
 
export default ItemReviews;