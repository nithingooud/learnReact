import React from "react";
import App from "./App";
import State from "./states";
import Crud from "./crud";
import LifeCycle from "./lifecycle";
import ApiData from "./ApiData";
import DomReact from "./reactDOM";
import ReactDOM from "react-dom/client";
import Appp from "./reactDOM";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    <State />
    <Crud />
    <LifeCycle />
    <ApiData /> */}
    <DomReact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
