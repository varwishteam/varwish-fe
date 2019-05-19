import React from 'react';
import { Link } from 'react-router-dom';

import { AuthButton, RegRedirectButton } from '../components';

/**
 * Is displayed to NOT logged in users, has no navigation menu
 */
const NotLoggedLayout = props => {
  const { children } = props;
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">VarWish</span>
        </Link>
        <div className="navbar-authbuttons">
          <AuthButton type="button" />
          <RegRedirectButton type="button" />
        </div>
      </nav>
      {children}
    </>
  );
};

export default NotLoggedLayout;
