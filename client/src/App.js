import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import UserHome from "./UserHome";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
        setLoggedIn(true);
      } else {
        response.json().then((data) => setErrors(data.errors));
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
            <h1 className="landingPage">Run Data Tracker</h1>
            <h4 className="landingPage">
              Welcome! You can use this app to track your run progress. Enter
              data for each workout you do, then find your results!
            </h4>
            <Login setUser={setUser} />
            <Signup setUser={setUser} />
          </div>
        )}
      </div>
      <hr></hr>
      <footer>
        <h6>Questions about the app: </h6>

        <a
          className="bloglinks"
          target="_blank"
          rel="noreferrer"
          href="mailto:pfohman.sarah@gmail.com"
        >
          Email: Sarah Pfohman
        </a>
        <br />
        <h6>To check out the source code or see any of my other projects: </h6>
        <a
          className="bloglinks"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/spfohman"
        >
          Github
        </a>
        <br />
        <h6>Connect: </h6>
        <a
          className="bloglinks"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sarah-pfohman-998a8246/"
        >
          Linkedin
        </a>
      </footer>
    </>
  );
}
export default App;
