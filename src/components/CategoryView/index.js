import React from 'react';
import PostList from '../PostList/';

export default function CategoryView(props) {
  const categoryName = props.match.params.id;
  return <PostList category={categoryName} />;
}
