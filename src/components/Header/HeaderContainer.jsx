import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Header from "./Header";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {usersAPI} from "../../API/api";


class HeaderContainer extends React.Component {

  componentDidMount() {
    usersAPI.auth().then(data => {
        // debugger;
        if (data.resultCode === 0) {
          let {email, id, login} = data.data;
          this.props.setAuthUserDataAC(email, id, login);
        }
      })
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


export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);
