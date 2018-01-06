import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost, removePost } from '../actions'
import './PostList.css';

class PostList extends Component {
  state = {
    posts: this.props.posts
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="PostList">
        {posts.map(post => <p key={post.id}>{post.name}</p>)}
      </div>
    )
  }
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
