// @flow
import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    Hello World!!
  </div>
);

const element = document.getElementById("app");
element && ReactDOM.render(<App/>, element);