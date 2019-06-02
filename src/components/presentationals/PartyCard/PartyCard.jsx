import React from 'react';
import PropTypes from 'prop-types';

const PartyCard = ({ name, headquarters, logoUrl }) => {
  console.log('where the', name);
  return (
    <div className="col-1-of-4 box">
      <img src={logoUrl} alt="Party Logo" />
      <h3 className="party-name">{name}</h3>
      <div className="party-size">
        <i className="ion-ios-person icon-small" />
        {headquarters}
      </div>
      <div className="party-size">
        <i className="ion-ios-star icon-small" />
        60 political offices
      </div>
      <div className="party-size">
        <i className="ion-social-twitter icon-small" />
        <a href="#">View details</a>
      </div>
    </div>
  );
};

PartyCard.propTypes = {
  name: PropTypes.string,
  headquarters: PropTypes.string,
  logoUrl: PropTypes.string,
};

export default PartyCard;
