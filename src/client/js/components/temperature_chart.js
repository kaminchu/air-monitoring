// @flow
import React from "react";
import LineChart from "./line_chart";

type Props = {
  data: {temperature: number, time: Date}[],
};
const TemperatureChart = (props: Props) => {
  const chartData = props.data.map(({temperature, time}) => ({time, value: temperature}));
  return <LineChart data={chartData}/>;
};

export default TemperatureChart;
