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

  const handleAlbumsUser = () => {
    return <Albums
      currentUser={props.currentUser}
      handleAlbumsFormSubmit={props.handleAlbumsFormSubmit}
      addAlbum={props.addAlbum}
      handleAlbumsInputChange={props.handleAlbumsInputChange} />
  }

  const handleFeedUser = () => {
    return <Feed currentUser={props.currentUser} />
  }

  const handleWorkspaceUser = () => {
    return <Workspace currentUser={props.currentUser} />
  }

  return (
    <div>

      <Nav />
      <Switch>
        <Route path="/albums" exact render={handleAlbumsUser} />
        <Route path="/feed" exact render={handleFeedUser} />
        <Route path="/workspace" exact render={handleWorkspaceUser} />
      </Switch>

    </div>
  );
}

export default AuthPages;
