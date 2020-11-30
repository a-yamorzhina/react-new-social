import React from "react";
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {


  state = {
    editMode: false,
    status: this.props.status
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
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }

  render() {
    return (
      <div className={s.statusContainer}>
        {!this.state.editMode &&
          <span className={s.status} onDoubleClick={ () => {this.activateEditMode()}}>{this.props.status || "----"}</span>
        }
        {this.state.editMode &&
          <input onChange={this.onStatusChange} className={s.input} onBlur={ () => {this.deactivateEditMode()}}
                 autoFocus={true} value={this.state.status} />
        }
      </div>
    )
  }
};

export default ProfileStatus;
