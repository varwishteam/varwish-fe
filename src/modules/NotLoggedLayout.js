import React from 'react';

import { AuthButton, RegRedirectButton } from '../components';

const NotLoggedLayout = props => {
  const { children } = props;
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">VarWish</span>
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
