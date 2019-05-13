import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form class="login100-form validate-form">
          <span class="login100-form-title p-b-33">Account Login</span>

          <div class="wrap-input100 validate-input">
            <input
              class="input100"
              type="text"
              name="email"
              placeholder="Email"
            />
            <span class="focus-input100-1" />
            <span class="focus-input100-2" />
          </div>

          <div class="wrap-input100 rs1 validate-input">
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="Password"
            />
            <span class="focus-input100-1" />
            <span class="focus-input100-2" />
          </div>

          <div class="container-login100-form-btn m-t-20">
            <button class="login100-form-btn">Sign in</button>
          </div>

          <div class="text-center p-t-45 p-b-4">
            <span class="txt1">Forgot</span>

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
    );
  }
}
