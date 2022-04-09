import React from "react";
import SearchBar from "./SearchBar";
import EachRun from "./EachRun";

function FindData({
  runs,
  sortRuns,
  sortBy,
  setSortBy,
  handleDeleteRun,
  handleFavoriteRun,
}) {
  const runList = runs.map((run) => (
    <EachRun
      key={run.id}
      run={run}
      handleDeleteRun={handleDeleteRun}
      handleFavoriteRun={handleFavoriteRun}
    />
  ));
  return (
    <div>
      <SearchBar sortBy={sortBy} setSortBy={setSortBy} />
      <h1>Run Data</h1>
      <p>
        All data types are sorted by the lowest number first, including distance
        and total time.
      </p>
      <table>{runList}</table>
    </div>
  );
}
export default FindData;
