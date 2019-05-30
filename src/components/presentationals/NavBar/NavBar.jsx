import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../presentationals/Button/Button';

const NavBar = () => {
  return (
    <nav>
      <div className="row">
        <ul className="main-nav js--main-nav">
          <li>
            <Button
              text="Sign up today"
              signupClassName="btn-signup"
              signupId="pop"
            />
          </li>
          <li>
            <Button text="Log in" loginClassName="btn-login" />
          </li>
        </ul>
        <a className="mobile-nav-icon js--nav-icon">
          <i className="ion-navicon-round" />
        </a>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  signupText: PropTypes.string,
  loginText: PropTypes.string,
};

export default NavBar;
