import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

class CommentList extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.postID);
  }

  render() {
    console.log('Comment View', this.props);
    if (this.props.comments.isFetching) {
      return (
        <h1>Fetching Posts</h1>
      )
    } else {
      if (Object.keys(this.props.comments.items).length === 0) {
        return (
          <h1>No Comments Found</h1>
        )
      } else {
        return (
          <h1>Howdy</h1>
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
