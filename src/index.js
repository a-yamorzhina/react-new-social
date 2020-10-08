import React from "react";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>, document.getElementById("root")
);

// store.subscribe(() => {
//   rerenderEntireTree();
// });


// store={store} state={state} dispatch={store.dispatch.bind(store)
