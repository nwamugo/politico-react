import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  value,
  signupClassName,
  type,
  loginClassName,
  signupId,
  onClick,
}) => {
  return (
    <div>
      <button
        className={`btn ${signupClassName} ${loginClassName}`}
        id={`${signupId}`}
        type={type}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.any,
  signupClassName: PropTypes.string,
  loginClassName: PropTypes.string,
  signupId: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
