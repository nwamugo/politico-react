import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logout } from '../../../store/modules/auth';

class NavBar extends Component {
  logoutHandler = async event => {
    event.preventDefault();

    const { history } = this.props;
    this.props.logout(history);
  };

  render() {
    return (
      <nav data-test="NavBarComponent" className={`${this.props.className}`}>
        {this.props.signupId && (
          <div className="row">{this.props.children}</div>
        )}

        {!this.props.signupId && (
          <div>
            <div className="row">
              <span className="heading-primary--logo logo">Politico</span>
              <ul className="main-nav">
                <li>
                  <a href="../index.html">
                    <button
                      className="btn btn-login"
                      onClick={this.logoutHandler}
                    >
                      Log Out
                    </button>
                  </a>
                </li>
              </ul>
              <a className="mobile-nav-icon js--nav-icon">
                <i className="ion-navicon-round" />
              </a>
            </div>
            <div className="row sub-nav">
              <ul className="main-nav">
                <li>
                  <Link to="/aspirants">
                    <button
                      id="viewAspirants"
                      className="btn btn-view-aspirants"
                    >
                      View Aspirants
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/parties">
                    <button id="viewParties" className="btn btn-view-parties">
                      View Political Parties
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="results">
                    <button id="viewResults" className="btn btn-view-results">
                      View Election Results
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.array,
  signupId: PropTypes.string,
  className: PropTypes.string,
  logout: PropTypes.func,
  history: PropTypes.object,
};

export default connect(
  null,
  { logout },
)(withRouter(NavBar));
