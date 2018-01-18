import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './CategoryLinks.css';

class CategoryLinks extends Component {
  render() {
    return (
      <div className="CategoryLinks">
        { this.props.categories.items.map(item =>
           <Link key={item.name} to={'/category/' + item.path}>{item.name}</Link>
        )}
      </div>
    )
  }
}

function mapStateToProps({categories}) {
  return { categories };
}

export default connect(
  mapStateToProps
)(CategoryLinks)
