import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconArrowUp from './IconArrowUp.svg';
import IconArrowDown from './IconArrowDown.svg';
import CommentList from './CommentList';
import { incrementPostVotes, decrementPostVotes, deletePost } from '../actions';
import './PostView.css';

class PostView extends Component {
  state = {
    postID: this.props.match.params.id
  }

  handleUpVote = data => {
    console.log(this.props);
    this.props.upVote(this.state.postID);
  }

  handleDownVote = data => {
    this.props.downVote(this.state.postID);
  }

  handleRemove = data => {
    this.props.removePost(this.state.postID);
  }

  render()  {
    if (this.props.posts.isFetching) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      const postID = this.props.match.params.id;
      const post = this.props.posts.items[postID];
      return (
        <div className="PostView">
          <div className="PostView-title">
            <span>
              <img src={IconArrowUp}
                   className="PostInfo-logo"
                   alt="arrow up"
                   onClick={this.handleUpVote}/>
              <img src={IconArrowDown}
                   className="PostInfo-logo"
                   alt="arrow down"
                   onClick={this.handleDownVote} />
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
          <div>
            <hr/>
            <CommentList postID={postID} />
          </div>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: postID => dispatch(incrementPostVotes(postID)),
    downVote: postID => dispatch(decrementPostVotes(postID)),
    removePost: postID => dispatch(deletePost(postID))
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostView)
