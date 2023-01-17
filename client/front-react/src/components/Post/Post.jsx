import React from 'react'
import './post.css'
import {FaArrowUp, FaArrowDown,FaCommentAlt,FaShare,FaBookmark} from 'react-icons/fa';
const POSTS = [  
  {
    id: 1,
    title: "Title one",
    username: "JohnDoe",
    avatar: "https://via.placeholder.com/50",
    likes: 300,
  },
  {
    id: 2,
    title: "Title two",
    username: "JaneDoe",
    avatar: "https://via.placeholder.com/50",
    likes: 300,
  },
  {
    id: 3,
    title: "Title three",
    username: "JonasDoe",
    avatar: "https://via.placeholder.com/50",
    likes: 300,
  },
  {
    id: 4,
    title: "Title four",
    username: "JusDoe",
    avatar: "https://via.placeholder.com/50",
    likes: 300,
  },

]


export default function Post() {
  return (
    <div className='post-container'>
                {POSTS.map((post)=> {
                  return(
                    <div className="post-content">
                      <div className="post-header">
                        <div className="userIcon">
                        <img src={post.avatar} alt="userimg" />
                        <p>@{post.username}</p>
                      </div>
                      <h3>{post.title}</h3>
                    </div>

              <div className="post-main">
                <div className="left-btn">
                  <FaArrowUp className='arrows' />
                  <p>{post.likes}</p>
                  <FaArrowDown className='arrows' />
                </div>
                <div className="main-content"></div>
              </div>

                <div className="bottom-btn">
                  <button className="comment-btn">
                    <FaCommentAlt className='bottom-icons' />
                    <p>255 Comments</p>
                  </button>
                  <button className="share-btn">
                    <FaShare className='bottom-icons'  />
                    <p>Share</p>  
                  </button>
                  <button className="save-btn">
                    <FaBookmark className='bottom-icons'  />
                    <p>Save</p>
                  </button>
                </div>
            </div>
                  )
                })}
    </div>
  )
}








// Incase the map method breaks, hardcoded jsx here

/*
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

*/