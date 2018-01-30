import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { putPost, fetchPosts } from '../../actions';
import './PostEdit.css';

class PostEdit extends Component {
  state = {
    id: '',
    title: '',
    body: '',
    category: '',
    fireRedirect: false,
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps() {
    const post = this.props.posts.items[this.props.match.params.id];
    if (post) {
      this.setState({
        id: post.id,
        title: post.title,
        body: post.body,
        category: post.category,
      });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // eslint-disable-next-line no-use-before-define
    mapStateToProps(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editPost({
      id: this.state.id,
      title: this.state.title,
      category: this.state.category,
      body: this.state.body,
    });
    this.setState({ fireRedirect: true });
  }

  render() {
    const categories = this.props.categories.items;
    const post = this.props.posts.items[this.props.match.params.id];
    return (
      <div>
        { this.props.posts.isFetching &&
          this.props.categories.isFetching &&
          <h2>Fetching Post Info</h2> }

        { !this.props.posts.isFetching &&
          !this.props.categories.isFetching &&
          !post &&
          <h2>Post not found :(</h2> }

        { !this.props.posts.isFetching &&
          !this.props.categories.isFetching &&
          post &&
          <div>
            <form className="PostEdit" onSubmit={this.handleSubmit} >
              <fieldset>
                <label htmlFor="title" className="PostEdit-title">
                  <span>title</span>
                  <input
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="category">
                  <span>category</span>
                  <select name="category" value={post.category} onChange={this.handleChange}>
                    { categories.map(category => (
                      <option
                        key={category.name}
                        value={category.name}
                      >
                        {category.name}
                      </option>))
                    }
                  </select>
                </label>

                <div className="PostEdit-text">
                  <label htmlFor="body">
                    <span>body</span>
                    <textarea
                      name="body"
                      value={this.state.body}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
              </fieldset>
              <button
                className="PostEdit-button"
                type="submit"
                value="submit"
              >Update Post
              </button>
            </form>
            {this.state.fireRedirect && (
              <Redirect
                to={`/post/${post.id}`}
              />
            )}
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    editPost: data => dispatch(putPost(data)),
    fetchPosts: () => dispatch(fetchPosts()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostEdit);
