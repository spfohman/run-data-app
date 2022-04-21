import React, { useState } from "react";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [signupErrors, setSignupErrors] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      } else {
        response.json().then((errors) => {
          setSignupErrors(errors.errors);
        });
      }
    });
  }
  const errorPs = signupErrors.map((e) => <p className="errors">{e}</p>);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
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
        <input
          type="password"
          name="password"
          value={passwordConfirmation}
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br></br>
        {/* {signupErrors.length > 0 && (
          <ul style={{ color: "red" }}>
            {signupErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )} */}
        {errorPs}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;
