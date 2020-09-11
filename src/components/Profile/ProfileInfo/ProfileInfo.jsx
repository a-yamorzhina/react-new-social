import React from "react";
import s from "./ProfileInfo.module.css";



const ProfileInfo = () => {
  return (
      <div className={s.profileInfo}>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" className={s.width}/>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
      </div>
  )
};

export default ProfileInfo;
