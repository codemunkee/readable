import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AppTitle from '../AppTitle/';
import AppMenu from '../AppMenu/';
import CategoryLinks from '../CategoryLinks/';
import CategoryView from '../CategoryView/';
import PostList from '../PostList/';
import PostView from '../PostView/';
import PostSubmit from '../PostSubmit/';
import PostEdit from '../PostEdit/';
import CommentEdit from '../CommentEdit/';

function App() {
  return (
    <div className="App">

      { /* The Main Landing Page */ }

      <Route
        path="/"
        exact
        render={() => (
          <div className="App-main">
            <header className="App-header">
              <AppTitle name="Readable" />
              <AppMenu />
              <CategoryLinks />
            </header>
            <div className="App-body">
              <PostList />
            </div>
          </div>
        )}
      />

      { /* View a Post */ }

      <Route
        path="/:category/:id"
        exact
        render={props => (
          <div className="App-main">
            <header className="App-header">
              <AppTitle name="Readable" />
            </header>
            <div className="App-body">
              <PostView {...props} />
            </div>
          </div>
        )}
      />

      { /* View a Category of Posts */ }

      <Route
        path="/:category(react|redux|udacity)/"
        exact
        render={props => (
          <div className="App-main">
            <header className="App-header">
              <AppTitle name="Readable" />
              <AppMenu />
              <CategoryLinks {...props} />
            </header>
            <div className="App-body">
              <CategoryView {...props} />
            </div>
          </div>
        )}
      />

      { /* Submit a New Post */ }

      <Route
        path="/submit"
        exact
        render={() => (
          <div className="App-submit">
            <header className="App-header">
              <AppTitle name="Submit" />
            </header>
            <div className="App-body">
              <PostSubmit />
            </div>
          </div>
        )}
      />

      { /* Edit an existing Post */ }

      <Route
        path="/:category/:id/edit"
        exact
        render={props => (
          <div className="App-submit">
            <header className="App-header">
              <AppTitle name="Edit Post" />
            </header>
            <div className="App-body">
              <PostEdit {...props} />
            </div>
          </div>
        )}
      />

      { /* Edit an existing Comment */ }

      <Route
        path="/:category/:postid/comment/:commentid/edit"
        exact
        render={props => (
          <div className="App-submit">
            <header className="App-header">
              <AppTitle name="Edit Comment" />
            </header>
            <div className="App-body">
              <CommentEdit {...props} />
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default App;
