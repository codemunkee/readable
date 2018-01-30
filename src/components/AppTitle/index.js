import React from 'react';
import { Link } from 'react-router-dom';
import IconR from './IconR.svg';

/* Shows the Icon and the Title of each page */

export default function AppTitle(props) {
  // if the name of the title is Readable, we link back to root
  const linkable = (props.name === 'Readable');
  return (
    <div className="App-title">
      <Link to="/">
        <img className="App-logo" src={IconR} alt="icon" />
      </Link>
      { linkable && (
        <Link to="/">
          <span className="App-title">
            { props.name }
          </span>
        </Link>
      )}
      { !linkable && (
        <span className="App-title">
          { props.name }
        </span>
      )}
    </div>
  );
}
