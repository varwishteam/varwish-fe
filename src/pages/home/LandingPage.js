import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage/LandingPage.scss';

export default function LandingPage() {
  return (
    <>
      <div className="jumbotron">
        <p className="text-muted">Welcome to</p>
        <h1 className="display-2">VarWish</h1>
        <p className="lead">The variable wishlist</p>
        <hr className="my-4" />
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/sign-up" role="button">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="about p-4">
        <h2>About</h2>
        <p>
          This app is a part of a student project @FIT @CVUT. The application is
          currenly in developement phase and
          <strong> could contain some bugs</strong>. You have been warned.
        </p>
      </div>
    </>
  );
}
