import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/HeaderContainer/header";
import AboutUs from "./Components/AboutUs/aboutUs";
import HomeLinks from "./Components/HomeLinks/homeLinks";
import NoticeBoard from "./Components/Noticeboard/noticeboard";
import './home.css';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className = "home-main-container">
                    <HomeLinks/>  
                <div className = "home-right-container"> 
                    <AboutUs/>
                    <NoticeBoard/>
                </div>            
            </div>
            <Footer/>
        </div>
     );
}
 
export default Home;