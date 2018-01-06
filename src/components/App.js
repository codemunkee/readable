import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost, removePost } from '../actions'
import './App.css';

class App extends Component {

  state = {
  }

  render() {
    console.log(this);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Readable</h1>
        </header>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {'posts': state.posts };
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(addPost(data)),
    removePost: (data) => dispatch(removePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
