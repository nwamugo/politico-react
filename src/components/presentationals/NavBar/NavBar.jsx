import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logout } from '../../../store/modules/auth';

export class NavBar extends Component {
  logoutHandler = async event => {
    event.preventDefault();

    const { history } = this.props;
    this.props.logout(history);
  };

  render() {
    const { buttonText, buttonLeads3 } = this.props;

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
                {/* <li>
                  <Link to="/aspirants">
                    <button
                      id="viewAspirants"
                      className="btn btn-view-aspirants"
                    >
                      {buttonText.first}
                    </button>
                  </Link>
                </li> */}
                <li>
                  <Link to="/parties">
                    <button id="viewParties" className="btn btn-view-parties">
                      {buttonText.second}
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={buttonLeads3}>
                    <button id="viewResults" className="btn btn-view-results">
                      {buttonText.third}
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
  buttonText: PropTypes.object,
  buttonLeads3: PropTypes.string,
};

export default connect(
  null,
  { logout },
)(withRouter(NavBar));
