import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
 } from "react-router-dom";
 import NavBar from "./layout/NavBar";
 import Reorder from "./pages/Reorder"
 import Home from './layout/Home';
 import Login from './layout/Login';


class App extends Component {
  render() {
    let isAuthorized = sessionStorage.getItem("isAuthorized");
    return (
      <Router>
        <NavBar/>
          <Switch>
              <Route exact path="/reorder" component={Reorder} />
              <Route exact path={["/","/home"]} component={Home} /> 
              {/* <Route exact path={["/login", "/login/:email","/logout"]} component={Login} /> */}
              <>
                {!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/" />}
                <Route exact path={["/login"]} component={Login} />
              </>
              {/* <Route exact path={["/"]} component={Logout} /> */}
          </Switch>
      </Router>

    );
  }
}

export default App;