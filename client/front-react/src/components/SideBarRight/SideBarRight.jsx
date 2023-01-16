import React from 'react'
import './sidebarright.css'
const USERS = [
  {
    id: 1,
    username: "DummyUserName",
    avatar: "https://via.placeholder.com/100"
  },
  {
    id: 2,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  },
  {
    id: 3,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  },
  {
    id: 4,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  },
    {
    id: 5,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  },
    {
    id: 6,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  },
    {
    id: 7,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  },
    {
    id: 8,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  },
    {
    id: 9,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  },
    {
    id: 10,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  },
    {
    id: 11,
    username: "BLABLA",
    avatar: "https://via.placeholder.com/100"
  }
]

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

{/* <FaUser /> <h4>@Username</h4> */}