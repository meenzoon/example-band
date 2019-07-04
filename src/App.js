import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.css';
import Header from './components/header/Header'
import SignIn from './containers/user/SignIn'
import SignUp from './containers/user/SignUp'

const history = createBrowserHistory();

class App extends Component {
  render(){
    return (
      <Router history={history}>
        <Header/>
          <Route path="/auth/login" component={SignIn} />
          <Route path="/auth/register" component={SignUp} />
        </Router>
    );
  }
}

export default App;
