import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

import './Login.scss';

/**
 * Login page
 */
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false
    };
  }

  render() {
    return (
      <div className="login-container">
        <Button
          component={Link}
          to="/"
          style={{ position: 'fixed', top: '1em', left: '1em' }}
        >
          <ChevronLeft />
          Back
        </Button>
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
