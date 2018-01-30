import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { postPost } from '../../actions';
import './PostSubmit.css';

class PostSubmit extends Component {
  state = {
    title: '',
    body: '',
    category: '',
    author: '',
    fireRedirect: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPost({
      title: this.state.title,
      category: this.state.category,
      body: this.state.body,
      author: this.state.author,
    });
    this.setState({ fireRedirect: true });
  }

  render() {
    return (
      <div>
        <form className="PostSubmit" onSubmit={this.handleSubmit} >
          <fieldset>

            <label htmlFor="title">
              <span>title</span>
              <input
                className="PostSubmit-title"
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="category">
              <span>category</span>
              <select name="category" onChange={this.handleChange}>
                { this.props.categories.map(category => (
                  <option
                    key={category.name}
                    value={category.name}
                  >
                    {category.name}
                  </option>))
                }
              </select>
            </label>

            <div className="PostSubmit-text">
              <label htmlFor="body">
                <span>body</span>
                <textarea
                  name="body"
                  value={this.state.body}
                  onChange={this.handleChange}
                />
              </label>
              <br />
            </div>

            <label className="PostSubmit-author" htmlFor="author">
              <span>author</span>
              <input
                name="author"
                type="text"
                value={this.state.author}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <button
            className="PostSubmit-button"
            type="submit"
            value="submit"
          >Submit Post
          </button>
        </form>
        {this.state.fireRedirect && (
        <Redirect to="/" />
      )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories.items };
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: data => dispatch(postPost(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostSubmit);
