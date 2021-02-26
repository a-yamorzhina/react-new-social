import React, {ChangeEvent} from "react";
// @ts-ignore
import s from "./ProfileInfo.module.css"

type PropsType = {
  status: string
  updateStatus: (newStatus:string) => void
}

type StateType = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState(
      {editMode: true}
    )
  }

  deactivateEditMode = () => {
    this.setState(
      {editMode: false}
    )
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }

  componentDidUpdate(prevProps:PropsType, prevState:StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div className={s.statusContainer}>
        {!this.state.editMode &&
        <span className={s.status} onDoubleClick={() => {
          this.activateEditMode()
        }}>{this.props.status || "----"}</span>
        }
        {this.state.editMode &&
        <input onChange={this.onStatusChange} className={s.input} onBlur={() => {
          this.deactivateEditMode()
        }}
               autoFocus={true} value={this.state.status}/>
        }
      </div>
    )
  }
};

export default ProfileStatus;
