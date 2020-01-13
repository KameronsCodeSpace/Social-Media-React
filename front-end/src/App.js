import React, { Component } from 'react';
import './App.css';
import Landing from './Landing'
import LoginUser from './Components/LoginUser'
import SignUp from './Components/SignUp'
import AuthPages from './AuthPages';

import axios from 'axios'


import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.initialState = {
      currentUser: '',
      userLoggedIn: false,
      email: '',
      password: '',
      error: false,
      errorMsg: 'Wrong Creds'
    }
    this.state = this.initialState
  }

  renderLoginComponent = () => {
    return <LoginUser
      loginUser={this.loginUser}
      handleEmail={this.handleEmail}
      handlePassword={this.handlePassword}
      userLoggedIn={this.state.userLoggedIn}

      email={this.state.email}
      password={this.state.password}
      error={this.state.error}
      errorMsg={this.state.errorMsg}
    />
  }

  renderSignupComponent = () => {
    return <SignUp
      signUpUser={this.signUpUser}
      handleEmail={this.handleEmail}
      handlePassword={this.handlePassword}
      userLoggedIn={this.state.userLoggedIn}

      email={this.state.email}
      password={this.state.password}
      error={this.state.error}
      errorMsg={this.state.errorMsg}
    />
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  loginUser = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(`http://localhost:3001/auth/login`,
        {
          email: this.state.email,
          password: this.state.password
        });
      this.setState(() => ({
        currentUser: response.data.user,
        userLoggedIn: true
      }))
    } catch (error) {
      console.log('error =>', error.response.data)
      ;
      this.setState(() => ({
        error: true,
        errorMsg: error.response.data.message
      }))
    }
    console.log('Current User', this.state.currentUser)
  }


  signUpUser = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(`http://localhost:3001/auth/signup`,
        {
          email: this.state.email,
          password: this.state.password
        });
      this.setState(() => ({
        currentUser: response.data.user,
        userLoggedIn: true
      }))
    } catch (error) {
      console.log('error =>', error.response.data)
      ;
      this.setState(() => ({
        error: true,
        errorMsg: error.response.data.message

      }))
    }
    console.log('User', this.state.currentUser)
  }

  renderAuthComponents = () => {
    return <AuthPages
      currentUser={this.state.currentUser}
      userLoggedIn={this.state.userLoggedIn}
    />
  }

  render() {

    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/loginuser" exact render={this.renderLoginComponent} />
          <Route path="/signup" exact render={this.renderSignupComponent} />
          <Route path="/" render={this.renderAuthComponents} />
        </Switch>
      </div>

    );
  }
}

export default App;