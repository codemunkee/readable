import React, { Component } from 'react';
import IconArrowUp from './IconArrowUp.svg';
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import './Post.css';


class Post extends Component {

  handleRemove = data => {
    this.props.removePost(this.props.post.id);
  }

  render() {
    const { number, title, voteScore } = this.props.post;
    return (
      <div className="Post">
        <div className="Post-line-one">
          <span className="Post-number">{number}. <img src={IconArrowUp}
                           className="Post-logo"
                           alt="arrow up" />
          </span>
          <span>
            {title}
          </span>
        </div>
        <div className="Post-line-two">
          <span>{voteScore} votes by poster 2 minutes ago | <span onClick={this.handleRemove}>remove</span> | discuss</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {state};
}

function mapDispatchToProps(dispatch) {
  return {
    removePost: (data) => dispatch(deletePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
