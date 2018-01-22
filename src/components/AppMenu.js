import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconArrowUp from './IconArrowUp.svg';
import IconArrowDown from './IconArrowDown.svg';
import './AppMenu.css';

class AppMenu extends Component {

  handleSort() {
    console.log('oh boy')
  }

  render() {
    return (
      <div className="AppMenu">
        <li><Link to="/submit">submit</Link></li>
        &nbsp;|&nbsp;
        <li>
            <a role="button" onClick={this.handleSort}>sort
              <ul>
                <li>date
                  <div className="AppMenu-arrow-box">
                    <img src={IconArrowUp} className="AppMenu-arrow" alt="arrow up" onClick={this.handleUpVote}/>
                    <img src={IconArrowDown} className="AppMenu-arrow" alt="arrow down" onClick={this.handleDownVote} />
                  </div>
                </li>
                <li>votes
                  <div className="AppMenu-arrow-box">
                    <img src={IconArrowUp} className="AppMenu-arrow" alt="arrow up" onClick={this.handleUpVote}/>
                    <img src={IconArrowDown} className="AppMenu-arrow" alt="arrow down" onClick={this.handleDownVote} />
                  </div>
                </li>
              </ul>
            </a>
        </li>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMenu)
