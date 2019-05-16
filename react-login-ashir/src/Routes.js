import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';


const Dashboard = (props) => {
  
  const check = localStorage.getItem('currentUser');
  if(!check){ 
    props.history.push('/');
  }
  return ( 
    <div>
      This is dashboard page
    </div>
  )
}
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/admindashboard" exact component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}


export default Router