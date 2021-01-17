import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = ({profile, updateStatus, status}) => {


  return (
    <div>
      <ProfileInfo profile={profile} updateStatus={updateStatus} status={status}/>
      <MyPostsContainer/>
    </div>
  )


};

export default Profile;
