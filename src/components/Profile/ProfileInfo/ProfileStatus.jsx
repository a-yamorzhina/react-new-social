import React from "react";
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
  }

  activateEditMode = () => {
    this.setState(
      { editMode: true}
    )
  }

  deactivateEditMode = () => {
    this.setState(
      { editMode: false}
    )
  }

  render() {
    return (
      <div className={s.statusContainer}>
        {!this.state.editMode &&
          <span className={s.status} onDoubleClick={ () => {this.activateEditMode()}}>{this.props.onGetStatus(this.props.userId)}</span>
        }
        {this.state.editMode &&
          <input onBlur={ () => {this.deactivateEditMode()}} autoFocus={true} value={this.props.status} />
        }
      </div>
    )
  }
};

export default ProfileStatus;
