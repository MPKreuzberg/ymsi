import React from 'react'
import './nav.css'
import BrandLogo from '../assets/logoForum.svg'
import {FaUserCircle} from 'react-icons/fa'


export default function Nav() {
  return (
    <div className='nav-container'>
        <div className="logo">
            <img src={BrandLogo} alt="" />
        </div>
        <div className="search-bar">
            <input type="search" name="nav-search" id="nav-search"  placeholder="Search ymsi..."/>
        </div>
        <div className="nav-btns">
            <button className="signup">Sign Up</button>
            <button className="login">Login</button>
            <button className="profile">
                <FaUserCircle id='profile-icon' />
            </button>
        </div>
    </div>
  )
}


