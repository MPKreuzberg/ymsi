import React from 'react'
import './App.css'

import Nav from './components/Navigation/Nav.jsx';
import Post from './components/Post/Post';
import SideBarLeft from './components/SideBarLeft/SideBarLeft';
import SideBarRight from './components/SideBarRight/SideBarRight';
import Trending from './components/Trending/Trending';




function Home() {
  return (
    <div className='HomePage-container'>
        <Nav />
        <div className='flex-app'>
            <SideBarLeft />
            <div className='mainContent'>
                <Trending />
                <Post />
            </div>
            <SideBarRight />
        </div>
    </div>
  )
}

export default Home;
