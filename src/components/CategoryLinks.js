import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CategoryLinks.css';

function CategoryLinks(props) {
  return (
    <div className="CategoryLinks">
      { props.categories.items.map(item =>
        (
          <Link
            key={item.name}
            to={`/category/${item.path}`}
          >
            { ` | ${item.name}` }
          </Link>))
      }
    </div>);
}

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps)(CategoryLinks);
