import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IconArrowUp from './IconArrowUp.svg';
import IconArrowDown from './IconArrowDown.svg';
import CommentSubmit from './CommentSubmit';
import CommentList from './CommentList';
import { incrementPostVotes, decrementPostVotes, deletePost } from '../actions';
import './PostView.css';

class PostView extends Component {

  handleUpVote = data => {
    this.props.upVote(this.props.match.params.id);
  }

  handleDownVote = data => {
    this.props.downVote(this.props.match.params.id);
  }

  handleRemove = data => {
    this.props.removePost(this.props.match.params.id);
  }

  render()  {
    const postID = this.props.match.params.id;
    const post = this.props.posts.items[postID];
    const humanTime = (post)
                        ? new Date(post.timestamp).toLocaleString('en-US')
                        : undefined;

    return (
      <div>
        { this.props.posts.isFetching &&
          <h1>Fetching Post info...</h1> }

        { !this.props.posts.isFetching &&
          !post &&
          <h2>Post not found :(</h2> }

        { !this.props.posts.isFetching &&
          post &&
          <div className="PostView">
            <div className="PostView-title">
              <span>
                <img src={IconArrowUp}
                     className="PostInfo-logo"
                     alt="arrow up"
                     onClick={this.handleUpVote}/>
                <img src={IconArrowDown}
                     className="PostInfo-logo"
                     alt="arrow down"
                     onClick={this.handleDownVote} />
                {post.title}
              </span>
              <div className="PostView-subtitle">
                <span>{post.voteScore} votes by {post.author} {humanTime}</span>
                <Link to={'/post/' + postID + '/edit'}> edit</Link>
                 &nbsp;|&nbsp;
                <a role="button" onClick={this.handleRemove}>remove</a>
              </div>
            </div>
            <div className="PostView-body">
              <p>
                {post.body}
              </p>
              <CommentSubmit postID={postID} />
            </div>
            <div>
              <hr/>
              <CommentList postID={postID} />
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: postID => dispatch(incrementPostVotes(postID)),
    downVote: postID => dispatch(decrementPostVotes(postID)),
    removePost: postID => dispatch(deletePost(postID))
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostView)
