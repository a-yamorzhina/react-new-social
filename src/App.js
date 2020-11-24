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


const App = () => {

  let DialogsRoute = () => <DialogsContainer/>;

  let path = window.location.pathname;

  if (path !== "/login") {
    return (
      <div>
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

          </div>
        </div>

      </div>
    )
  } else {
    return (
      <div>
        <Route path='/login' render={() => <Login/>}/>
      </div>
    )
  }

};


export default App;
