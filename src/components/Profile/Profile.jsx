import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  // console.log(props);

  return (
    <div>
      <ProfileInfo/>
      <MyPosts postMessages={props.state.postMessages}
               newPostText={props.state.newPostText}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}/>
    </div>
  )
};

export default Profile;
