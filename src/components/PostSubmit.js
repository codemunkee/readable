import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPost } from '../actions';
import './PostSubmit.css';

class PostSubmit extends Component {

  state = {
    title: '',
    body: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost({'title': this.state.title,
                        'body': this.state.body})
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

          <div className="PostSubmit-text">
            <label>body</label>
            <textarea name="body"
                      value={this.state.body}
                      onChange={this.handleChange} />
            <br/>
          </div>
        </fieldset>
        <button className="PostSubmit-button" type="submit" value="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {'posts': state.posts };
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(postPost(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSubmit)
