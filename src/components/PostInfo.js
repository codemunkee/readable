import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import IconArrowUp from './IconArrowUp.svg';
import IconArrowDown from './IconArrowDown.svg';
import { connect } from 'react-redux';
import { incrementPostVotes, decrementPostVotes, deletePost } from '../actions';
import './PostInfo.css';


class PostInfo extends Component {
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
    const { id, number, title, author,
            timestamp, voteScore, commentCount } = this.props.post;
    const humanTime = new Date(timestamp).toLocaleString('en-US');
    return (
      <div className="PostInfo">
        <div className="PostInfo-line-one">
          <span className="PostInfo-number">{number}.
            <img src={IconArrowUp} className="PostInfo-logo" alt="arrow up" onClick={this.handleUpVote}/>
            <img src={IconArrowDown} className="PostInfo-logo" alt="arrow down" onClick={this.handleDownVote} />
          </span>
          <span>
            <Link to={'/post/' + id}>{title}</Link>
          </span>
        </div>
        <div className="PostInfo-line-two">
          <span>{voteScore} votes | {commentCount} comments | by {author} {humanTime} |&nbsp;
            <Link to={'/post/' + id + '/edit'}>edit</Link>
             &nbsp;|&nbsp;
            <a role="button" onClick={this.handleRemove}>remove</a>
          </span>
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
)(PostInfo)
