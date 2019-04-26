import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Login from "./components/Login";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </div>
  );
};

class App extends Component {
  state = {
    loggedIn: false
  };

  handleLogin = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route
            path="/login"
            exact
            render={() => <Login handleLogin={this.handleLogin} />}
          />
          <PrivateRoute
            exact
            path="/user"
            loggedIn={this.state.loggedIn}
            component={User}
          />
        </Switch>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component,loggedIn, ...rest }) => {
  console.log(rest);
  return (
    <Route
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default App;
