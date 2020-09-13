import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Post({ profilePic, image, username, timestamp, message }) {
let myRef = React.createRef();
let counter = React.createRef();
console.log(myRef, myRef.current);
const handler = () => {  
  let count = 0;
  if(myRef.current.classList.contains('liked')) {
            myRef.current.classList.remove('liked');
            counter.current.innerHTML = "";
        }
        else {
            myRef.current.classList.add('liked');
            counter.current.innerHTML = '+' + ++count;                    
        }
}

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option" ref={myRef} onClick={handler}>
          <ThumbUpIcon />
          <p >Like</p>
          <span ref={counter} style={{marginLeft: '5px'}}></span>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon/>          
        </div>
      </div>
    </div>
  );
}
export default Post;
