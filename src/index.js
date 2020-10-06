import React from "react";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "./StoreContext";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>, document.getElementById("root"))


};


rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});


// store={store} state={state} dispatch={store.dispatch.bind(store)
