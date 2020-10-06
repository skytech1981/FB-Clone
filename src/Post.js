import React from 'react'
import './Post.css';
import { Avatar } from "@material-ui/core"

function Post({ profilePic , image , username , timestamp , messege}) {
    return (
        <div className="post">
            <div className="post__top">
             <Avatar src={profilePic} className="post__avatar"/>
              <div className="post__topInfo">
               <h3>{username}</h3>
               <p>timestamp</p>
              </div>
            </div>
            <div className="post__buttom">
            <p>{messege}</p>

            </div>
            <div className="post__image">
            <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Post
