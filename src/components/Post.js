import React, { Component } from 'react';
import IconArrowUp from './IconArrowUp.svg';
import './Post.css';

export class Post extends Component {
  state = {
    id: this.props.post.id,
    number: this.props.post.number,
    title: this.props.post.title,
  }

  render() {
    console.log(this.state)
    const { id, number, title } = this.state;
    return (
      <div className="Post">
        <div className="Post-line-one">
          <span className="Post-number">{number}. <img src={IconArrowUp}
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
