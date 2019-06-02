import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ className, children, signupId }) => {
  return (
    <nav data-test="NavBarComponent" className={`${className}`}>
      {signupId && <div className="row">{children}</div>}

      {!signupId && (
        <div>
          <div className="row">
            <span className="heading-primary--logo logo">Politico</span>
            <ul className="main-nav">
              <li>
                <a href="../index.html">
                  <button className="btn btn-login">Log Out</button>
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
                <a href="aspirants.html">
                  <button id="viewAspirants" className="btn btn-view-aspirants">
                    View Aspirants
                  </button>
                </a>
              </li>
              <li>
                <a href="political-parties.html">
                  <button id="viewParties" className="btn btn-view-parties">
                    View Political Parties
                  </button>
                </a>
              </li>
              <li>
                <a href="results.html">
                  <button id="viewResults" className="btn btn-view-results">
                    View Election Results
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

NavBar.propTypes = {
  children: PropTypes.array,
  signupId: PropTypes.string,
  className: PropTypes.string,
};

export default NavBar;
