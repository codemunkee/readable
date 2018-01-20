import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

class CommentList extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.postID);
  }

  render() {
    console.log("PROPS", this.props)
    return (
      <h1>Howdy!</h1>
    )
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
