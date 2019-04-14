import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../utils/api';
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
    backendUrl: '',
    redirectToReferrer: false
  };

  // FIXME: Just for testing
  login = e => {
    e.preventDefault();
    fakeAuth
      .authenticate(
        this.state.username,
        this.state.password,
        this.state.backendUrl
      )
      .then(() => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(error => {
        this.setState({ errorMessage: error });
      });
  };

  loginSkipServer = e => {
    e.preventDefault();
    fakeAuth
      .authenticateSkipServer(
        this.state.username,
        this.state.password,
        this.state.backendUrl
      )
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
      backendUrl,
      redirectToReferrer
    } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="wrapper">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>

          <div className="bmd-form-group">
            <input
              type="text"
              className="form-control"
              id="backend-url"
              placeholder="Backend URL (just for testing)"
              value={backendUrl}
              onChange={this.handleChange('backendUrl')}
            />
            <small id="urlHelp" className="form-text text-muted">
              E.g. http://127.0.0.1:8000/rest-auth/login
            </small>
          </div>

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
          <button
            className="btn btn-lg btn-primary btn-block btn-outline"
            onClick={this.loginSkipServer}
          >
            Log in skip server (no auth)
          </button>
        </form>
      </div>
    );
  }
}
