import React from 'react';
import './sideleft.css';

export default function SideBarLeft() {
  return (
    <div className='sideBarLeft-container'>
        <div className="header">
            <h3>Topics</h3>
        </div>
        <div className="topics">
            <ul>
                <li>Gaming</li>
                <li>Movies</li>
                <li>Crypto</li>
                <li>Business</li>
                <li>Technology</li>
            </ul>
        </div>
    </div>
  )
}
