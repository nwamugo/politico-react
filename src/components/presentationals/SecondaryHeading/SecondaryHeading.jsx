import React from 'react';
import PropTypes from 'prop-types';

const SecondaryHeading = ({ text, className, h2ClassName }) => {
  return (
    <div className={`u-center-text u-margin-bottom-big ${className}`}>
      <h2 className={`heading-secondary ${h2ClassName}`}>{text}</h2>
    </div>
  );
};

SecondaryHeading.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  h2ClassName: PropTypes.string,
};

export default SecondaryHeading;
