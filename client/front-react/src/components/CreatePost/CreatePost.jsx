import React from "react";
import "./createpost.css";
import {withRouter} from "react-router-dom";
import {
  AiOutlineCloudUpload,
  AiOutlineEdit,
} from "react-icons/ai";

const CREATEPOSTS = [
  {
    id: 1,
    title: "Create a new post",
    username: "JohnDoe",
    avatar: "https://via.placeholder.com/50",
    
  },
];

export function CreatePost() {
  return (
    <div className="post-container">
      {CREATEPOSTS.map((createpost) => {
        return (
          <div className="createpost-content">
            <div className="createpost-header">
              <div className="userIcon">
                <img src={createpost.avatar} alt="userimg" />
                <p>@{createpost.username}</p>
              </div>
              <h3>{createpost.title}</h3>
            </div>

            <div className="createpost-main">
              <div className="left-btn">
               
              </div>
              <div className="main-content">
                
                 <p>< AiOutlineCloudUpload/>Upload a File</p>
                 </div>
                 <div className="main-content">
                 <p>< AiOutlineEdit/>''Type Something,,</p>
                 </div>
            </div>

            <div className="bottom-btn">
            
  
              <button type="submit" className="post-btn">
                <p>Post</p>
              </button>
              <button type="submit" className="cancel-btn">
        
                <p>Cancel</p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withRouter(CreatePost)