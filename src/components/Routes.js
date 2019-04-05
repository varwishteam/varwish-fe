import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </React.Fragment>
  );
}
