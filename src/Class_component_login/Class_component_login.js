import React, { Component } from "react";
import "./Class_component_login.css";
import userdata from "./userdata.json";
import Function from "./Function";

class Class_component_login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //email: "",
      password: "",
      username: "",
      loggedInUser: null,
      errorMsg: "",
    };
  }
  checkData = () => {
    // const { email, password } = this.state;
    const { username, password } = this.state;
    // const data = userdata.find((e) => e.email === email);
    const data = userdata.find((e) => e.username === username);
    if (data) {
      if (data.password === password) {
        this.setState({ errorMsg: "", loggedInUser: data });
      } else {
        this.setState({ errorMsg: "User password invaild." });
      }
    } else {
      this.setState({ errorMsg: "User not found." });
    }
  };
  render() {
    const { username, password, errorMsg, loggedInUser } = this.state;
    return (
      <div>
        <form id="main">
          <h2>Login to your account</h2>
          <div className="input-parent">
            {/* <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />*/}

            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              onChange={(e) => this.setState({ username: e.target.value })}
              value={username}
            />
          </div>
          <div className="input-parent">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              onChange={(e) => this.setState({ password: e.target.value })}
              value={password}
            />
          </div>
          <p id="incorrect">{errorMsg}</p>
          <button type="button" onClick={this.checkData}>
            Login
          </button>
        </form>

        {loggedInUser && !errorMsg && (
          <Function loggedInUser={loggedInUser}></Function>
        )}
      </div>
    );
  }
}

export default Class_component_login;
