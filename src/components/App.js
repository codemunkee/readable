import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import AppTitle from './AppTitle';
import PostList from './PostList';
import PostSubmit from './PostSubmit';

class App extends Component {

  render() {
    return (
      <div className="App">

        { /* The Main Landing Page */ }

        <Route path="/" exact render={() => (
          <div className="App-main">
            <header className="App-header">
              <AppTitle name="Readable"/>
              <span className="App-menu">
                <Link to="/submit">submit</Link> | sort
              </span>
            </header>
            <div className="App-body">
              <PostList/>
            </div>
          </div>
        )} />

        <Route path="/submit" exact render={() => (
          <div className="App-submit">
            <header className="App-header">
              <AppTitle name="Submit"/>
            </header>
            <div className="App-body">
              <PostSubmit/>
            </div>
          </div>
        )} />

      </div>

    );
  }
}

export default App;
