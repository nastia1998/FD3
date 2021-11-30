import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Filter from "./Filter";
import reportWebVitals from "./reportWebVitals";

let programmingLaunguagesList = [
  "Node.js",
  "React.js",
  "Angular",
  "Java",
  "iOS",
  "Android",
  "C++",
  "ABAP",
  "Python",
  "C#",
  "Pascal",
  "Unity",
  "TypeScript",
  "SAPUI5",
];

ReactDOM.render(
  <React.StrictMode>
    <Filter programmingLaunguagesList={programmingLaunguagesList} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
