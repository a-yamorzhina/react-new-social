import React from "react";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>, document.getElementById("root")
);

