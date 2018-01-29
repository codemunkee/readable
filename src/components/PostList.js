import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostInfo from './PostInfo';
import { fetchPosts } from '../actions';
import './PostList.css';


class PostList extends Component {
  static numberPosts(posts) {
    // add numbers to the posts
    const numberedPosts = posts.map((post, index) => ({ ...post, number: index + 1 }));
    return numberedPosts;
  }

  static sortPosts(posts, sortSetting) {
    switch (sortSetting) {
      case 'dateAsc':
        posts.sort((a, b) => (a.timestamp - b.timestamp));
        break;
      case 'dateDesc':
        posts.sort((a, b) => (b.timestamp - a.timestamp));
        break;
      case 'votesAsc':
        posts.sort((a, b) => (a.voteScore - b.voteScore));
        break;
      case 'votesDesc':
        posts.sort((a, b) => (b.voteScore - a.voteScore));
        break;
      default:
        break;
    }
  }

  composePosts() {
    // we perform a handful of operations on posts before they're
    // rendered. namely, putting them in an array, numbering them,
    // filtering them to a specific category (if required), and
    // sorting them (if required)
    const { items } = this.props.posts;

    // put the posts into an array
    let posts = Object.keys(items).map(postID => this.props.posts.items[postID]);

    PostList.sortPosts(posts, this.props.sortSettings.sortSetting);

    // if a category is defined filter them to only that category
    if (this.props.category) {
      posts = posts.filter(post => post.category === this.props.category);
    }

    return PostList.numberPosts(posts);
  }


  render() {
    const posts = (Object.keys(this.props.posts.items).length > 0)
      ? this.composePosts()
      : [];

    return (
      <div className="PostList">
        { this.props.posts.isFetching &&
          <h1>Fetching Posts</h1> }

        { !this.props.posts.isFetching &&
          posts.length === 0 &&
          <h1>No Posts Found - maybe submit one?</h1> }

        { !this.props.posts.isFetching &&
          <div className="PostList">
            { posts.map(post =>
              <PostInfo key={post.id} post={post} />)
            }
          </div> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
