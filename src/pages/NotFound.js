import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function NotFound({ location }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>404 - Not found</h1>
      <p>There's nothing on this path "{location.pathname}"</p>
      <Link to="/">
        <button className="btn btn-primary">Go to homepage</button>
      </Link>
    </div>
  );
}

export default withRouter(NotFound);
