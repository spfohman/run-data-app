import React from "react";

function EachRun({ run }) {
  return (
    <tbody>
      <tr>
        <th>Date</th>
        <th>Average Pace</th>
        <th>Calories burned</th>
        <th>Total distance</th>
        <th>Fastest split</th>
        <th>total time</th>
        <th>Average heart rate</th>
      </tr>
      <tr>
        <td>{run.date}</td>
        <td>{run.average_pace}</td>
        <td>{run.calories}</td>
        <td>{run.distance}</td>
        <td>{run.fastest_split}</td>
        <td>{run.total_time}</td>
        <td>{run.average_heartrate}</td>
      </tr>
    </tbody>
  );
}
export default EachRun;
