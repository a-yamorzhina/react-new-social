import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  onGetStatus = (userId) => {
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} onGetStatus={this.onGetStatus}/>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
};

export default compose(
  connect(mapStateToProps, {getProfile, getStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);


