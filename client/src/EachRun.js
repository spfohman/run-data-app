import React from "react";

function EachRun({ run }) {
  return (
    <div>
      <h4>Date: {run.date}</h4>
      <h6>Average pace: {run.average_pace}</h6>
      <h6>Calories burned: {run.calories}</h6>
      <h6>Total distance: {run.distance}</h6>
      <h6>Fastest split: {run.fastest_split}</h6>
      <h6>Total time: {run.total_time}</h6>
      <h6>Average heart rate: {run.average_heartrate}</h6>
    </div>
  );
}
export default EachRun;
