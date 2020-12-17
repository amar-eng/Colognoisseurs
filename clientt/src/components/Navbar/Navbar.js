import React from 'react'
import './Navbar.scss'
import logo from '../../assets/pics/log2.jpg'
import{Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <div className="navbar">
            <Link to= "/"><img className= "navbar__logo" src ={logo} alt="Colognoisseurs" /></Link>
            {/* <div className="navar__content"> */}
                <Link to = '/upload'><p className= "navbar__upload link">Upload</p></Link>
                <Link to = '/cologne-list'><p className= "navbar__list link">Cologne List</p></Link>
                <Link to='/logout'><p className= "navbar__logout link">Log Out</p></Link> 
                
                {/* <p>sjascs</p>

            
                <p>sjass</p>
                <p>sja222s</p> */} 
            {/* </div> */}
            

        </div>
    )
}
