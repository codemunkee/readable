import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './AppMenu.css';

class AppMenu extends Component {
  render() {
    return (
      <div className="AppMenu">
        <Link to="/submit">submit</Link>
        &nbsp;|&nbsp;
        <a role="button" onClick={this.handleSort}>sort</a>
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
