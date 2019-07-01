import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Fragment>
    );
  }
}

export default App;
