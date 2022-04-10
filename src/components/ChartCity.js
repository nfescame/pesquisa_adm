import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import counter from "../utils/CounterCity";

export default function ChartCity({ cities }) {
  const citiesTotal = counter(cities, "city");

  const options = {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Election 2022 City",
    },
    axisY: {
      title: "Number of votes",

      scaleBreaks: {
        autoCalculate: true,
      },
    },
    axisX: {
      title: "Apps",
      labelAngle: 0,
    },
    data: [
      {
        type: "column",
        dataPoints: citiesTotal,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}
