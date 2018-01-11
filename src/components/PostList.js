import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PostList.css';
import Post from './Post';

class PostList extends Component {

  render() {
    const { posts } = this.props;
    return (
      <div className="PostList">
        { posts.map(post => <Post key={post.id} post={post} />) }
      </div>
    )
  }
}

function addPostNumber(posts) {
  // we add a property with a sort number to each post as well as their id,
  // the former is just a convenience thing, the latter is because the posts
  // are returned in an array (to ensure order)
  let count = 1;
  return Object.keys(posts).map(postId => {
    const newPost = { ...posts[postId], 'id': postId, 'number': count++}
    return newPost;
  })
}

function mapStateToProps ({posts}) {
  return {'posts': addPostNumber(posts) };
}

export default connect(
  mapStateToProps,
)(PostList)
