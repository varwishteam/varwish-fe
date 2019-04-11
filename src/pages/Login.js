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
import fakeAuth from '../utils/api';
import './Login.scss';

/**
 * Login page
 */
export default class Login extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: 'yes',
    redirectToReferrer: false
  };

  // FIXME: Just for testing
  login = e => {
    e.preventDefault();
    fakeAuth
      .authenticate(this.state.email, this.state.password)
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
    const { redirectToReferrer } = this.state;

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
              value={this.state.email}
              onChange={this.handleChange('email')}
            />

            <TextField
              id="login-form__password"
              className="login-form__password"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
            <FormControlLabel
              className="login-form__remember-me"
              control={
                <Checkbox
                  value={this.state.rememberMe}
                  onChange={this.handleChange('rememberMe')}
                  color="primary"
                />
              }
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
