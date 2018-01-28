import React from 'react';
import { Link } from 'react-router-dom';
import IconR from './IconR.svg';

/* Shows the Icon and the Title of each page */

export default function AppTitle(props) {
  return (
    <div className="App-title">
      <Link to="/">
        <img className="App-logo" src={IconR} alt="icon" />
      </Link>
      <span className="App-title">
        { props.name }
      </span>
    </div>
  )
}
