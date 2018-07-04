// @flow
import React from "react";
import ReactDOM from "react-dom";
import Charts from "./containers/charts";

const App = () => (
  <div>
    <Charts/>
  </div>
);

const element = document.getElementById("app");
element && ReactDOM.render(<App/>, element);