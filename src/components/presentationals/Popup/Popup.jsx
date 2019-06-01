import React from 'react';
import PropTypes from 'prop-types';

// components
import Signup from '../../containers/Signup/Signup';

// images
import ngFlag from '../../../resources/img/ngflag.png';
import coa from '../../../resources/img/coa.png';

const Popup = ({ handleClose, show, authMode }) => {
  console.log(authMode);
  const signup = 'signup';
  const login = 'login';

  const showHideClassName = show ? 'popup-show' : 'popup-none';
  const showHideClassName2 = show
    ? 'popup__content-show'
    : 'popup__content-none';

  return (
    <div className={`popup ${showHideClassName}`} id="popup">
      <div
        className={`popup__content ${showHideClassName2}`}
        id="popup__content"
      >
        <div className="popup__left">
          <img src={ngFlag} alt="Tour photo" className="popup__img" />
          <img src={coa} alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a
            href="#"
            className="popup__close"
            id="close-signup"
            onClick={handleClose}
          >
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small form-heading">
            Politico
          </h2>
          {authMode === signup && (
            <h3 className="heading-tertiary u-margin-bottom-small">
              Please fill in your details
            </h3>
          )}
          {authMode === login && (
            <h3 className="heading-tertiary u-margin-bottom-small">
              Login to enter
            </h3>
          )}
          <Signup />
          {/* <form action="" className="form">
            {authMode === signup && (
              <div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="First Name"
                    id="first_name"
                    required
                  />
                  <label htmlFor="first_name" className="form__label">
                    First Name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Last Name"
                    id="last_name"
                    required
                  />
                  <label htmlFor="last_name" className="form__label">
                    Last Name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Phone Number"
                    id="phoneNumber"
                    required
                  />
                  <label htmlFor="phoneNumber" className="form__label">
                    Phone Number
                  </label>
                </div>
              </div>
            )}
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                placeholder="Email address"
                id="email"
                required
              />
              <label htmlFor="email" className="form__label email-label">
                Email address
              </label>
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                id="password"
                required
              />
              <label htmlFor="password" className="form__label">
                Password
              </label>
            </div>
            {authMode === signup && (
              <div className="form__group">
                <div className="form__checkbox-group">
                  <input
                    type="checkbox"
                    id="terms"
                    name="legal"
                    className="form__checkbox-input"
                    required
                  />
                  <label htmlFor="terms" className="form__checkbox-label">
                    <span className="form__checkbox-button" />I accept the{' '}
                    <a href="#" className="link-decor">
                      Terms of Service and Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
            )}
            <div className="form__group">
              {authMode === signup && (
                <button
                  id="modalSignup"
                  className="btn btn-golden u-margin-right-small"
                >
                  Sign Up &rarr;
                </button>
              )}
              {authMode === login && (
                <button
                  id="modalLogin"
                  className="btn btn-darkblue u-margin-top-small u-margin-right-small"
                >
                  Login &rarr;
                </button>
              )}
            </div>
            {authMode === signup && (
              <div className="have-account u-margin-right-small">
                Already have an account?{' '}
                <a href="#" className="link-decor" id="change-modals1">
                  Log in &rarr;
                </a>
              </div>
            )}
            {authMode === login && (
              <div className="no-account u-margin-right-small">
                Don&apos;t have an account?{' '}
                <a href="#" className="link-decor" id="change-modals2">
                  Sign up &rarr;
                </a>
              </div>
            )}
          </form> */}
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  authMode: PropTypes.string,
};

export default Popup;
