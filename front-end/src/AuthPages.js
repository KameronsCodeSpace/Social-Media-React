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

const AuthPages = (props) => {

  console.log('More Checking', props.signOut)

  const handleAlbumsUser = () => {
    return <Albums 
    currentUser={props.currentUser} />
  }

  const handleFeedUser = () => {
    return <Feed currentUser={props.currentUser} />
  }

  const handleWorkspaceUser = () => {
    return <Workspace currentUser={props.currentUser} />
  }

  const handleSignOut = () => {
    return <Nav signOut={props.signOut} />
  }

  return (
    <div>

      <Nav signOut={() => props.signOut()} />
      <Switch>
        <Route path="/albums" exact render={handleAlbumsUser} />
        <Route path="/feed" exact render={handleFeedUser} />
        <Route path="/workspace" exact render={handleWorkspaceUser} />
      </Switch>

    </div>
  );
}

export default AuthPages;
