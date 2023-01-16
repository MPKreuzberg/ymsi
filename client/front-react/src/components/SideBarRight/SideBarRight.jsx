import React from 'react'
import './sidebarright.css'
import {FaUser} from 'react-icons/fa';

export default function SideBarRight() {
  return (
    <div className='sidebarright-users'>
        <div className="user">
            <FaUser /> <h4>@Username</h4>
        </div>
    </div>
  )
}
