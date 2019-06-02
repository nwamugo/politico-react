import React from 'react';
import PropTypes from 'prop-types';

const ProfileDownSection = ({ userData }) => {
  const [
    {
      user: { first_name, last_name, email, phone_number },
    },
  ] = userData;
  return (
    <div
      data-test="ProfileDownSectionComponent"
      className="user-profile__lower"
    >
      <div className="parcel-analysis same-line">
        <h4 className="property-name user-property">Name: &nbsp;</h4>
        <span className="property-value user-value">
          {first_name} &nbsp; {last_name}
        </span>
      </div>
      <div className="parcel-analysis same-line">
        <h4 className="property-name user-property">E-mail: &nbsp;</h4>
        <span className="property-value user-value">{email}</span>
      </div>
      <div className="parcel-analysis same-line">
        <h4 className="property-name user-property">Phone: &nbsp;</h4>
        <span className="property-value user-value">{phone_number}</span>
      </div>
    </div>
  );
};

ProfileDownSection.propTypes = {
  userData: PropTypes.array,
};

export default ProfileDownSection;
