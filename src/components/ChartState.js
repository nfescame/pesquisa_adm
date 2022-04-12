import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import counter from "../utils/counter";

export default function ChartState({ states }) {
  const stateTotal = counter(states, "state");

  const options = {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Election 2022 State",
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
        dataPoints: stateTotal,
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
