import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PostList.css';
import PostInfo from './PostInfo';
import { fetchPosts } from '../actions';


class PostList extends Component {

  render() {
    const { items } = this.props.posts

    if (this.props.posts.isFetching) {
      return (<h1>Fetching</h1>)
    } else {
      const numberedPosts = addPostNumber(items);
      return (
        <div className="PostList">
          { numberedPosts.map(post => <PostInfo key={post.id} post={post} />) }
        </div>
      )
    }
  }
}

function addPostNumber(posts) {
  // we add a property with a sort number to each post as
  // just a convenience thing
  let count = 1;
  return Object.keys(posts).map(postId => {
    const newPost = { ...posts[postId], 'number': count++}
    return newPost;
  })
}

function mapStateToProps(state) {
  //return {'posts': addPostNumber(posts) };
  console.log(state);
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
