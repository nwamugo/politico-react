import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import NavBar from '../../components/presentationals/NavBar/NavBar';
import ProfileTopSection from '../../components/presentationals/ProfileTopSection/ProfileTopSection';
import ProfileDownSection from '../../components/presentationals/ProfileDownSection/ProfileDownSection';

//actions
import { getAllOfficesRequest } from '../../store/modules/offices';

class Profile extends Component {
  user = JSON.parse(localStorage.user);

  componentDidMount() {
    this.props.getAllOfficesRequest();
    console.log(this.user);
  }

  buttonText = {
    first: 'View Aspirants',
    second: 'View Political Parties',
    third: 'View Election Results',
  };
  render() {
    return (
      <div className="profile-page">
        {/* {isLoading && (
          <Dimmer active>
            <Loader />
          </Dimmer>
        )} */}
        <header className="profile-header">
          <NavBar
            className="navs"
            buttonText={this.buttonText}
            buttonLeads3="/results"
          />
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
  getAllOfficesRequest: PropTypes.func,
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

export default connect(
  null,
  { getAllOfficesRequest },
)(Profile);
