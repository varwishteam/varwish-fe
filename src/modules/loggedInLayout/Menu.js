import React from 'react';
import { Link } from 'react-router-dom';
import { AuthButton } from '../../components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * The content for the drawer
 * In the first list are main navigation routes
 * The second list contains user/account/profile centric actions (Log Out etc.)
 */
function Menu({ location, wishlists }) {
  return (
    <div className="d-flex flex-column justify-content-between flex-grow-1">
      <ul className="nav flex-column border-bottom">
        <li className="nav-item">
          <Link className="nav-link p-0" to="/">
            <button
              type="button"
              className={`btn btn-primary btn-block list-group-item ${location.pathname ===
                '/' && 'active'}`}
              data-toggle="drawer"
              data-target="#main-drawer"
            >
              Wishlists
            </button>
          </Link>
          <ul className="nav flex-column ml-4">
            {wishlists
              .sort((a, b) => {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
              })
              .map(wishlist => (
                <li key={wishlist.id}>
                  <Link
                    className="nav-link p-0"
                    to={`/wishlists/${wishlist.id}`}
                  >
                    <button
                      type="button"
                      className={`btn btn-primary btn-block list-group-item ${location.pathname.includes(
                        `/wishlists/${wishlist.id}`,
                      ) && 'active'}`}
                      data-toggle="drawer"
                      data-target="#main-drawer"
                    >
                      {wishlist.name}
                    </button>
                  </Link>
                </li>
              ))}
          </ul>
        </li>
        <li className="nav-item border-top">
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

const mapStateToProps = state => ({
  wishlists: state.wishlists,
});

export default connect(
  mapStateToProps,
  null,
)(withRouter(Menu));
