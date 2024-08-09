import './itemReviewCard.css';

const ItemReviewCard = ({review, index}) => {
    return ( 
        <div key = {index}>
            <div className = "item-review-container">
                <img className = "item-review-torch" src = {`../images/torch${review.star}.png`}/>
                <div className = "item-review-text-container">
                    <div className ="item-review-username-container"><h3>{review.username ? review.username : "Anonymous buyer"} rated this item...</h3><h2>{review.star}/5</h2></div>
                    <div><p>{review.review}</p></div>
                </div>
            </div>
        </div>
        )
}
 
export default ItemReviewCard;