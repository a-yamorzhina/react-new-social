import React from 'react';
import './styles/App.css';
import Header from "./components/Header/Header";
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import AllUsersContainer from "./components/AllUsers/AllUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {

  let DialogsRoute = () => <DialogsContainer/>;


  return (
    <div className="app-wrapper">
      <Header/>

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
  )
};


export default App;
