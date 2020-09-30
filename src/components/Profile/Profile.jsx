import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts postMessages={props.profilePage.postMessages}
               newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch}/>

    </div>
  )


};

export default Profile;
