import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  console.log(props);

  let postsMas = props.postMessages.map(
    p => <Post message={p.message} count={p.count}/>
  );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };


  return (
    <div className={s.postsBlock}>
      <div className={s.firstWrap}>
        <div className={s.secondWrap}>
          <h3 className={s.h3}>My posts</h3>
        </div>
      </div>

      <div>
        <textarea className={s.textareaStyle} ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
        <button className={s.mainButton} onClick={addPost}>New post</button>
      </div>

      <div className={s.posts}>
        {postsMas}
      </div>
    </div>
  )
};

export default MyPosts;
