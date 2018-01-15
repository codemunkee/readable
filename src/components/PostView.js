import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostView extends Component {
  render()  {
    const postID = this.props.match.params.id;
    const post = this.props.posts[postID];
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  }
}

function mapStateToProps (posts) {
  return posts;
}

export default connect(
  mapStateToProps,
)(PostView)
