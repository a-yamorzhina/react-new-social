import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
  return (
      <div>
        my posts
        <button>New post</button>
       <Post message="hi, how are you?" count="5"/>
       <Post message="it's my first post" count="6"/>
      </div>
  )
};

export default MyPosts;
