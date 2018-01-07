import React, { Component } from 'react';
import IconArrowUp from './IconArrowUp.svg';
import './Post.css';

export class Post extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
  }

  render() {
    const { id, title } = this.state;
    return (
      <div className="Post">
        <div className="Post-line-one">
          <span className="Post-number">{id}. <img src={IconArrowUp}
                           className="Post-logo"
                           alt="arrow up" />
          </span>
          <span>
            {title}
          </span>
        </div>
        <div className="Post-line-two">
          <span>0 votes by poster 2 minutes ago | remove | discuss</span>
        </div>
      </div>
    )
  }
}
