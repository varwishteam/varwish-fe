import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SpinningLoader } from '../components';
import { signUp, USER } from '../actions';
import './signUp/SignUp.scss';

/**
 * Sign up page
 */
class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    passwordSet: '',
    passwordConfirm: '',
    errors: {},
    signUpErrors: [],
  };

  componentWillMount() {
    this.props.resetSignUpErrors();
  }

  handleSignUp = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.props
      .dispatchSignUp({ ...this.state })
      .then(() => {
        this.setState({ isLoading: false });
      })
      .catch(error => {
        this.setState({
          signUpErrors: [...Object.values(error)],
          isLoading: false,
        });
      });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const {
      username,
      passwordSet,
      passwordConfirm,
      email,
      firstName,
      lastName,
      signUpErrors,
      isLoading,
    } = this.state;

    return (
      <div className="signup wrapper">
        <img
          src="/varwish-fe/img/undraw_authentication_fsn5.svg"
          alt="Authentication"
          aria-hidden="true"
          className="signup__img d-none d-md-block"
        />
        <form className="signup-form">
          <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>

          {!!signUpErrors.length && (
            <div className="alert alert-danger" role="alert">
              Invalid values
            </div>
          )}

          <div className="bmd-form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.handleChange('username')}
            />
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
          </div>

          <div className="bmd-form-group">
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Last name"
              value={lastName}
              onChange={this.handleChange('lastName')}
            />
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
          </div>

          <div className="bmd-form-group">
            <input
              type="password"
              className="form-control"
              id="password-confirm"
              placeholder="Confirm a password"
              value={passwordConfirm}
              onChange={this.handleChange('passwordConfirm')}
            />
          </div>

          <button
            type="button"
            className="btn btn-lg btn-primary btn-block btn-outline mt-3"
            onClick={this.handleSignUp}
          >
            {isLoading ? <SpinningLoader /> : 'Sign-Up'}
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSignUp: data => dispatch(signUp(data)),
  resetSignUpErrors: () => dispatch({ type: USER.SIGN_UP.RESET_ERRORS }),
});

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
