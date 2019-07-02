import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.css';
import Header from './components/header/Header'
import signIn from './containers/user/signIn'
import signUp from './containers/user/signUp'

const history = createBrowserHistory();

class App extends Component {
  render(){
    return (
      <Router history={history}>
        <Header/>
          <Route path="/auth/login" component={signIn} />
          <Route path="/auth/register" component={signUp} />
        </Router>
    );
  }
}

export default App;
