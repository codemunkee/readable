import React from 'react';
import PostList from '../PostList/';

export default function CategoryView(props) {
  const categoryName = props.match.params.category;
  return <PostList category={categoryName} />;
}
