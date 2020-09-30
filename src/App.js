import React from 'react';
import './styles/App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, NavLink, Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";



const App = (props) => {

  let DialogsRoute = () => <Dialogs state = {props.state.dialogsPage}
                                    dispatch={props.dispatch}/>;


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>

        <Navbar state={props.state.sidebar}/>

        <div className="app-wrapper-content">

          <Route exact path='/'>
            <Redirect to='/profile'/>
          </Route>
          <Route path='/dialogs' render={DialogsRoute}/>
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                        dispatch={props.dispatch}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/friends' render={() => <Friends state={props.state.sidebar}/>}/>

        </div>
      </div>
    </BrowserRouter>)


};


export default App;
