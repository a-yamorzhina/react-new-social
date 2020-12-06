import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {NewPostReduxForm} from "./AddPostForm";

const MyPosts = (props) => {


  let postsMas = props.postMessages.map(
    p => <Post message={p.message} count={p.count} key={p.id}/>
  );


  const onAddPost = (values) => {
    props.addPost(values.postText);
  }


  return (
    <div className={s.postsBlock}>
      <div className={s.firstWrap}>
        <div className={s.secondWrap}>
          <h3 className={s.h3}>My posts</h3>
        </div>
      </div>

      <NewPostReduxForm onSubmit={onAddPost}/>

      <div className={s.posts}>
        {postsMas}
      </div>
    </div>
  )
};

export default MyPosts;


