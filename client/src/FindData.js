import React from "react";
import SearchBar from "./SearchBar";
import EachRun from "./EachRun";

function FindData({ runs, sortRuns, sortBy, setSortBy }) {
  const runList = runs.map((run) => <EachRun key={run.id} run={run} />);
  return (
    <div>
      <SearchBar sortBy={sortBy} setSortBy={setSortBy} />
      <h1>Data will be searched here</h1>
      {runList}
    </div>
  );
}
export default FindData;
