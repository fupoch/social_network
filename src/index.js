import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./render.module.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello";
// document.querySelector("body").append(h1);

// React.createElement("h1");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
