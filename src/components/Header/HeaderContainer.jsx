import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Header from "./Header";
import {auth, setAuthUserDataAC} from "../../redux/auth-reducer";
import {usersAPI} from "../../API/api";


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.auth();
  }

  render() {
    return <Header {...this.props}/>
  }

}


let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login:  state.auth.login
  }
};


export default connect(mapStateToProps, {auth})(HeaderContainer);
