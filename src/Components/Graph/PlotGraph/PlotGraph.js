import React, { useState } from "react";
import Chart from "react-apexcharts";
const Graph = (props) => {
  const [type, setType] = useState("bar");
  const [options, setOptions] = useState({
    chart: {
      background: "#d0d0d0",
      foreColor: "#333"
    },
    xaxis: {
      categories: props.categories
    },
    fill: {
      colors: ["rgb(64, 118, 169)"]
    },
    title: {
      text: "Largest Cities by population",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "14px"
      }
    }
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: props.data
    }
  ]);

  return (
    <>
      <Chart
        className="chart"
        options={options}
        series={series}
        type="bar"
        height="400"
        width="100%"
      />
    </>
  );
};

export default Graph;
