import React, { Component } from 'react';
import IconArrowUp from './IconArrowUp.svg';
import IconArrowDown from './IconArrowDown.svg';
import { connect } from 'react-redux';
import { incrementPostVotes, decrementPostVotes, deletePost } from '../actions';
import './Post.css';


class Post extends Component {
  handleUpVote = data => {
    this.props.upVote(this.props.post.id);
  }

  handleDownVote = data => {
    this.props.downVote(this.props.post.id);
  }

  handleRemove = data => {
    this.props.removePost(this.props.post.id);
  }

  render() {
    const { number, title, voteScore } = this.props.post;
    return (
      <div className="Post">
        <div className="Post-line-one">
          <span className="Post-number">{number}.
            <img src={IconArrowUp} className="Post-logo" alt="arrow up" onClick={this.handleUpVote}/>
            <img src={IconArrowDown} className="Post-logo" alt="arrow down" onClick={this.handleDownVote} />
          </span>
          <span>
            {title}
          </span>
        </div>
        <div className="Post-line-two">
          <span>{voteScore} votes by poster 2 minutes ago | <span onClick={this.handleRemove}>remove</span> | discuss</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {state};
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: postID => dispatch(incrementPostVotes(postID)),
    downVote: postID => dispatch(decrementPostVotes(postID)),
    removePost: postID => dispatch(deletePost(postID))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
