import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import './Post.css';

class PostSubmit extends Component {

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
    this.props.addPost({'title': this.state.title})
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

function mapStateToProps (state) {
  return {'posts': state.posts };
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(addPost(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSubmit)
