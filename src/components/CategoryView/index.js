import React from 'react';
import PostList from '../PostList/';

export default function CategoryView(props) {
  const categoryName = props.match.params.category;
  return (
    <div>
      { categoryName === 'submit' && <h1>Hello</h1> }
      <PostList category={categoryName} />
    </div>
  );
}
