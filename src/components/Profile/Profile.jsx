import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = ({profile, updateStatus, status, isOwner, savePhoto, saveProfile}) => {


  return (
    <div>
      <ProfileInfo profile={profile}
                   saveProfile={saveProfile}
                   updateStatus={updateStatus}
                   status={status}
                   isOwner={isOwner}
                   savePhoto={savePhoto}/>
      <MyPostsContainer/>
    </div>
  )


};

export default Profile;
