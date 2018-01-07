import React, { Component } from 'react';
import './Post.css';

export default class PostSubmit extends Component {
  render() {
    return (
      <form className="PostSubmit">
        <fieldset>
          <label>title</label><input type="text"></input><br />
          <label>url</label><input type="text"></input><br />
          <p><strong>or</strong></p>
          <div className="PostSubmit-text">
            <label>text</label>
            <textarea></textarea><br />
          </div>
        </fieldset>
        <button type="button">submit</button>
      </form>
    )
  }
}
