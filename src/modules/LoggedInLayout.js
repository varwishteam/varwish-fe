import React from 'react';
import NavBar from './loggedInLayout/NavBar';
import Menu from './loggedInLayout/Menu';

/**
 * Layout with side drawer and navbar on mobile
 * The drawer is permanently vidible on desktop and cannot be hidden by the user
 * and hidden by default on mobile and can be triggered by the "hamburger" button
 * in the NavBar
 *
 * @param {*} children DOM Node containing the main content
 */
export default function LoggedInLayout({ children }) {
  return (
    <div className="position-relative vw-100 vh-100">
      <div className="bmd-layout-container bmd-drawer-f-l bmd-drawer-in-lg-up bmd-drawer-overlay-md-down">
        <header className="bmd-layout-header d-lg-none">
          <NavBar />
        </header>
        <div
          id="main-drawer"
          className="bmd-layout-drawer bg-faded"
          aria-expanded="false"
          aria-hidden="true"
        >
          <header className="d-flex flex-column align-items-center">
            <i className="material-icons md-48">list_alt</i>
            <span className="h3 navbar-brand font-weight-bold">VarWish</span>
          </header>
          <Menu />
        </div>
        <main className="bmd-layout-content">
          <div className="container-fluid p-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
