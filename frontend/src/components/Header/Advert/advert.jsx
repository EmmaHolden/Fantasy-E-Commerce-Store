import {Link} from "react-router-dom";
import './advert.css';

const Advert = () => {

    let randomAdvertIndex = Math.floor(Math.random() * 7)

    let options = [
        {image: "../images/hero.jpg", website: "https://www.meet-an-inmate.com/", title: "UNLUCKY IN LOVE?", line1: "Find your perfect match with HeroDating!"},
        {image: "../images/bugbear.jpg", website: "https://rentahitman.com/", title: "HIRE A MERCENARY", line1: "Nervous Traveller? Hire an Edgeblade Mercenary!"},
        {image: "../images/scaryfrog.jpg", website: "https://www.dogshaming.com/", title: "MAGICAL PET SHOP!", line1: "Adopt a furry, scaly, spiky or slimy friend today!"},
        {image: "../images/darkwizard.jpg", website: "https://themagiccircle.co.uk/", title: "ALWAYS THE STUDENT?", line1: "Never the sorcerer? Uplevel your magic skills!"},
        {image: "../images/elflady.jpg", website: "https://www.youtube.com/watch?v=QvtrTMwnV4o&ab_channel=ElfYourselfOfficial", title: "LYDNA WANTS TO TALK", line1: "Beautiful elven ladies want to rendevouz."},
        {image: "../images/tabletopgame.jpg", website: "https://www.online-dice.com/", title: "GET YOUR GAME ON!", line1: "Seeking reliable players for various tavern game nights."},
        {image: "../images/satyr.jpg", website: "https://www.ancestry.co.uk/", title: "SEEKING INFERNALS!", line1: "Blood donations urgently needed from infernal bloodlines."}

    ]

    let choice = options[randomAdvertIndex]


    return (
        <div className = "advert-container">
            <a href = {choice.website} target="_blank">
            <div className = "advert-content">
                <div className = "image-container">
                    <img className = "advert-image" src = {choice.image}/>
                </div>
                <div className = "advert-text">
                    <h3>{choice.title}</h3>
                    <p>{choice.line1}</p>
                </div>
            </div> 

            </a>
        </div>
    );
}
 
export default Advert;