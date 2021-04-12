import React from 'react'
import {Link} from 'react-router-dom'
import RZN8 from '../assets/images/RZN8.png'

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <ul id = 'navbar'>
                <Link to= '/'>
                <li id = 'navbarlogo'><img src ={RZN8} id = 'navbarlogo'/></li>
                     </Link>         
                <Link to= '/books'>
                <li>Books</li>
                     </Link>         
                <Link to= '/comicbooks'>
                <li>Comic Books</li>
                     </Link>         
                <Link to= '/audiobooks'>
                <li>Audiobooks</li>
                     </Link>         
                <Link to= '/merch'>
                <li>Merchandise</li>
                     </Link>         
                <Link to= '/exclusive'>
                <li>Exclusive</li>
                     </Link>         
                <Link to= '/contact'>
                <li>Contact</li>
                     </Link>                 
                </ul>
            </nav>
        )
    }
}

export default Navbar