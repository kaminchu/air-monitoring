// @flow
import {lifecycle} from "recompose";
import Charts from "../components/charts";
import React from "react";

const fetchData = async () => {
  // TODO temp
  const json = [{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-03T13:42:39.915Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-03T13:42:49.926Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-03T13:42:59.927Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:02:58.761Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:03:08.765Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:03:18.767Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:03:28.768Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:03:38.776Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:03:48.784Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:03:58.787Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:04:08.797Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:04:18.803Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:04:28.814Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:04:38.824Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:04:48.835Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:05:07.470Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:05:17.472Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:05:27.478Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:05:37.481Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:08:58.405Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:09:08.413Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:09:18.417Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:09:28.427Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:09:38.428Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:09:48.428Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:14:45.908Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:14:55.912Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:15:16.568Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:15:26.571Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:15:36.571Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:15:46.580Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:16:04.534Z"},{"temperature":20,"humidity":75,"pressure":1013,"time":"2018-07-04T10:16:14.544Z"}];
  return json.map(e => ({...e, time: new Date(e.time)}));
};

// TODO あとでreduxに
let state = {
  data: [],
};
const _Charts = lifecycle({
  componentDidMount: () => {
    fetchData().then(data => {
      state = {...state, data};
    });
  }
})((() => <Charts data={state.data}/>));

export default _Charts;
