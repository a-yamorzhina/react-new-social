import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {

  let postMessages = [
    {id: 1, message: "hi, how are you?", count: "5"},
    {id: 2, message: "it's my first post. LOL", count: "6"},
  ];

  let postsMas = postMessages.map (
    p =>  <Post message={p.message} count={p.count}/>
  );

  return (
      <div className={s.postsBlock}>
        <div className={s.firstWrap}>
          <div className={s.secondWrap}>
            <h3 className={s.h3}>My posts</h3>
          </div>
        </div>

        <button className={s.mainButton}>New post</button>
        <div className={s.posts}>
          {postsMas}
        </div>
      </div>
  )
};

export default MyPosts;
