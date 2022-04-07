import React from "react";

function Home({ user, fastestRun }) {
  return (
    <div>
      <h1>
        Hello {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
      </h1>
      <h4>Your fastest mile so far: {fastestRun}</h4>
    </div>
  );
}
export default Home;
