import React from 'react';
import './App.css';
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import { connect } from "react-redux"
import Home from './components/home'
import Login from './containers/loginForm'

import history from "./helpers/history"

function App() {
  return (
    <div className="App h-screen flex justify-center items-center bg-gray-200">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App);
