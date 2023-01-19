import React,{useState} from 'react'
import './post.css'
import {FaArrowUp, FaArrowDown,FaCommentAlt,FaShare,FaBookmark,FaPlus} from 'react-icons/fa';
import POSTS from '../../FAKEDATA.js'




export default function Post() {
  const [like, setLike] = useState(0)

  const handleDislike = () => {
    let counter = like;
    counter -= 1;
    setLike(counter)
  }
  const handleLike = () =>{
    let counter = like;
    counter += 1;
    setLike(counter)
  }
  return (
    <div className='post-container'>
                {POSTS.map((post)=> {
                  return(
                    <div className="test" key={post.id}>

                    <div className="post-content">
                      <div className="post-header" >
                        <div className="userIcon" >
                        <img src={post.avatar} alt="userimg" />
                        <p >@{post.username}</p>
                      </div>
                      <h3 >{post.title}</h3>
                    </div>

                    <div className="post-main" >
                      <div className="left-btn">
                        <FaArrowUp className='arrows' onClick={handleLike} />
                        <p>{like}</p>
                        <FaArrowDown className='arrows' onClick={handleDislike} />
                      </div>
                      <div className="main-content">
                        <img src={post.content} alt="" />
                      </div>
                    </div>

                    <div className="bottom-btn" >
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