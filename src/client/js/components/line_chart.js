// @flow
import React from "react";
import {Line} from "react-chartjs";

type Props = {
  data: {value: number, time: Date}[]
};
const LineChart = (props: Props) => {
  const chartData = props.data.map(({value, time}) => ({x: time, y: value}));
  const chartOptions = {};

  return <Line data={chartData} options={chartOptions}/>;
};

export default LineChart;
