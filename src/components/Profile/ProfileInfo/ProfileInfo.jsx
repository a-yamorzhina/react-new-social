import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import VK from "../../../assets/images/vk.svg"


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={s.profileInfo}>
      <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt='wallpaper' className={s.img}/>
      <div className={s.descriptionBlockContainer}>
        <div className={s.nameMe}>
          <img src={props.profile.photos.small} alt='avatar' className={s.avatar}/>
          <h2 className={s.fullName}>{props.profile.fullName}</h2>
        </div>
        <div className={s.descriptionBlock}>
          <div className={s.contacts}>
            <a href={props.profile.contacts.vk} className={s.contactsPosition}>
              <img src={VK} className={s.socialIcon} alt='social'/>
              <span className={s.socialName}>vk</span>
            </a>
          </div>
          <p className={s.aboutMe}>{props.profile.aboutMe}</p>
          <span className={s.lookingForAJob}>{props.profile.lookingForAJob}</span>

        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;
