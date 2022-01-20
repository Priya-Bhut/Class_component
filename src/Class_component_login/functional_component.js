import React, { useState } from "react";
import "./Class_component_login.css";
import userdata from "./userdata.json";
import Function from "./Function";

function functional_component_login() {
  const [username, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLogginUser] = useState(null);
  const [errorMsg, setError] = useState("");

  const checkData = () => {
    const data = userdata.find((e) => e.username === username);
    if (data) {
      if (data.password === password) {
        setError(null);
        setLogginUser(data);
      } else {
        setError("User password Invalid");
      }
    } else {
      setError("User not found");
    }
  };
  return (
    <div>
      <form id="main">
        <h2>Login to your account</h2>

        <div className="input-parent">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            onChange={(e) => setUname(e.target.value)}
            value={username}
          />
        </div>

        <div className="input-parent">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <p id="incorrect">{errorMsg}</p>
        <button type="button" onClick={checkData}>
          Login
        </button>
      </form>

      {loggedInUser && !errorMsg && (
        <Function loggedInUser={loggedInUser}></Function>
      )}
    </div>
  );
}

export default Class_component_login;
