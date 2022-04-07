import React from "react";

function SearchBar({ sortBy, setSortBy }) {
  //   function handleSortChange(event) {
  //     setSortBy(event.target.value);
  //   }

  return (
    <div>
      <strong>Sort by:</strong>
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
