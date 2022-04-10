import React from "react";
import DeleteButton from "./DeleteButton";
import moment from "moment";

function EachRun({ run, handleDeleteRun, handleFavoriteRun }) {
  function favoriteRun() {
    fetch(`/runs/${run.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite: !run.favorite }),
    })
      .then((response) => response.json())
      .then((updatedRun) => handleFavoriteRun(updatedRun));
  }

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
        <th>Favorite</th>
        <th>Delete Run</th>
      </tr>
      <tr>
        <td>{moment(run.date).format("MM/DD/YYYY")}</td>
        <td>{run.average_pace}</td>
        <td>{run.calories}</td>
        <td>{run.distance}</td>
        <td>{run.fastest_split}</td>
        <td>{run.total_time}</td>
        <td>{run.average_heartrate}</td>
        <td onClick={favoriteRun}>{run.favorite ? `⭐` : "☆ "}</td>
        <DeleteButton handleDeleteRun={handleDeleteRun} run={run} />
      </tr>
    </tbody>
  );
}
export default EachRun;
