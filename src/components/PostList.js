import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, removePost } from '../actions';
import './PostList.css';
import { Post } from './Post';

class PostList extends Component {
  state = {
    posts: addPostNumber(this.props.posts)
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="PostList">
        {posts.map(post => <Post key={post.id} post={post} />) }
      </div>
    )
  }
}

function addPostNumber(posts) {
  let count = 0;
  const withNumbers = posts.map(post => {
    post.number = count += 1;
    return post;
  });

  return withNumbers;
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
)(PostList)
