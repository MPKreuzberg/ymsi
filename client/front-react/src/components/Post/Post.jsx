import React from 'react'
import './post.css'
import {FaArrowUp, FaArrowDown,FaCommentAlt,FaShare,FaBookmark} from 'react-icons/fa';
const POST = 
  {
    id: 1,
    title: "The title of the Post",
    username: "JohnDoe",
    avatar: "https://via.placeholder.com/50",
    likes: 300,
  }


export default function Post() {
  return (
    <div className='post-container'>
            <div className="post-content">

              <div className="post-header">
                <div className="userIcon">
                  <img src={POST.avatar} alt="userimg" />
                  <p>@{POST.username}</p>
                </div>
                <h3>{POST.title}</h3>
              </div>

              <div className="post-main">
                <div className="left-btn">
                  <FaArrowUp className='arrows' />
                  <p>{POST.likes}</p>
                  <FaArrowDown className='arrows' />
                </div>
                <div className="main-content"></div>
              </div>

                <div className="bottom-btn">
                  <button className="comment-btn">
                    <FaCommentAlt />
                    <p>255 Comments</p>
                  </button>
                  <button className="share-btn">
                    <FaShare />
                    <p>Share</p>  
                  </button>
                  <button className="save-btn">
                    <FaBookmark />
                    <p>Save</p>
                  </button>
                </div>
            </div>
    </div>
  )
}
