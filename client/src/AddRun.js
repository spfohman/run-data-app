import React, { useState } from "react";

function AddRun({ addRuns }) {
  const [newRun, setNewRun] = useState({
    date: "",
    distance: 0.0,
    total_time: 0.0,
    calories: 0,
    average_heartrate: 0,
    average_pace: 0.0,
    fastest_split: 0.0,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewRun({ ...newRun, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const addNewRun = {
      date: newRun.date,
      distance: newRun.distance,
      total_time: newRun.total_time,
      calories: newRun.calories,
      average_heartrate: newRun.average_heartrate,
      average_pace: newRun.average_pace,
      fastest_split: newRun.fastest_split,
    };
    fetch("/api/runs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewRun),
    })
      .then((response) => response.json())
      .then(addRuns);
    setNewRun({
      date: "",
      distance: 0.0,
      total_time: 0.0,
      calories: 0,
      average_heartrate: 0,
      average_pace: 0.0,
      fastest_split: 0.0,
    });
  }
  return (
    <div className="runForm">
      <h1>Add your run data here:</h1>
      <form onSubmit={handleSubmit} className="addRunForm">
        <p>
          <label htmlFor="date">Run date: </label>
          <input
            type="date"
            name="date"
            placeholder="date"
            value={newRun.date}
            required
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <p>
          <label htmlFor="distance">Distance, enter format 0.00 : </label>
          <input
            type="float"
            name="distance"
            value={newRun.distance}
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <p>
          <label htmlFor="time">
            Total run time, enter amount of minutes and seconds (ie. 80.05):{" "}
          </label>
          <input
            type="float"
            name="total_time"
            value={newRun.total_time}
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <p>
          <label htmlFor="calories">Run calories burned: </label>
          <input
            type="number"
            placeholder="Calories"
            name="calories"
            value={newRun.calories}
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <p>
          <label htmlFor="average_heartrate">
            Average heart rate, enter in whole numbers:{" "}
          </label>
          <input
            type="number"
            placeholder="Average Heartrate"
            name="average_heartrate"
            value={newRun.average_heartrate}
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <p>
          <label htmlFor="average_pace">
            Average pace, enter in format minutes.seconds:{" "}
          </label>
          <input
            type="float"
            placeholder="Average Pace"
            name="average_pace"
            value={newRun.average_pace}
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <p>
          <label htmlFor="fastest_split">
            Fastest split, enter in format minutes.seconds:{" "}
          </label>
          <input
            type="float"
            placeholder="Fastest Split"
            name="fastest_split"
            value={newRun.fastest_split}
            onChange={handleChange}
          ></input>
        </p>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h5>
        To see a list of your run data click on the "Find Data" tab above.
      </h5>
    </div>
  );
}
export default AddRun;
