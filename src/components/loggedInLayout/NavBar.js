import React from 'react';

/**
 * Top navigation bar as known from native mobile apps
 * Is visible only on mobile devices
 */
export default function NavBar() {
  return (
    <>
      <div className="navbar navbar-light bg-faded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="drawer"
          data-target="#main-drawer"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle drawer</span>
          <i className="material-icons">menu</i>
        </button>
        <ul className="nav navbar-nav">
          <li className="nav-item">VarWish</li>
        </ul>
      </div>
    </>
  );
}
