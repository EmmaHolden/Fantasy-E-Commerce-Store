import "./aboutUs.css";

const AboutUs = () => {
    return (
        <div className = "about-us-container">
            <h2>Salutations, Adventurer!</h2>
            <div className = "about-us-image-text-container">
                <div>
                <p className = "about-us-text">I, Bilger Luzardo, founded this company 18 orbits ago thanks to my network of trustworthy couriers, some ancient fae magic, and good old reptilian perseverance.</p>
                <p className = "about-us-text">Enjoy your stay and please allow me to share with you the wisdom of an old Lizardfolk proverb:</p>

                </div>

                <img className = "about-us-image" src = {"../images/founder.jpg"}/>
                
            </div>      
            <p className = "about-us-text"><em>The world is run by those who refuse to give up and those who refuse to die.</em></p>

        </div>
    );
}
 
export default AboutUs;