import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPost, fetchPosts } from '../actions';
import './PostSubmit.css';

class PostEdit extends Component {

  state = {
    title: '',
    body: '',
    category: ''
  }

  componentWillReceiveProps(newProps) {
    console.log('New Props')
    const post = this.props.posts.items[this.props.match.params.id];
    if (post) {
      this.setState({title: post.title,
                     body: post.body,
                     category: post.category})
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
    mapStateToProps(this.state)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost({'title': this.state.title,
                        'category': this.state.category,
                        'body': this.state.body})
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
        <form className="PostSubmit" onSubmit={this.handleSubmit} >
          <fieldset>

            <label>title</label>
            <input name="title"
                   type="text"
                   value={this.state.title}
                   onChange={this.handleChange} />
            <br/>

            <label>category</label>
            <select name="category" onChange={this.handleChange}>
            { categories.map(category =>
              <option key={category.name}
                      value={category.name}>
                      {category.name}
              </option>)
            }
            </select>

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
      }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(postPost(data)),
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit)
