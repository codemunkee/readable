import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

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

  render() {
    if (this.props.comments.isFetching) {
      return (
        <h2>Fetching Comments</h2>
      )
    } else {
      if (Object.keys(this.props.comments.items).length === 0) {
        return (
          <h2>No Comments Found</h2>
        )
      } else {
        const comments = this.composeComments();
        return (
          <div className="CommentList">
            <h2>Comments</h2>
            { comments.map(comment =>
              <section key={comment.id}><p>{comment.body}</p></section>
            )}
          </div>
        )
      }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComments: postID => dispatch(fetchComments(postID))
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
