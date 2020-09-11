import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {


  let postsMas = props.postMessages.map(
    p => <Post message={p.message} count={p.count}/>
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
