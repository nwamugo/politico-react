import React from 'react';

import ProfilePlaceHolder from '../../../resources/img/profile-placeholder.png';

const ProfileTopSection = () => {
  return (
    <div data-test="ProfileTopSectionComponent" className="user-profile__outer">
      <div className="user-profile__container">
        <figure className="profile-pic">
          <img
            src={ProfilePlaceHolder}
            alt="The author of this site"
            className="profile-img"
          />
          <figcaption className="" />
        </figure>
        <div className="user-zone">
          <div className="user-classification">
            <svg className="user-medal">
              <use xlinkHref="resources/img/sprite.svg#icon-medal" />
            </svg>
            <h3 className="user-kind">Citizen</h3>
          </div>
          <div className="user-pudding">
            {/* <button href="aspirants.html" className="btn btn-run new__order">
              Run for Office
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTopSection;
