import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { putComment, fetchComments } from '../../actions';
import './CommentEdit.css';

class CommentEdit extends Component {
  state = {
    id: '',
    body: '',
    fireRedirect: false,
  }

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.postid);
  }

  componentWillReceiveProps(newProps) {
    const comment = newProps.comments.items[this.props.match.params.commentid];
    if (comment) {
      this.setState({ id: comment.id, body: comment.body });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    mapStateToProps(this.state); // eslint-disable-line no-use-before-define
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.putComment({
      id: this.state.id,
      body: this.state.body,
    });
    this.setState({ fireRedirect: true });
  }

  render() {
    const comment = this.props.comments.items[this.props.match.params.commentid];
    const parentPost = this.props.posts.items[this.props.match.params.postid];
    return (
      <div>
        { this.props.comments.isFetching &&
          <h2>Fetching Comment Info</h2> }

        { !this.props.comments.isFetching &&
          !comment &&
          <h2>Comment not found :(</h2> }

        { !this.props.comments.isFetching &&
          comment &&
          <div>
            <form
              className="CommentEdit"
              onSubmit={this.handleSubmit}
            >
              <fieldset>
                <Link to={`/post/${parentPost.id}`}>{parentPost.title}</Link>
                <div className="CommentEdit-text">
                  <textarea
                    name="body"
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                </div>
              </fieldset>
              <button
                className="CommentEdit-button"
                type="submit"
                value="submit"
              >
                Edit Comment
              </button>
            </form>
            { this.state.fireRedirect && <Redirect to={`/post/${parentPost.id}`} />}
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps({ comments, posts }) {
  return { comments, posts };
}

export default connect(
  mapStateToProps,
  { putComment, fetchComments },
)(CommentEdit);
