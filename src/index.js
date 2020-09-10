import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";


let postMessages = [
  {id: 1, message: "hi, how are you?", count: "5"},
  {id: 2, message: "it's my first post. LOL", count: "6"},
];

let dialogs = [
  {id:1, name: "Tom Clinton"},
  {id:2, name: "Ciara Tess"},
  {id:3, name: "Jim Kerry"},
  {id:4, name: "Ariana Gray"},
];

let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Okay, okay"},
];



ReactDOM.render(<App postMessages={postMessages} dialogs={dialogs} messages={messages}/>, document.getElementById("root"));
