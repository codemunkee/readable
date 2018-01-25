import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putComment, fetchComments } from '../actions';
import './CommentSubmit.css';

class CommentEdit extends Component {

  state = {
    id: '',
    body: '',
  }

  componentWillReceiveProps(newProps) {
    const comment = newProps.comments.items[this.props.match.params.commentid];
    if (comment) {
      this.setState({id: comment.id, body: comment.body})
    }
  }

  componentDidMount() {
    console.log('PROPS', this.props)
    this.props.fetchComments(this.props.match.params.postid);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
    mapStateToProps(this.state)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.editPost({'id': this.state.id,
                         'body': this.state.body});
    this.props.fetchComments();
  }

  render() {
    const comment = this.props.comments.items[this.props.match.params.commentid];
    return (
      <div>
      { this.props.comments.isFetching &&
        <h2>Fetching Comment Info</h2> }

      { !this.props.comments.isFetching &&
        !comment &&
        <h2>Comment not found :(</h2> }

      { !this.props.comments.isFetching &&
        comment &&
        <form className="CommentSubmit" onSubmit={this.handleSubmit} >
          <fieldset>

            <div className="CommentSubmit-text">
              <label>body</label>
              <textarea name="body"
                        value={this.state.body}
                        onChange={this.handleChange} />
              <br/>
            </div>
          </fieldset>
          <button className="CommentSubmit-button"
                  type="submit"
                  value="submit">Submit
          </button>
        </form>
      }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    editComment: (data) => dispatch(putComment(data)),
    fetchComments: (postID) => dispatch(fetchComments(postID)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentEdit)
