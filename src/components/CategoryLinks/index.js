import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './CategoryLinks.css';

function CategoryLinks(props) {
  let activeCategory;
  if (props.match) {
    activeCategory = (props.match.params.category);
  }

  // add a property to indicate whether or not the category is currently open (active)
  const categories = props.categories.items.map((item) => {
    const category = Object.assign(item);
    category.active = (category.name === activeCategory);
    return category;
  });

  const activeStyle = {
    color: 'white',
  };

  return (
    <div className="CategoryLinks">
      { categories.map(category => (
        <div className="CategoryLinks-link" key={category.name}>
          <span> | </span>
          { category.active && <Link to={`/${category.name}/`} style={activeStyle}>{category.name}</Link> }
          { !category.active && <Link to={`/${category.name}/`}>{category.name}</Link> }
          &nbsp;
        </div>))
      }
    </div>
  );
}

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps)(CategoryLinks);
