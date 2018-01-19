import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

class CategoryView extends Component {
  render() {
    const categoryName = this.props.match.params.id;
    return (
      <PostList category={categoryName} />
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps
)(CategoryView)
