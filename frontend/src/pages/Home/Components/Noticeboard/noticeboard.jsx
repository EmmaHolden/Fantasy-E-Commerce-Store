import Button from "../../../../components/Button/button";
import itemList from '../../../../newsItemsArray';
import "./noticeboard.css";
import { useEffect, useState } from "react";

const NoticeBoard = () => {

    let [topItems, setTopItems] = useState([itemList[0], itemList[1], itemList[2]])
    let [index, setIndex] = useState(2)

    let increaseIndex = () => {
        let newIndex = index += 1
        if (newIndex >= itemList.length - 1){
            newIndex = -1;
        }
        setIndex(newIndex)
    }

    let clickHandler = () => {
        increaseIndex()
        let newItems = [...topItems]
        newItems.push(itemList[index])
        newItems.shift()
        setTopItems(newItems)
    } 

    useEffect(() => {
        const interval = setInterval(() => {
            increaseIndex()
            let newItems = [...topItems]
            newItems.push(itemList[index])
            newItems.shift()
            setTopItems(newItems);
        }, 4000);
        return () => clearInterval(interval);
    }, [topItems]);

    return ( 
        <div className = "noticeboard-main-container">
        <div className = "noticeboard-title-container"><h2>News & Announcements</h2></div>
        <div className = "noticeboard-news-item">
            <h4>{topItems[0][0]}</h4>
            <p>{topItems[0][1]}</p>
        </div>
        <div className = "noticeboard-news-item">
            <h4>{topItems[1][0]}</h4>
            <p>{topItems[1][1]}</p>
        </div>
        <div className = "noticeboard-news-item">
            <h4>{topItems[2][0]}</h4>
            <p>{topItems[2][1]}</p>
        </div>
        <div className = "noticeboard-bottom-container">
            <div className = "noticeboard-more-info">{"**If you would like a notice displayed, please pigeon your message (max 30 words) with payment of 10 gold pieces."}</div> 
            <div className = "noticeboard-news-button-container"><Button variant = "news" onClick = {clickHandler}><p>More News</p></Button></div>
        </div>

        
        </div>
        
     );
}
 
export default NoticeBoard;