import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {usersAPI} from "../../API/api";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    usersAPI.profile(userId).then(data => {
        // console.log(response);
        this.props.setUserProfile(data);
      })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,

  }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

