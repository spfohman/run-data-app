import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import UserHome from "./UserHome";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
        setLoggedIn(true);
      }
    });
  }, []);
  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <>
      <div>
        {user ? (
          <UserHome user={user} logout={logout} />
        ) : (
          <div>
            <h1>Run Data Tracker</h1>
            <h4>
              Welcome! You can use this app to track your run progress. Enter
              data for each workout you do, then find your results!
            </h4>
            <Login setUser={setUser} />
            <Signup setUser={setUser} />
          </div>
        )}
      </div>
      <footer>
        <h5>Contact Info: </h5>

        <a
          className="bloglinks"
          target="_blank"
          rel="noreferrer"
          href="mailto:spfohman@email.essex.edu"
        >
          Email: Sarah Pfohman
        </a>
        <br />
        <a
          className="bloglinks"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/spfohman"
        >
          github
        </a>
        <br />
        <a
          className="bloglinks"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sarah-pfohman-998a8246/"
        >
          linkedin
        </a>
      </footer>
    </>
  );
}
export default App;
