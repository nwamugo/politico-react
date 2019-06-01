import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../presentationals/Button/Button';

const NavBar = ({ signupShowPopup, loginShowPopup }) => {
  return (
    <nav data-test="NavBarComponent">
      <div className="row">
        <ul className="main-nav js--main-nav">
          <li>
            <Button
              value="Sign up today"
              signupClassName="btn-signup"
              signupId="pop"
              onClick={signupShowPopup}
            />
          </li>
          <li>
            <Button
              value="Log in"
              loginClassName="btn-login"
              onClick={loginShowPopup.bind(this, 'login')}
            />
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
  signupShowPopup: PropTypes.func,
  loginShowPopup: PropTypes.func,
};

export default NavBar;
