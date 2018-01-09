import React, { Component } from 'react';
import './Post.css';

export default class PostSubmit extends Component {

  state = {
    title: '',
    url: '',
    text: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form className="PostSubmit" onSubmit={this.handleSubmit} >
        <fieldset>

          <label>title</label>
          <input name="title"
                 type="text"
                 value={this.state.title}
                 onChange={this.handleChange} />
          <br/>

          <label>url</label>
          <input name="url"
                 type="text"
                 value={this.state.url}
                 onChange={this.handleChange} />
          <br/>

          <p><strong>or</strong></p>

          <div className="PostSubmit-text">
            <label>text</label>
            <textarea name="text"
                      value={this.state.text}
                      onChange={this.handleChange} />
            <br/>
          </div>
        </fieldset>
        <input className="PostSubmit-button" type="submit" value="submit" />
      </form>
    )
  }
}
