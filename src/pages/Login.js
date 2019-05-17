import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logIn } from '../actions';
import './login/Login.scss';
import { connect } from 'react-redux';
import { SpinningLoader, FormField } from '../components';
import { reduxForm, SubmissionError } from 'redux-form';

/**
 * Login page, a simple form with these fields: Username or Email, Password
 * and a RememberMe checkbox
 */
class Login extends Component {
  state = {
    redirectToReferrer: false,
    loginErrors: [],
  };

  login = data => {
    return this.props.dispatchLogIn(data).catch(error => {
      window.$('.login-form').on('webkitAnimationEnd', () => {
        window.$('.login-form').removeClass('shake');
      });
      window.$('.login-form').addClass('shake');
      this.setState({
        loginErrors: [...Object.values(error)],
      });
      throw new SubmissionError(error);
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, loginErrors } = this.state;
    const { handleSubmit, submitting, pristine, invalid } = this.props;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="login wrapper">
        <img
          src="/varwish-fe/img/undraw_authentication_fsn5.svg"
          alt="Authentication"
          aria-hidden="true"
          className="login__img d-none d-md-block"
        />
        <form
          id="loginForm"
          onSubmit={handleSubmit(this.login)}
          className="login-form"
        >
          <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>

          {loginErrors.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {loginErrors.map((error, i) => (
                <span key={i}>{error}</span>
              ))}
            </div>
          )}

          <FormField name="username" type="text" label="Username" />
          <FormField name="password" type="password" label="Password" />
          <FormField name="rememberLogin" type="checkbox" label="Remember me" />

          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block btn-outline mt-3"
            disabled={pristine || invalid || submitting}
          >
            {submitting ? <SpinningLoader /> : 'Log In'}
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLogIn: (username, password) => dispatch(logIn(username, password)),
});

const validate = values => {
  const errors = {};
  if (!values.username || values.username.trim().length < 1)
    errors.username = 'Required';
  if (!values.password || values.password.trim().length < 1)
    errors.password = 'Required';
  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate,
})(
  connect(
    null,
    mapDispatchToProps,
  )(Login),
);
