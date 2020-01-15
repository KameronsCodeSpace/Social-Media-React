import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Feed from './Feed';
import Albums from './Albums';
import Workspace from './Workspace';

import { Switch, Route } from 'react-router-dom';

const AuthPages = (props) => {

  console.log('More Checking', props.signOut)

  const handleAlbumsUser = () => {
    return <Albums
      currentUser={props.currentUser}
      isAuthenticated={props.isAuthenticated}
      />
  }

  const handleFeedUser = () => {
    return <Feed
      currentUser={props.currentUser}
      isAuthenticated={props.isAuthenticated}
      />
  }

  const handleWorkspaceUser = () => {
    return <Workspace
      currentUser={props.currentUser}
      isAuthenticated={props.isAuthenticated}
      />
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
