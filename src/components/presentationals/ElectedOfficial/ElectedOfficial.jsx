import React from 'react';
import PropTypes from 'prop-types';

import ProfilePlaceHolder from '../../../resources/img/profile-placeholder.png';

const ElectedOfficial = ({ theOffice }) => {
  console.log('apprenticeship', theOffice);
  return (
    <div className="presidential-spot">
      <div className="result__top">
        <h3 className="result-heading">&nbsp;</h3>
      </div>
      <figure>
        <img
          src={ProfilePlaceHolder}
          alt="The author of this site"
          className="profile-img"
        />
        <figcaption className="" />
      </figure>
      <div className="presidential-details">
        <div className="parcel-analysis same-line">
          <h4 className="property-name user-property">Name: &nbsp;</h4>
          <span className="property-value user-value">kingsley Moghalu</span>
        </div>
        <div className="parcel-analysis same-line">
          <h4 className="property-name user-property">Office: &nbsp;</h4>
          <span className="property-value user-value">{theOffice.name}</span>
        </div>
      </div>
    </div>
  );
};

ElectedOfficial.propTypes = {
  theOffice: PropTypes.object,
};

export default ElectedOfficial;
