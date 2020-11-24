import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhProfile from "../../../../src/assets/images/user-opacity.svg"
import {Redirect} from "react-router-dom";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }



  return (
    <div className={s.profileInfo}>

      <div className={s.img}/>

      <div className={s.descriptionBlockContainer}>
        <div className={s.nameMe}>
          <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhProfile} alt='avatar'
               className={s.avatar}/>
          <h2 className={s.fullName}>{props.profile.fullName}</h2>
        </div>
        <div className={s.descriptionBlock}>
          <div className={s.contacts}>
            {props.profile.contacts.vk ?
              <a href={props.profile.contacts.vk} className={s.contactsPosition}>
                <svg xmlns="http://www.w3.org/2000/svg" className={s.socialIcon} alt='social'>
                  <path xmlns="http://www.w3.org/2000/svg" d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431
                    3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226
                    5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419
                    0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892
                    0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749
                    0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001
                    0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0
                    1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"/>
                </svg>
                <span className={s.socialName}>vk</span>
              </a> : null}
          </div>
          <p className={s.aboutMe}>{props.profile.aboutMe}</p>
          <span className={s.lookingForAJob}>{props.profile.lookingForAJob}</span>

        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;
