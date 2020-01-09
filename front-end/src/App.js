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
      email: '',
      password: ''
    }
    this.state = this.initialState
  }

  renderLoginComponent = () => {
    return <LoginUser loginUser={this.loginUser} />
  }

  renderSignupComponent = () => {
    return <SignUp
      signUpUser={this.signUpUser}
      handleEmail={this.handleEmail}
      handlePassword={this.handlePassword}
      email={this.state.email}
      password={this.state.password} />
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

  signUpUser = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(`http://localhost:3001/auth/signup`,
        {
          email: this.state.email,
          password: this.state.password
        });
      this.setState({
        currentUser: response.data.data,
      })
    } catch (error) {
      console.error(error)

      // const $errorMessage = $('#errorMessage');
      // $errorMessage.text(error.responseJSON.message);
      // $errorMessage.show();
    }
    console.log('User', this.user)
  }



  //   signup = () => {
  //     console.log('User', this.user)
  //     const API_URL = this.getHostURL();
  //     const AUTH_URL = `${API_URL}/auth`;

  //     return get.post(`${AUTH_URL}/signup`, user)
  // }

  // getHostURL = () => {
  //   if (window.location.host.indexOf('localhost') !== -1) {
  //       return 'http://localhost:3001';
  //   } else {
  //       return 'https://collage-entourage.com';
  //   }
  // }

  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/LoginUser" exact render={this.renderLoginComponent} />
            <Route path="/SignUp" exact render={this.renderSignupComponent} />
            <Route path="/" component={AuthPages} />
          </Switch>
        </div>

    );
  }
}

export default App;
