import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";
import {updateNewMessageText} from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
                       addPost={addPost}
                       updateNewPostText={updateNewPostText}
                       addMessage={addMessage}
                       updateNewMessageText={updateNewMessageText}/>, document.getElementById("root"));
};
