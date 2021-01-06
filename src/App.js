import React from 'react';
import './styles/App.css';
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import AllUsersContainer from "./components/AllUsers/AllUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    let DialogsRoute = () => <DialogsContainer/>;

    // let path = window.location.pathname;

    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="appWrapper" id='div'>

        <HeaderContainer/>

        <NavbarContainer/>

        <div className="app-wrapper-content">
          <Route exact path='/'>
            <Redirect to='/profile'/>
          </Route>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={DialogsRoute}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/users' render={() => <AllUsersContainer/>}/>
          <Route path='/friends' render={() => <Friends/>}/>
          <Route path='/login' render={() => <Login/>}/>
        </div>

      </div>
    )


  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
