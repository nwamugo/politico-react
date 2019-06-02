import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Signup from '../../containers/Signup/Signup';
import Login from '../../containers/Login/Login';

// images
import ngFlag from '../../../resources/img/ngflag.png';
import coa from '../../../resources/img/coa.png';

const Popup = ({ handleClose, show, authMode }) => {
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
          {authMode === signup && <Signup authMode={authMode} />}
          {authMode === login && <Login authMode={authMode} />}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

Popup.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  authMode: PropTypes.string,
};

export default Popup;
