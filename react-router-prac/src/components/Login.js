import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  isPassValid = () => {
    const { password } = this.state;
    if (password.length < 5) {
      return false;
    } else {
      return true;
    }
  };

  isFormValid = () => {
    const { username, password } = this.state;

    if (this.isPassValid()) {
      return username && password;
    } else {
      return false;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.props.handleLogin();
      console.log(this.props)
    } else {
      console.log("Enter Valid Data");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <br />
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />

          <button type="submit"> Login </button>
        </form>
      </div>
    );
  }
}

export default Login;
