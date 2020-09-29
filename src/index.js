import React from "react";
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = (state) => {

  ReactDOM.render(<App state={state}

                       addPost={store.addPost.bind(store)}
                       addMessage={store.addMessage.bind(store)}
                       updateNewPostText={store.updateNewPostText.bind(store)}
                       updateNewMessageText={store.updateNewMessageText.bind(store)}

                       />, document.getElementById("root"));

};


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



// store={store}
