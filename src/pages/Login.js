import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logIn } from '../actions';
import './login/Login.scss';
import { connect } from 'react-redux';

/**
 * Login page, a simple form with these fields: Username or Email, Password
 * and a RememberMe checkbox
 */
class Login extends Component {
  state = {
    username: '',
    password: '',
    rememberLogin: true,
    redirectToReferrer: false,
    loginErrors: [],
  };

  login = e => {
    e.preventDefault();
    this.props.dispatchLogIn({ ...this.state }).catch(error => {
      this.setState({ loginErrors: [...Object.values(error)] });
    });
    // this.setState({ redirectToReferrer: true });
  };

  handleChange = name => event => {
    this.setState({
      [name]:
        name === 'rememberLogin' ? event.target.checked : event.target.value,
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const {
      username,
      password,
      rememberLogin,
      redirectToReferrer,
      loginErrors,
    } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="wrapper">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>

          {loginErrors.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {loginErrors.map((error, i) => (
                <span key={i}>{error}</span>
              ))}
            </div>
          )}

          <div className="bmd-form-group">
            <input
              type="text"
              className="form-control"
              id="username"
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
            <label htmlFor="rememberLogin">
              <input
                type="checkbox"
                id="rememberLogin"
                checked={rememberLogin}
                onChange={this.handleChange('rememberLogin')}
              />
              Remember me
            </label>
          </div>

          <button
            type="button"
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

const mapDispatchToProps = dispatch => ({
  dispatchLogIn: (username, password) => dispatch(logIn(username, password)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
