import React from 'react';
import './App.css';
import Login from './Landing'
import LoginUser from './Components/LoginUser'
import SignUp from './Components/SignUp'
import Nav from './Components/Nav';
import Feed from './Feed';
import Albums from './Albums';
import Workspace from './Workspace';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function AuthPages() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Nav />
          <Route path="/Feed" component={Feed} />
          <Route path="/Albums" component={Albums} />
          <Route path="/Workspace" component={Workspace} />
        </Switch>

      </div>
    </Router>

  );
}

export default AuthPages;
