import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

// Components
import FormComponent from '../../presentationals/FormComponent/FormComponent';

//Reducer
import { loginUser } from '../../../store/modules/auth';

export class Login extends Component {
  state = {
    userData: {
      email: '',
      password: '',
    },
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
    });
  };

  submitHandler = async event => {
    event.preventDefault();
    console.log('I clicked submit button');

    this.validator.showMessages();

    if (!this.validator.allValid()) {
      return this.setState({
        freshFields: false,
      });
    }

    const { userData } = this.state;

    // let redirectUrl;

    // state ? (redirectUrl = state.from.pathname) : (redirectUrl = '/');

    const {
      history,
      // location: { state },
    } = this.props;

    await this.props.loginUser(this.state.userData, history);
    this.setState({
      errorMessage: this.props.auth.errorResponse[0],
    });
    this.setState({
      userData: {
        ...userData,
        password: '',
      },
    });
  };
  render() {
    return (
      <div>
        <FormComponent
          state={this.state}
          submitHandler={this.submitHandler}
          userInputHandler={this.userInputHandler}
          validator={this.validator}
          authMode={this.props.authMode}
        />
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  authMode: PropTypes.string,
  history: PropTypes.object,
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { loginUser },
)(withRouter(Login));
