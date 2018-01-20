import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import AppTitle from './AppTitle';
import CategoryLinks from './CategoryLinks';
import CategoryView from './CategoryView';
import PostList from './PostList';
import PostView from './PostView';
import PostSubmit from './PostSubmit';
import PostEdit from './PostEdit';

class App extends Component {

  render() {
    return (
      <div className="App">

        { /* The Main Landing Page */ }

        <Route path="/" exact render={() => (
          <div className="App-main">
            <header className="App-header">
              <AppTitle name="Readable"/>
              <div className="App-menu">
                <Link to="/submit">submit</Link> | sort
              </div>
              <CategoryLinks />
            </header>
            <div className="App-body">
              <PostList/>
            </div>
          </div>
        )} />

        { /* View a Post */ }

        <Route path="/post/:id" exact render={props => (
          <div className="App-main">
            <header className="App-header">
              <AppTitle name="Readable"/>
              <span className="App-menu">
                <Link to="/submit">submit</Link> | sort
              </span>
            </header>
            <div className="App-body">
              <PostView {...props}/>
            </div>
          </div>
        )} />

        { /* View a Category of Posts */ }

        <Route path="/category/:id" render={props => (
          <div className="App-main">
            <header className="App-header">
              <AppTitle name="Readable"/>
              <span className="App-menu">
                <Link to="/submit">submit</Link> | sort
              </span>
              <CategoryLinks />
            </header>
            <div className="App-body">
              <CategoryView {...props}/>
            </div>
          </div>
        )} />

        { /* Submit a New Post */ }

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

        { /* Edit an existing Post */ }

        <Route path="/post/:id/edit" exact render={() => (
          <div className="App-submit">
            <header className="App-header">
              <AppTitle name="Edit Post"/>
            </header>
            <div className="App-body">
              <PostEdit/>
            </div>
          </div>
        )} />


      </div>

    );
  }
}

export default App;
