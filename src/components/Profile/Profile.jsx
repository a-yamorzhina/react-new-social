import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = ({profile, updateStatus, status, isOwner, savePhoto}) => {


  return (
    <div>
      <ProfileInfo profile={profile} updateStatus={updateStatus} status={status} isOwner={isOwner} savePhoto={savePhoto}/>
      <MyPostsContainer/>
    </div>
  )


};

export default Profile;
