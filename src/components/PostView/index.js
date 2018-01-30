import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IconArrowUp from '../IconArrows/IconArrowUp.svg';
import IconArrowDown from '../IconArrows/IconArrowDown.svg';
import CommentSubmit from '../CommentSubmit/';
import CommentList from '../CommentList/';
import { incrementPostVotes, decrementPostVotes, deletePost } from '../../actions';
import './PostView.css';

function PostView(props) {
  const postID = props.match.params.id;
  const post = props.posts.items[postID];
  const humanTime = (post)
    ? new Date(post.timestamp).toLocaleString('en-US')
    : undefined;

  return (
    <div>
      { props.posts.isFetching &&
        <h1>Fetching Post info...</h1> }

      { !props.posts.isFetching &&
        !post &&
        <h2>Post not found :(</h2> }

      { !props.posts.isFetching &&
        post &&
        <div className="PostView">
          <div className="PostView-title">
            <span>
              <img
                src={IconArrowUp}
                className="PostInfo-logo"
                alt="arrow up"
                onClick={() => props.upVote(post.id)}
              />
              <img
                src={IconArrowDown}
                className="PostInfo-logo"
                alt="arrow down"
                onClick={() => props.downVote(post.id)}
              />
              {post.title}
            </span>
            <div className="PostView-subtitle">
              <span>{post.voteScore} votes by {post.author} {humanTime}</span>
              <Link to={`/post/${postID}/edit`}> edit</Link>
               &nbsp;|&nbsp;
              <button
                className="PostView-button"
                onClick={() => props.removePost(post.id)}
              >remove
              </button>
            </div>
          </div>
          <div className="PostView-body">
            <p>
              {post.body}
            </p>
            <CommentSubmit postID={postID} />
          </div>
          <div>
            <hr />
            <CommentList postID={postID} />
          </div>
        </div>
      }
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: postID => dispatch(incrementPostVotes(postID)),
    downVote: postID => dispatch(decrementPostVotes(postID)),
    removePost: postID => dispatch(deletePost(postID)),
  };
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostView);
