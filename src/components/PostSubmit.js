import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { postPost } from '../actions';
import './PostSubmit.css';

class PostSubmit extends Component {

  state = {
    title: '',
    body: '',
    category: '',
    author: '',
    fireRedirect: false
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost({'title': this.state.title,
                        'category': this.state.category,
                        'body': this.state.body,
                        'author': this.state.author })
    this.setState({ fireRedirect: true });
  }

  render() {
    return (
      <div>
      <form className="PostSubmit" onSubmit={this.handleSubmit} >
        <fieldset>

          <label>title</label>
          <input className="PostSubmit-title" name="title"
                 type="text"
                 value={this.state.title}
                 onChange={this.handleChange} />
          <br/>

          <label>category</label>
          <select name="category" onChange={this.handleChange}>
          { this.props.categories.map(category =>
            <option key={category.name}
                    value={category.name}>{category.name}</option>)
          }
          </select>

          <div className="PostSubmit-text">
            <label>body</label>
            <textarea name="body"
                      value={this.state.body}
                      onChange={this.handleChange} />
            <br/>
          </div>

          <label>author</label>
          <input className="PostSubmit-author" name="author"
                 type="text"
                 value={this.state.author}
                 onChange={this.handleChange} />
        </fieldset>
        <button className="PostSubmit-button"
                type="submit"
                value="submit">Submit Post</button>
      </form>
      {this.state.fireRedirect && (
        <Redirect to='/'/>
      )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {'categories': state.categories.items};
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(postPost(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSubmit)
