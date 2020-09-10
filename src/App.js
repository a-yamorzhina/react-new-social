import React from 'react';
import './styles/App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

  let DialogsRoute = () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">

          <Route path='/dialogs' render={ DialogsRoute }/>
          <Route path='/profile' render={ () => <Profile postMessages={props.postMessages}/>}/>
          <Route path='/news' render={ () => <News/>}/>
          <Route path='/music' render={ () => <Music/>}/>
          <Route path='/settings' render={ () => <Settings/>}/>

        </div>
      </div>
    </BrowserRouter>)
};


export default App;
