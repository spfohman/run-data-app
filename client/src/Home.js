import React from "react";

function Home({ user, fastestMile }) {
  return (
    <div>
      <h1>
        Hello {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
      </h1>
      {fastestMile === Infinity ? (
        <h4>Enter run data to find your fastest mile.</h4>
      ) : (
        <h4>Your fastest mile so far: {fastestMile} minutes.</h4>
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
