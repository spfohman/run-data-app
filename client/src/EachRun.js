import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

function EachRun({ run, handleDeleteRun }) {
  const [favorite, setFavorite] = useState(false);
  const favoriteRun = favorite ? (
    <p onClick={() => setFavorite(false)}>⭐ </p>
  ) : (
    <p onClick={() => setFavorite(true)}>🏃 </p>
  );
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
        <td>{run.date}</td>
        <td>{run.average_pace}</td>
        <td>{run.calories}</td>
        <td>{run.distance}</td>
        <td>{run.fastest_split}</td>
        <td>{run.total_time}</td>
        <td>{run.average_heartrate}</td>
        <td>{favoriteRun} </td>
        <DeleteButton handleDeleteRun={handleDeleteRun} run={run} />
      </tr>
    </tbody>
  );
}
export default EachRun;
