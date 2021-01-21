import React from "react";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>, document.getElementById("root")
);

