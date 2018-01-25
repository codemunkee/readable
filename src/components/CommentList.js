import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, deleteComment } from '../actions';
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

  render() {
    if (this.props.comments.isFetching) {
      return (
        <div className="CommentList">
          <h2>Fetching Comments</h2>
        </div>
      )
    } else {
      if (Object.keys(this.props.comments.items).length === 0) {
        return (
          <div className="CommentList">
            <h2>No Comments Found</h2>
          </div>
        )
      } else {
        const comments = this.composeComments();
        return (
          <div className="CommentList">
            <h2>Comments</h2>
            { comments.map(comment =>
              <section key={comment.id}>
                <div className="CommentList-comment-heading">
                  <img src={IconArrowUp} alt="arrow up" />
                  <img src={IconArrowDown} alt="arrow down" />
                  {comment.voteScore} votes by poster 2 minutes ago |&nbsp;
                  <a role="button" onClick={() => this.handleRemove(comment.id)}>remove</a>
                  &nbsp;|&nbsp;
                  <Link to="/edit">edit</Link>
                </div>
                <p>{comment.body}</p>
              </section>
            )}
          </div>
        )
      }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComments: postID => dispatch(fetchComments(postID)),
    removeComment: postID => dispatch(deleteComment(postID))
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
