import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

function CategoryView(props) {
  const categoryName = props.match.params.id;
  return <PostList category={categoryName} />;
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(CategoryView);
