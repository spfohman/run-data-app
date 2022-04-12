import React, { useState } from "react";

function Login({ setUser, errors }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      }
    });
  }

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

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
