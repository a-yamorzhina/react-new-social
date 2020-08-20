import React from "react";
import s from "./Profile.module.css";


const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg"/>
      </div>
      <div>
        ava + description
      </div>
      <div>
        my posts
        <div>
          new post
        </div>
        <div className={s.posts}>
          <div className={s.post}>
            post 1
          </div>
          <div className={s.post}>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profile;
