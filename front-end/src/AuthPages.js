import React from 'react';
import './App.css';
// import Login from './Landing'
// import LoginUser from './Components/LoginUser'
// import SignUp from './Components/SignUp'
import Nav from './Components/Nav';
import Feed from './Feed';
import Albums from './Albums';
import Workspace from './Workspace';

import { Switch, Route } from 'react-router-dom';

function AuthPages() {
  return (
    <div>

      <Nav />
      <Switch>
        <Route path="/Albums" exact component={Albums} />
        <Route path="/Feed" exact component={Feed} />
        <Route path="/Workspace" exact component={Workspace} />
      </Switch>

    </div>
  );
}

export default AuthPages;
