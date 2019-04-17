import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logIn } from '../utils/api';
import './login/Login.scss';

/**
 * Login page, a simple form with these fields: Username or Email, Password
 * and a RememberMe checkbox
 */
export default class Login extends Component {
  state = {
    username: '',
    password: '',
    rememberMe: 'yes',
    redirectToReferrer: false
  };

  login = e => {
    e.preventDefault();
    logIn(this.state.username, this.state.password)
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
    const {
      username,
      password,
      rememberMe,
      errorMessage,
      redirectToReferrer
    } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="wrapper">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>

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

          <div className="checkbox-inline">
            <label htmlFor="rememberMe">
              <input
                type="checkbox"
                id="rememberMe"
                value={rememberMe}
                onChange={this.handleChange('rememberMe')}
              />
              Remember me
            </label>
          </div>

          <button
            className="btn btn-lg btn-primary btn-block btn-outline"
            onClick={this.login}
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}
