import React from 'react'
import './nav.css';
import Logo from '../../assets/logoymsi.svg'
import {FaRegUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
        <nav className='nav-container'>
            <div className="nav-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="nav-input">
                <input type="search" name="searchInput" id="searchInput" placeholder='Search ymsi....' />
            </div>
            <div className="nav-buttons">
                <Link to="/login" relative="path"><button className="login">Login</button></Link>
                <Link to="/signup" relative="path"><button className="signup">Sign Up</button></Link>
                
                <FaRegUserCircle className='userIcon' />
            </div>
        </nav>
  )
}
