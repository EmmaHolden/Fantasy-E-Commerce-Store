import './logo.css';
import { Link } from "react-router-dom"

const Logo = () => {
    return ( 
        <Link to='/'><img className = "logo" src = {"../images/logo.png"}/></Link>
     );
}
 
export default Logo;