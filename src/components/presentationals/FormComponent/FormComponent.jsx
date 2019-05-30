import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FormComponent = ({
  submitHandler,
  userInputHandler,
  state,
  validator,
}) => {
  console.log('inside Form component');
  const { isChecked, userData } = state;

  return (
    <form onSubmit={submitHandler} className="form" data-test="FormComponent">
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="First Name"
          onChange={userInputHandler}
          name="first_name"
        />
        <span className="validationMessage">
          {validator.message(
            'first_name',
            userData.first_name,
            'required|alpha',
          )}
        </span>
        <label htmlFor="first_name" className="form__label">
          First Name
        </label>
      </div>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Last Name"
          onChange={userInputHandler}
          name="last_name"
        />
        <span className="validationMessage">
          {validator.message('last_name', userData.last_name, 'required|alpha')}
        </span>
        <label htmlFor="last_name" className="form__label">
          Last Name
        </label>
      </div>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Phone Number"
          onChange={userInputHandler}
          name="phone_number"
        />
        <span className="validationMessage">
          {validator.message(
            'phone_number',
            userData.phone_number,
            'required|integer|min:4',
          )}
        </span>
        <label htmlFor="phoneNumber" className="form__label">
          Phone Number
        </label>
      </div>

      <div className="form__group">
        <input
          type="email"
          className="form__input"
          placeholder="Email address"
          onChange={userInputHandler}
          name="email"
        />
        <span className="validationMessage">
          {validator.message('email', userData.email, 'required|email')}
        </span>
        <label htmlFor="email" className="form__label email-label">
          Email address
        </label>
      </div>

      <div className="form__group">
        <input
          type="password"
          className="form__input"
          placeholder="Password"
          onChange={userInputHandler}
          name="password"
        />
        <span className="validationMessage">
          {validator.message('password', userData.password, 'required|min:4')}
        </span>
        <label htmlFor="password" className="form__label">
          Password
        </label>
      </div>

      <div className="form__group">
        <div className="form__checkbox-group">
          <input
            type="checkbox"
            className="form__checkbox-input"
            id="terms"
            onChange={userInputHandler}
            name="isChecked"
          />
          <span className="validationMessage">
            {validator.message('checkbox', isChecked, 'accepted')}
          </span>
          <label htmlFor="terms" className="form__checkbox-label">
            <span className="form__checkbox-button" />I accept the{' '}
            <a href="#" className="link-decor">
              Terms of Service and Privacy Policy
            </a>
          </label>
        </div>
      </div>
      <div className="form__group">
        <button
          id="modalSignup"
          className="btn btn-golden u-margin-right-small"
          onClick={submitHandler}
        >
          Sign Up &rarr;
        </button>
      </div>
      <div className="have-account u-margin-right-small">
        Already have an account?{' '}
        <Link className="link-decor" id="change-modals1" to="/login">
          Log in &rarr;
        </Link>
      </div>
    </form>
  );
};

FormComponent.propTypes = {
  submitHandler: PropTypes.func,
  userInputHandler: PropTypes.func,
  state: PropTypes.object,
  validator: PropTypes.object,
};

export default FormComponent;
