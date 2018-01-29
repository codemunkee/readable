import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconArrowUp from './IconArrowUp.svg';
import IconArrowDown from './IconArrowDown.svg';
import { updateSort } from '../actions';
import './AppMenu.css';

class AppMenu extends Component {
  handleSortClick(sortType) {
    this.props.updateSort(sortType);
  }

  render() {
    const { sortSetting } = this.props;
    return (
      <div className="AppMenu">
        <li><Link to="/submit">submit</Link></li>
        &nbsp;|&nbsp;
        <li>
          <a role="button" onClick={this.handleSort}>sort
            <ul>
              <li>date
                <div className="AppMenu-arrow-box">
                  <img
                    src={IconArrowDown}
                    style={(sortSetting === 'dateDesc') ?
                      { backgroundColor: 'yellow' } :
                      { backgroundColor: '#f6f6ef' }}
                    className="AppMenu-arrow "
                    alt="arrow down"
                    onClick={() => this.handleSortClick('dateDesc')}
                  />
                  <img
                    src={IconArrowUp}
                    style={(sortSetting === 'dateAsc') ?
                      { backgroundColor: 'yellow' } :
                      { backgroundColor: '#f6f6ef' }}
                    className="AppMenu-arrow"
                    alt="arrow up"
                    onClick={() => this.handleSortClick('dateAsc')}
                  />
                </div>
              </li>
              <li>votes
                <div className="AppMenu-arrow-box">
                  <img
                    src={IconArrowDown}
                    style={(sortSetting === 'votesDesc') ?
                      { backgroundColor: 'yellow' } :
                      { backgroundColor: '#f6f6ef' }}
                    className="AppMenu-arrow"
                    alt="arrow down"
                    onClick={() => this.handleSortClick('votesDesc')}
                  />
                  <img
                    src={IconArrowUp}
                    style={(sortSetting === 'votesAsc') ?
                      { backgroundColor: 'yellow' } :
                      { backgroundColor: '#f6f6ef' }}
                    className="AppMenu-arrow"
                    alt="arrow up"
                    onClick={() => this.handleSortClick('votesAsc')}
                  />
                </div>
              </li>
            </ul>
          </a>
        </li>
      </div>
    );
  }
}

function mapStateToProps({ sortSettings }) {
  return { sortSetting: sortSettings.sortSetting };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSort: sortType => dispatch(updateSort(sortType)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppMenu);
