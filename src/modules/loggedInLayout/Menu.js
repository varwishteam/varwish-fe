import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from '../../components/AuthButton';

/**
 * The content for the drawer
 * In the first list are main navigation routes
 * The second list contains user/account/profile centric actions (Log Out etc.)
 */
export default function Menu() {
  return (
    <div className="d-flex flex-column justify-content-between flex-grow-1">
      <ul className="nav flex-column border-bottom">
        <li className="nav-item">
          <Link className="nav-link p-0" to="/">
            <button
              type="button"
              className="btn btn-primary btn-block list-group-item"
              data-toggle="drawer"
              data-target="#main-drawer"
            >
              Wishlists
            </button>
          </Link>
        </li>
      </ul>

      <ul className="nav flex-column border-top">
        <li>
          <AuthButton />
        </li>
      </ul>
    </div>
  );
}
