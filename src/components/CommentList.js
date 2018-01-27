import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, deleteComment, incrementCommentVotes, decrementCommentVotes } from '../actions';
import { Link } from 'react-router-dom';
import IconArrowUp from './IconArrowUp.svg';
import IconArrowDown from './IconArrowDown.svg';
import './CommentList.css';

class CommentList extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.postID);
  }

  composeComments() {
    // parse comments so that they're more easily presented in the view
    let comments = Object.keys(this.props.comments.items).map(commentID =>
      this.props.comments.items[commentID])
    return comments;
  }

  handleRemove(commentID) {
    this.props.removeComment(commentID);
  }

  handleVote(commentID, voteType) {
    if (voteType === 'increment') {
      this.props.upVote(commentID);
    }

    if (voteType === 'decrement') {
      this.props.downVote(commentID);

    }
  }

  render() {
    const comments = this.composeComments();
    return (
      <div>
      { this.props.isFetching &&
        <div className="CommentList">
          <h2>Fetching Comments</h2>
        </div>
      }
      { !this.props.isFetching &&
        !this.comments &&
        <div className="CommentList">
          <h2>No Comments Found</h2>
        </div>
      }

      { (comments.length > 0) &&
        <div className="CommentList">
          <h2>Comments</h2>
          { comments.map(comment =>
            <section key={comment.id}>
              <div className="CommentList-comment-heading">
                <a role="button" onClick={() => this.handleVote(comment.id, 'increment')}>
                  <img src={IconArrowUp} alt="arrow up" />
                </a>
                <a role="button" onClick={() => this.handleVote(comment.id, 'decrement')}>
                  <img src={IconArrowDown} alt="arrow down" />
                </a>
                {comment.voteScore} votes by {comment.author} 2 minutes ago |&nbsp;
                <a role="button" onClick={() => this.handleRemove(comment.id)}>remove</a>
                &nbsp;|&nbsp;
                <Link to={'/post/' + this.props.postID + '/comment/' + comment.id + '/edit'}>edit</Link>
              </div>
              <p>{comment.body}</p>
            </section>
          )}
       </div>
      }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: commentID => dispatch(incrementCommentVotes(commentID)),
    downVote: commentID => dispatch(decrementCommentVotes(commentID)),
    fetchComments: postID => dispatch(fetchComments(postID)),
    removeComment: commentID => dispatch(deleteComment(commentID))
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
