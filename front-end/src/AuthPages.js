import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Feed from './Feed';
import MyPosts from './MyPosts';
import Albums from './Albums';
import Workspace from './Workspace';
import AdminPosts from './'

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

  const handleMyPostsUser = () => {
    return <MyPosts
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

      <Nav currentUser={props.currentUser} signOut={() => props.signOut()} />
      <Switch>
        <Route path="/albums" exact render={handleAlbumsUser} />
        <Route path="/feed" exact render={handleFeedUser} />
        {/* <Route path="/myposts" exact render={handleMyPostsUser} /> */}
        <Route path="/myposts/:userID" render={({ match }) => <MyPosts match={match} currentUser={props.currentUser} isAuthenticated={props.isAuthenticated}/>} />
        <Route path="/workspace" exact render={handleWorkspaceUser} />
      </Switch>

    </div>
  );
}

export default AuthPages;
