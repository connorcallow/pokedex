import React from "react"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className= 'navbar'>
            <div className= 'logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokedex Assignment"/> 
            </div>
            <ul className='menu'>
            <li><Link to="/" > Pokedex</Link> </li>
            <li><Link to="/about" > About</Link> </li>
            </ul>

        </div>
    )
}




export default Navbar