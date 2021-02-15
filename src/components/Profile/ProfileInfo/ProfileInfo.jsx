import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhProfile from "../../../../src/assets/images/user-opacity.svg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileDataFormReduxForm} from "./ProfileDataForm";
import edit from "../../../assets/images/draw.svg"


const ProfileInfo = ({profile, updateStatus, status, saveProfile, ...props}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => {
      setEditMode(false);
    })
  };

  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img src={profile.photos.large || userPhProfile} alt='avatar'
             className={s.avatar}/>
        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
      </div>

      <div className={s.userInfo}>

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}> </ProfileStatusWithHooks>

        <div className={s.descriptionBlockContainer}>
          {editMode
            ? <ProfileDataFormReduxForm  initialValues={profile} onSubmit={onSubmit} profile={profile}/>
            : <ProfileData profile={profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>
          }
        </div>

      </div>

    </div>
  )
};

const ProfileData = (props) => {
  return (
    <>
      {props.isOwner
        ? <button onClick={props.goToEditMode} className={s.buttonLink}>
          <img className={s.editIcon} src={edit}/>
          Edit personal information
        </button>
        : null}
      <div className={s.nameMe}>
        <h2 className={s.fullName}>{props.profile.fullName}</h2>
      </div>
      <div className={s.descriptionBlock}>
        <span className={s.title}>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</span>
        {props.profile.lookingForAJob &&
        <p className={s.title}>My professional
          skills: {props.profile.lookingForAJobDescription}</p>}
        <p className={s.title}>About me: {props.profile.aboutMe}</p>
        <div className={s.title}><span
          className={s.contactsTitle}>Contacts:</span> {Object.keys(props.profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}</div>
      </div>
    </>)
};


const Contact = ({contactTitle, contactValue}) => {
  return (
    <div>
      <span className={s.socialName}>{contactTitle}</span>
      <span className={s.socialName}>{contactValue}</span>
    </div>
  )
};

export default ProfileInfo;
