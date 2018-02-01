import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconArrowUp from '../IconArrows/IconArrowUp.svg';
import IconArrowDown from '../IconArrows/IconArrowDown.svg';
import { updateSort } from '../../actions';
import './AppMenu.css';

function AppMenu(props) {
  function handleSortClick(sortType) {
    props.updateSort(sortType);
  }

  function sortingButton(iconName, sortSettingString, imageAlt) {
    return (
      <img
        src={iconName}
        style={(props.sortSetting === sortSettingString) ?
          { backgroundColor: 'yellow' } :
          { backgroundColor: '#f6f6ef' }}
        className="AppMenu-arrow "
        alt={imageAlt}
        onClick={() => handleSortClick(sortSettingString)}
      />
    );
  }

  return (
    <div className="AppMenu">
      <li><Link to="/submit">submit</Link></li>
      &nbsp;|&nbsp;
      <li>
        <a role="button">sort
          <ul>
            <li>date
              <div className="AppMenu-arrow-box">
                {sortingButton(IconArrowDown, 'dateDesc', 'arrow down')}
                {sortingButton(IconArrowUp, 'dateAsc', 'arrow up')}
              </div>
            </li>
            <li>votes
              <div className="AppMenu-arrow-box">
                {sortingButton(IconArrowDown, 'votesDesc', 'arrow down')}
                {sortingButton(IconArrowUp, 'votesAsc', 'arrow up')}
              </div>
            </li>
          </ul>
        </a>
      </li>
    </div>
  );
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
