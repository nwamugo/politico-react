import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';

// Components
import FormComponent from '../../presentationals/FormComponent/FormComponent';

// actions
import { signupUser } from '../../../store/modules/auth';

class Signup extends Component {
  state = {
    userData: {
      first_name: '',
      last_name: '',
      phone_number: null,
      email: '',
      password: '',
      username: '',
    },
    isChecked: false,
    errorMessage: '',
    freshFields: true,
  };

  validator = new SimpleReactValidator();

  userInputHandler = event => {
    this.setState({
      userData: {
        ...this.state.userData,
        [event.target.name]: event.target.value,
      },
      isChecked: event.target.checked,
    });
  };

  submitHandler = async event => {
    event.preventDefault();

    await this.validator.showMessages();

    if (!this.validator.allValid()) {
      return this.setState({
        freshFields: false,
      });
    }
    console.log('hello valid validator');
    const {
      history,
      location: { state },
    } = this.props;

    let redirectUrl = '';

    state ? (redirectUrl = state.from.pathname) : (redirectUrl = '/');

    await this.props.signupUser(this.state.userData, history, redirectUrl);
    this.setState({
      errorMessage: this.props.auth.errorResponse[0],
    });
  };

  render() {
    console.log('we are in signup', this.props.auth.isLoading);
    return (
      <div>
        <FormComponent
          state={this.state}
          submitHandler={this.submitHandler}
          userInputHandler={this.userInputHandler}
          validator={this.validator}
          authMode={this.props.authMode}
          isLoading={this.props.auth.isLoading}
        />
      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object,
  location: PropTypes.object,
  authMode: PropTypes.string,
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { signupUser },
)(withRouter(Signup));
