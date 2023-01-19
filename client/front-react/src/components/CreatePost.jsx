import React from 'react'
import './createpost.css'
import {FaArrowUp, FaArrowDown,FaCommentAlt,FaShare,FaBookmark,FaPlus,FaImage} from 'react-icons/fa';
import {RxAvatar} from 'react-icons/rx'

export default function 
() {
  return (
        <div className="createPost">
            <RxAvatar className='create-avatar' />
            <form action="" className='createpost-form'>
                <input type="text" placeholder='Create Post...' id='post-title' />
                {/* <input type="file" name="file" id="file" accept="image/*,.pdf"/> */}
                <FaImage  className='imgupload'/>
                <button ><FaPlus style={{color: "white"}} /></button>
            </form>
      </div>
  )
}
