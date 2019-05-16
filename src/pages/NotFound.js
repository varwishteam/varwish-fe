import React from 'react';
import { Link, withRouter } from 'react-router-dom';

/**
 * Display a 404 message
 *
 * @param {Object} obj
 * @param {string} obj.location The location that the user was trying to access
 */
function NotFound({ location }) {
  return (
    <div className="no-content d-flex flex-column align-items-center">
      <h1>404 - Not found</h1>
      <p>There's nothing on this path "{location.pathname}"</p>
      <Link to="/">
        <button className="btn btn-primary">Go to homepage</button>
      </Link>
      <img
        src="/img/undraw_not_found_60pq.svg"
        alt="Not found"
        aria-hidden="true"
        className="no-content__img"
      />
    </div>
  );
}

export default withRouter(NotFound);
