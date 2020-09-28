import React from "react";
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = () => {

  ReactDOM.render(<App state={store.getState()}
                       store={store}/>, document.getElementById("root"));

};


rerenderEntireTree();

store.subscribe(rerenderEntireTree);



