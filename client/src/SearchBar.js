import React from "react";

function SearchBar({ setSortBy }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <br></br>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="distance">Distance</option>
        <option value="fastest_split">Fastest Split</option>
        <option value="total_time">Total Time</option>
        <option value="average_pace">Average Pace</option>
      </select>
      <br />
    </div>
  );
}

export default SearchBar;
