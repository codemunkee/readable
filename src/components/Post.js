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
        <span className="Post-number">{id}. <img src={IconArrowUp}
                         className="Post-logo"
                         alt="arrow up" />
        </span>
        <span>
          {title}
        </span>
      </div>
    )
  }
}
