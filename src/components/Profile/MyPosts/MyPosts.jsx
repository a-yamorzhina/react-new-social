import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {


  let postsMas = props.postMessages.map(
    p => <Post message={p.message} count={p.count}/>
  );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };


  return (
    <div className={s.postsBlock}>
      <div className={s.firstWrap}>
        <div className={s.secondWrap}>
          <h3 className={s.h3}>My posts</h3>
        </div>
      </div>

      <div>
      <textarea className={s.textareaStyle} ref={newPostElement}> </textarea>
      <button className={s.mainButton} onClick={addPost}>New post</button>
      </div>

      <div className={s.posts}>
        {postsMas}
      </div>
    </div>
  )
};

export default MyPosts;
