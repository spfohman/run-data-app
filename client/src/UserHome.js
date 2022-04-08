import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import AddRun from "./AddRun";
// import EachRun from "./EachRun";
import FindData from "./FindData";
import Home from "./Home";
import { Route } from "react-router-dom";
function UserHome({ user, logout }) {
  const [runs, setRuns] = useState([]);
  const [sortBy, setSortBy] = useState("fastest_split");

  useEffect(() => {
    fetch("/runs")
      .then((response) => response.json())
      .then((data) => {
        setRuns(data);
      });
  }, []);
  useEffect(() => {
    const sorted = [...runs].sort((run1, run2) => {
      if (run1[sortBy] > run2[sortBy]) {
        return 1;
      } else if (run1[sortBy] < run2[sortBy]) {
        return -1;
      }
      return 0;
    });

    setRuns(sorted);
  }, [sortBy]);
  function addRuns(newRun) {
    const updatedRuns = [...runs, newRun];
    setRuns(updatedRuns);
  }
  const fastestMile = Math.min.apply(
    Math,

    runs.map((run) => {
      return run.fastest_split;
    })
  );
  console.log(fastestMile);
  return (
    <div>
      <NavBar logout={logout} />
      <Route path="/Home">
        <Home user={user} runs={runs} fastestMile={fastestMile} />
      </Route>
      <Route path="/AddRun">
        <AddRun addRuns={addRuns} />
      </Route>
      <Route path="/FindData">
        <FindData runs={runs} sortBy={sortBy} setSortBy={setSortBy} />
      </Route>
    </div>
  );
}
export default UserHome;
