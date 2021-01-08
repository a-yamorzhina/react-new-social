import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import {setStatus} from "../../../redux/profile-reducer";

const ProfileStatusWithHooks = (props) =>  {

  // let stateWithSetState = useState(false);
  // let editMode = stateWithSetState[0];
  // let setEditMode = stateWithSetState[1];

  let [editMode, setEditMode] = useState(false); //destruction assignment
  let [status, setStatus] = useState(props.status);

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
          <span onDoubleClick={activateEditMode}  className={s.status}>{props.status || "----"}</span>
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
