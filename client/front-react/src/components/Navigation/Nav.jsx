import React from 'react'
import './nav.css';
import Logo from '../../assets/logoymsi.svg'
import {FaRegUserCircle} from 'react-icons/fa'

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
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
            <FaRegUserCircle className='userIcon' />
        </div>
    </nav>
  )
}
