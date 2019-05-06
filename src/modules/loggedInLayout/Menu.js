import React from 'react';
import { Link } from 'react-router-dom';
import { AuthButton } from '../../components';
import { withRouter } from 'react-router-dom';

/**
 * The content for the drawer
 * In the first list are main navigation routes
 * The second list contains user/account/profile centric actions (Log Out etc.)
 */
function Menu({ location }) {
  return (
    <div className="d-flex flex-column justify-content-between flex-grow-1">
      <ul className="nav flex-column border-bottom">
        <li className="nav-item">
          <Link className="nav-link p-0" to="/">
            <button
              type="button"
              className={`btn btn-primary btn-block list-group-item ${(location.pathname ===
                '/' ||
                location.pathname.includes('/wishlists')) &&
                'active'}`}
              data-toggle="drawer"
              data-target="#main-drawer"
            >
              Wishlists
            </button>
          </Link>
          <Link className="nav-link p-0" to="/categories">
            <button
              type="button"
              className={`btn btn-primary btn-block list-group-item ${location.pathname.includes(
                '/categories',
              ) && 'active'}`}
              data-toggle="drawer"
              data-target="#main-drawer"
            >
              Categories
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

export default withRouter(Menu);
