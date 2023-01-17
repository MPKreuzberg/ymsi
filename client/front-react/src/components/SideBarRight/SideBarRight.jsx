import React from 'react'
import './sidebarright.css'
import USERS from '../../FAKEDATA.js'


const userOnline = USERS.map((user) => {
  return(
    <div className='user-display'>
      <img src={user.avatar} alt="" /> <h4>{user.username}</h4>
    </div>
  )
}) 

export default function SideBarRight() {
  return (
    <div className='sidebarright-users'>
      <h4 className='user-on'>Online Users</h4>
      <div className="users">
        {userOnline}
      </div>
    </div>
  )
}
