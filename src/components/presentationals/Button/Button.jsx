import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, signupClassName, loginClassName, signupId }) => {
  return (
    <div>
      <button
        className={`btn ${signupClassName} ${loginClassName}`}
        id={`${signupId}`}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  signupClassName: PropTypes.string,
  loginClassName: PropTypes.string,
  signupId: PropTypes.string,
};

export default Button;
