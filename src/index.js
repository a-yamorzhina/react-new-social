import React from "react";
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = (state) => {

  ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)}
                       />, document.getElementById("root"));

};


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

