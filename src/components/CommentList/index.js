import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchComments, deleteComment, incrementCommentVotes, decrementCommentVotes } from '../../actions';
import IconArrowUp from '../IconArrows/IconArrowUp.svg';
import IconArrowDown from '../IconArrows/IconArrowDown.svg';
import './CommentList.css';

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postID);
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
    const comments = Object.keys(this.props.comments.items).map((commentID) => {
      const comment = this.props.comments.items[commentID];
      comment.humantime = new Date(comment.timestamp).toLocaleString('en-US');
      return comment;
    });
    return (
      <div>
        { this.props.isFetching &&
          !comments &&
          <div className="CommentList">
            <h2>Fetching Comments</h2>
          </div>
        }
        { !this.props.isFetching &&
          comments.length === 0 &&
          <div className="CommentList">
            <h2>No Comments Found</h2>
          </div>
        }

        { (comments.length > 0) &&
        <div className="CommentList">
          <h2>Comments</h2>
          { comments.map(comment => (
            <section key={comment.id}>
              <div className="CommentList-comment-heading">
                <a role="button" onClick={() => this.handleVote(comment.id, 'increment')}>
                  <img src={IconArrowUp} alt="arrow up" />
                </a>
                <a role="button" onClick={() => this.handleVote(comment.id, 'decrement')}>
                  <img src={IconArrowDown} alt="arrow down" />
                </a>
                {comment.voteScore} votes by {comment.author} {comment.humantime} |&nbsp;
                <Link to={`/post/${this.props.postID}/comment/${comment.id}/edit`}>edit</Link>
                &nbsp;|&nbsp;
                <a role="button" onClick={() => this.props.removeComment(comment.id)}>remove</a>
              </div>
              <p>{comment.body}</p>
            </section>))
        }
        </div>
      }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: commentID => dispatch(incrementCommentVotes(commentID)),
    downVote: commentID => dispatch(decrementCommentVotes(commentID)),
    fetchComments: postID => dispatch(fetchComments(postID)),
    removeComment: commentID => dispatch(deleteComment(commentID)),
  };
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentList);