import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
 import NavBar from "./layout/NavBar";
 import Reorder from "./pages/Reorder"
 import Home from './layout/Home';
 import Login from './layout/Login';




class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
          <Switch>
              <Route exact path="/reorder" component={Reorder} />
              <Route exact path={["/","/home"]} component={Home} /> 
              <Route exact path={["/login", "/login/:email","/logout"]} component={Login} />
          </Switch>
      </Router>

    );
  }
}

export default App;