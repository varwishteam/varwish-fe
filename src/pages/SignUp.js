import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { signUp, USER } from '../actions';
import './sign-up/SignUp.scss';
import { connect } from 'react-redux';

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
    redirectToReferrer: false,
  };

  componentWillMount() {
    this.props.resetSignUpErrors();
  }

  handleSignUp = e => {
    e.preventDefault();
    this.props.dispatchSignUp({ ...this.state });
    this.setState({ redirectToReferrer: true });
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
      redirectToReferrer,
    } = this.state;
    const { signUpError } = this.props;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="wrapper">
        <form className="form-signup">
          <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>

          {signUpError && (
            <div className="alert alert-danger" role="alert">
              {signUpError}
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
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signUpError: state.userReducer.signUpError,
});

const mapDispatchToProps = dispatch => ({
  dispatchSignUp: data => dispatch(signUp(data)),
  resetSignUpErrors: () => dispatch({ type: USER.SIGN_UP.RESET_ERRORS }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
