// @flow
import React from "react";
import TemperatureChart from "./temperature_chart";

type Props = {
  data: {
    temperature: number,
    humidity: number,
    pressure: number,
    time: Date,
  }[],
};
const Charts = (props: Props) => {
  const {temperatures} = props.data.reduce((pre, {temperature, humidity, pressure, time}) => {
    return {
      temperatures: pre.temperatures.concat({temperature, time}),
      humidities: pre.humidities.concat({humidity, time}),
      pressures: pre.pressures.concat({pressure, time}),
    };
  }, {temperatures: [], humidities: [], pressures:[]});

  return (
    <TemperatureChart data={temperatures}/>
  );
};

export default Charts;
