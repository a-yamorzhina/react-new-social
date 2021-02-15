import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"
import {setStatus} from "../../../redux/profile-reducer";

const ProfileStatusWithHooks = (props) =>  {

  let [editMode, setEditMode] = useState(false); //destruction assignment
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };


    return (
      <div className={s.statusContainer}>
        {!editMode &&
          <span onDoubleClick={activateEditMode}  className={s.status}>Status: {props.status || ""}</span>
        }
        {editMode &&
          <input className={s.input}
                 onBlur={deactivateEditMode}
                 onChange={onStatusChange}
                 value={status}
                 autoFocus={true} />
        }
      </div>
    )
};

export default ProfileStatusWithHooks;
