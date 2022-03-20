import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./render.module.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
import MainApp from "./App";

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello";
// document.querySelector("body").append(h1);

// React.createElement("h1");

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
