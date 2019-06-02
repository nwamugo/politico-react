import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import NavBar from '../../components/presentationals/NavBar/NavBar';
import ProfileTopSection from '../../components/presentationals/ProfileTopSection/ProfileTopSection';
import ProfileDownSection from '../../components/presentationals/ProfileDownSection/ProfileDownSection';

class Profile extends Component {
  user = JSON.parse(localStorage.user);

  componentDidMount() {
    console.log(this.user);
  }
  render() {
    return (
      <div className="profile-page">
        {/* {isLoading && (
          <Dimmer active>
            <Loader />
          </Dimmer>
        )} */}
        <header className="profile-header">
          <NavBar className="navs" />
        </header>

        <main className="user-pf">
          <ProfileTopSection userData={this.user} />
          <div className="user-profile__container">
            <ProfileDownSection userData={this.user} />
          </div>
        </main>
      </div>
    );
  }
}

Profile.propTypes = {
  getUserProfileRequest: PropTypes.func,
  profile: PropTypes.object,
  isLoading: PropTypes.bool,
};

// const mapStateToProps = state => {
//   return {
//     profile: {
//       first_name: state.profile.first_name,
//       last_name: state.profile.last_name,
//       passport_url: state.profile.passport_url,
//       email: state.profile.email,
//       is_admin: state.profile.is_admin,
//     },
//     isLoading: state.profile.isLoading,
//   };
// };

export default Profile;
