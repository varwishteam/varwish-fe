import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { register } from '../utils/api';
import './login/Login.scss';

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
  };

  register = e => {
    e.preventDefault();
    register(...this.state)
      .then(() => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(error => {
        this.setState({ errorMessage: error });
      });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { username, password, errorMessage, redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="wrapper">
        <form className="form-register">
          <h1 className="h3 mb-3 font-weight-normal">Register form</h1>

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="bmd-form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Username or Email"
              value={username}
              onChange={this.handleChange('username')}
            />
          </div>

          <div className="bmd-form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange('password')}
            />
          </div>

          <button
            className="btn btn-lg btn-primary btn-block btn-outline"
            onClick={e => e.preventDefault()}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
