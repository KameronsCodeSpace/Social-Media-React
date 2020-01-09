import React from 'react';
import './App.css';
import Landing from './Landing'
import LoginUser from './Components/LoginUser'
import SignUp from './Components/SignUp'
import AuthPages from './AuthPages';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/LoginUser" exact component={LoginUser} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/" component={AuthPages} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
