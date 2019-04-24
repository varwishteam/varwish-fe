import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logIn, USER } from '../actions';
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
    rememberMe: 'yes',
  };

  componentWillMount() {
    this.props.resetLoginErrors();
  }

  login = e => {
    e.preventDefault();
    this.props.dispatchLogIn(this.state.username, this.state.password);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { username, password, rememberMe } = this.state;
    const { loginError, isLoggedIn } = this.props;

    if (isLoggedIn) return <Redirect to={from} />;

    return (
      <div className="wrapper">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>

          {loginError && (
            <div className="alert alert-danger" role="alert">
              {JSON.stringify(loginError.error)}
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

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  loginError: state.userReducer.loginError,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogIn: (username, password) => dispatch(logIn(username, password)),
  resetLoginErrors: () => dispatch({ type: USER.LOGIN.RESET_ERRORS }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
