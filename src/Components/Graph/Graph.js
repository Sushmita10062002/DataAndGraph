import React from "react";
import Button from "../Button/Button";
import PlotGraph from "./PlotGraph/PlotGraph";
import "./Graph.css";
const Graph = () => {
  const getCategories = () => {
    let local = JSON.parse(localStorage.getItem("tasks"));
    let titles = [];
    for (let i in local) {
      titles.push(local[i].taskId);
    }
    return titles;
  };
  const getData = () => {
    let local = JSON.parse(localStorage.getItem("tasks"));
    let data = [];
    for (let i in local) {
      data.push(local[i].data);
    }

    return data;
  };
  return (
    <>
      <Button value="Go Back" linkedTo="/" />
      <div className="container">
        <PlotGraph categories={getCategories()} data={getData()} />
      </div>
    </>
  );
};
export default Graph;
