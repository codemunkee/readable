import React, { Component } from 'react';
import './App.css';
import IconR from './IconR.svg';
import PostList from './PostList';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={IconR} alt="icon" />
          <span className="App-title">
            Readable
          </span>
          <span className="App-menu">
            submit | sort
          </span>
        </header>
        <div className="App-body">
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
