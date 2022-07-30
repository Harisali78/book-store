import "./Navbar.css"
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
import {Link} from 'react-router-dom'
import MyFunction from "../dark-light"

const Navbar = ()=>{
    
    return <div>
        <nav>
            <h1>My Library</h1>
            <div className="links">  
            <i onClick={MyFunction} className="fa fa-adjust"></i>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </div>
        </nav>
    </div>
}
export default Navbar