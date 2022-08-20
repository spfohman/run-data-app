import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import UserHome from "./UserHome";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f3e46",
      light: "#52796f",
      dark: "#354f52",
    },
    secondary: {
      main: "#84a98c",
      light: "#cad2c5",
    },
  },
});

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
    <ThemeProvider theme={theme}>
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
        <footer style={{ textAlign: "center" }}>
          <p>
            Questions about the app?
            <a
              className="bloglinks"
              target="_blank"
              rel="noreferrer"
              href="mailto:pfohman.sarah@gmail.com"
            >
              <MailOutlineIcon />
            </a>
          </p>

          <br />
          <p>
            Check out other projects:{" "}
            <a
              className="bloglinks"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/spfohman"
            >
              <GitHubIcon />
            </a>
          </p>

          <br />
          <p>
            Connect:{" "}
            <a
              className="bloglinks"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sarah-pfohman-998a8246/"
            >
              <LinkedIn />
            </a>
          </p>
        </footer>
      </>
    </ThemeProvider>
  );
}
export default App;
