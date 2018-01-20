import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostInfo from './PostInfo';
import { fetchPosts } from '../actions';
import './PostList.css';


class PostList extends Component {

  composePosts() {
    // we perform a handful of operations on posts before they're
    // rendered. namely, putting them in an array, numbering them,
    // filtering them to a specific category (if required), and
    // sorting them (if required)
    const { items } = this.props.posts;

    // put the posts into an array
    let posts = Object.keys(items).map(postID => {
      return this.props.posts.items[postID];
    })

    // if a category is defined filter them to only that category
    if (this.props.category) {
      posts = posts.filter(post => post.category === this.props.category);
    }

    return this.numberPosts(posts)
  }

  numberPosts(posts) {
    // add numbers to the posts
    for (let i = 0; i < posts.length; i++) {
      posts[i] = { ...posts[i], 'number': i + 1 }
    }
    return posts;
  }

  render() {
    if (this.props.posts.isFetching) {
      return (<h1>Fetching</h1>)
    } else {
      return (
        <div className="PostList">
          { this.composePosts().map(post =>
            <PostInfo key={post.id} post={post} />)
          }
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
