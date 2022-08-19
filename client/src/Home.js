import React, { useState, useEffect } from "react";

function Home({ user }) {
  const [fastestMile, setFastestMile] = useState("");
  const [mileError, setMileError] = useState([]);

  useEffect(() => {
    fetch("/api/fastest-mile")
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setFastestMile(data);
        } else {
          setMileError(data.error);
        }
      });
  }, []);
  const errorPs = mileError.map((e) => (
    <p key={e} className="errors">
      {e}
    </p>
  ));
  return (
    <div className="homePage">
      <h1>
        Hello {user.username.charAt(0).toUpperCase() + user.username.slice(1)}!
      </h1>
      {fastestMile ? (
        <b>Your fastest mile is: {fastestMile} minutes.</b>
      ) : (
        errorPs
      )}
      <div>
        <p>
          Welcome to the run-data-tracker app. You can enter the data you would
          like to keep track of, then sort based on what you would like to find.
        </p>
      </div>
    </div>
  );
}
export default Home;
