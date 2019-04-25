import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { SpinningLoader } from '../components';
import { register } from '../utils/api';
import './register/Register.scss';

/**
 * Login page, a simple form with these fields: Username or Email, Password
 * and a RememberMe checkbox
 */

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    passwordSet: '',
    passwordConfirm: '',
    redirectToReferrer: false,
    errors: {},
    isLoading: false,
  };

  handleRegister = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    register({ ...this.state }).then(response => {
      if (response.ok) {
        return this.setState({ redirectToReferrer: true, isLoading: false });
      }
      return response.json().then(data => {
        this.setState({ errors: { ...data }, isLoading: false });
      });
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const {
      username,
      passwordSet,
      passwordConfirm,
      email,
      firstName,
      lastName,
      errors,
      redirectToReferrer,
      isLoading,
    } = this.state;

    const {
      username: usernameError,
      email: emailError,
      password1: passwordSetError,
      password2: passwordConfirmError,
      first_name: firstNameError,
      last_name: lastNameError,
    } = errors;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="wrapper">
        <form className="form-register">
          <h1 className="h3 mb-3 font-weight-normal">Register form</h1>

          <div className="bmd-form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.handleChange('username')}
            />
            {usernameError && (
              <div className="form-register--error-message-input alert alert-danger">
                {usernameError}
              </div>
            )}
          </div>

          <div className="bmd-form-group">
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={this.handleChange('email')}
            />
            {emailError && (
              <div className="form-register--error-message-input alert alert-danger">
                {emailError}
              </div>
            )}
          </div>

          <div className="bmd-form-group">
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="First name"
              value={firstName}
              onChange={this.handleChange('firstName')}
            />
            {firstNameError && (
              <div className="form-register--error-message-input alert alert-danger">
                {firstNameError}
              </div>
            )}
          </div>

          <div className="bmd-form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Last name"
              value={lastName}
              onChange={this.handleChange('lastName')}
            />
            {lastNameError && (
              <div className="form-register--error-message-input alert alert-danger">
                {lastNameError}
              </div>
            )}
          </div>

          <div className="bmd-form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Type in yout password"
              value={passwordSet}
              onChange={this.handleChange('passwordSet')}
            />
            {passwordSetError && (
              <div className="form-register--error-message-input alert alert-danger">
                {passwordSetError}
              </div>
            )}
          </div>

          <div className="bmd-form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Confirm a password"
              value={passwordConfirm}
              onChange={this.handleChange('passwordConfirm')}
            />
            {passwordConfirmError && (
              <div className="form-register--error-message-input alert alert-danger">
                {passwordConfirmError}
              </div>
            )}
          </div>

          <button
            className="btn btn-lg btn-primary btn-block btn-outline mt-3"
            onClick={this.handleRegister}
          >
            {isLoading ? <SpinningLoader /> : 'Register'}
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
