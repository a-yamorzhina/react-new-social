import React from "react";
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
                       addPost={addPost}
                       updateNewPostText={updateNewPostText}
                       addMessage={addMessage}
                       updateNewMessageText={updateNewMessageText}/>, document.getElementById("root"));
};


rerenderEntireTree(state);

subscribe(rerenderEntireTree);



