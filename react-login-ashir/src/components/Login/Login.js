import React, { Component } from "react";
import Input from "../Input/Input";

export default class Login extends Component {
  state = {
    users: [
      { id: 0, name: "admin", pass: "admin" },
      { id: 1, name: "umair", pass: "ahmed" },
      { id: 2, name: "aamir", pass: "pinger" }
    ],

    isAuth: false,
    currentUser: null,
    errors: {
      hasError: false,
      errorObj: {
       
      }
    },
    username: "",
    pass: ""
  };

  onSubmit = ev => {
    ev.preventDefault();

    const {users, isAuth, currentUser, errors, username, pass} = this.state

    
  };

  render() {
    const { username, errors, pass } = this.state;

    console.log(errors.errorObj["username"]);
    return (
      <div>
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
              <form
                class="login100-form validate-form"
                onSubmit={ev => this.onSubmit(ev)}
              >
                <span class="login100-form-title p-b-33">Account Login</span>

                <Input
                  type="text"
                  classes="input100"
                  value={username}
                  name="username"
                  id="username"
                  label="Username"
                  placeholder="Enter the username"
                  onChange={ev =>
                    this.setState({ [ev.target.name]: ev.target.value })
                  }
                  errors={errors}
                />

                {errors && errors.errorObj["username"] && (
                  <div className="ml-4">
                    <p className="text-danger font-weight-bold">
                      {errors.errorObj["username"].message}
                    </p>
                  </div>
                )}

                <Input
                  type="password"
                  classes="input100"
                  value={pass}
                  name="pass"
                  label="Password"
                  id="pass"
                  placeholder="Enter the Password"
                  onChange={ev =>
                    this.setState({ [ev.target.name]: ev.target.value })
                  }
                  errors={errors}
                />

                {errors && errors.errorObj["password"] && (
                  <div className="ml-4">
                    <p className="text-danger font-weight-bold">
                      {errors.errorObj["password"].message}
                    </p>

                    <br />
                  </div>
                )}

                <Input
                  type="submit"
                  value="Login"
                  classes="login100-form-btn"
                />

                <div class="text-center p-t-45 p-b-4">
                  <span class="txt1"> Forgot </span>

                  <a href="#" class="txt2 hov1">
                    Username / Password?
                  </a>
                </div>

                <div class="text-center">
                  <span class="txt1">Create an account?</span>

                  <a href="#" class="txt2 hov1">
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
