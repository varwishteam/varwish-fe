import {
  Avatar,
  Button,
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from '../utils/api';
import './Login.scss';

/**
 * Login page
 */
export default class Login extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: false,
    redirectToReferrer: false
  };

  // FIXME: Just for testing
  login = e => {
    e.preventDefault();
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="login-container">
        <Paper className="login-box">
          <Avatar className="login-box__avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className="login-box__title">
            Log in to VarWish
          </Typography>
          <form className="login-form">
            <TextField
              id="login-form__email"
              className="login-form__email"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="login-form__password"
              className="login-form__password"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
            <FormControlLabel
              className="login-form__remember-me"
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="login-form__log-in"
              onClick={this.login}
            >
              Log in
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {};
