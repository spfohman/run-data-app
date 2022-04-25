import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setUser(data);
        } else {
          console.log(data.errors);
          setLoginErrors(data.errors);
        }
      });
  }
  const errorPs = loginErrors.map((e) => <p className="errors">{e}</p>);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        {/* {loginErrors.length > 0 && (
          <ul style={{ color: "red" }}>
            {loginErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )} */}
        {errorPs}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
