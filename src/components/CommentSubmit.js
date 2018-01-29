import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComment, fetchPosts } from '../actions';
import './CommentSubmit.css';

class CommentSubmit extends Component {
  state = {
    body: '',
    author: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addComment({
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.postID,
    });
    // we do this to update the comment count listed on posts
    // which is handled on the backend
    this.props.fetchPosts();
  }

  render() {
    return (
      <form className="CommentSubmit" onSubmit={this.handleSubmit} >
        <fieldset>
          <div className="CommentSubmit-text">
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <label htmlFor="author">
            <span>author</span>
            <input
              name="author"
              type="text"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </label>
          <button
            className="CommentSubmit-button"
            type="submit"
            value="submit"
          >
            add comment
          </button>
        </fieldset>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: data => dispatch(postComment(data)),
    fetchPosts: () => dispatch(fetchPosts()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentSubmit);
