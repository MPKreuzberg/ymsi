import React from 'react'
import './sidebarleft.css'
import {FaGamepad, FaTv, FaBitcoin, FaBusinessTime, FaLaptopCode} from 'react-icons/fa'

export default function SideBarLeft() {
  return (
    <div className='sidebarleft-topics'>
        <div className="topics-header">
            <h3>Topics</h3>
            <hr></hr>
        </div>
        <div className="topics-categories">
            <ul>
                <li><FaGamepad />Gaming</li>
                <li><FaTv />Movies</li>
                <li><FaBitcoin />Crypto</li>
                <li><FaBusinessTime />Business</li>
                <li><FaLaptopCode />Technology</li>
            </ul>
        </div>
    </div>
  )
}
