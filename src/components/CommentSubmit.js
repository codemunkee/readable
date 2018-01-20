import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions';
import './CommentSubmit.css';

class CommentSubmit extends Component {

  state = {
    body: '',
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("pROPS", this.props)
    this.props.addComment({'body': this.state.body,
                           'parentId': this.props.postID});
  }

  render() {
    return (
      <form className="CommentSubmit" onSubmit={this.handleSubmit} >
        <fieldset>

          <div className="CommentSubmit-text">
            <textarea name="body"
                      value={this.state.body}
                      onChange={this.handleChange} />
            <br/>
          </div>
        </fieldset>
        <button className="CommentSubmit-button" type="submit" value="submit">add comment</button>
      </form>
    )
  }
}

function mapStateToProps (state) {

  return state;
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: (data) => dispatch(postComment(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentSubmit)
