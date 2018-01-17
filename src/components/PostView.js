import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconArrowUp from './IconArrowUp.svg';
import IconArrowDown from './IconArrowDown.svg';
import './PostView.css';

class PostView extends Component {
  render()  {
    console.log('PROPS', this.props)
    const postID = this.props.match.params.id;
    const post = this.props.posts[postID];
    if (!post) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      return (
        <div className="PostView">
          <div className="PostView-title">
            <span>
              <img src={IconArrowUp} className="PostInfo-logo" alt="arrow up" onClick={this.handleUpVote}/>
              <img src={IconArrowDown} className="PostInfo-logo" alt="arrow down" onClick={this.handleDownVote} />
              {post.title}
            </span>
            <div className="PostView-subtitle">
              <span>{post.voteScore} votes by poster 2 minutes ago | <span onClick={this.handleRemove}>remove</span></span>
            </div>
          </div>
          <div className="PostView-body">
            <p>
              {post.body}
            </p>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps (posts) {
  return posts;
}

export default connect(
  mapStateToProps,
)(PostView)
