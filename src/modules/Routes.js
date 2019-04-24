import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home, Login, NotFound, Register, WishlistDetail } from '../pages';
import { LoggedInLayout, NotLoggedLayout } from '.';

/**
 * All first-level routes go here
 * The HomePage for guest(not authenticated) users and Login/Signup pages are standalone
 * All other pages have the drawer/NavBar added by the Layout component
 *
 * PrivateRoutes are protected from non-authenticated users, redirect to Login page
 *
 * @prop {*} isLoggedIn Informatin about user's logged-in state
 */

const renderRouter = isLoggedIn => {
  if (!isLoggedIn) {
    return (
      <NotLoggedLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />{' '}
        </Switch>{' '}
      </NotLoggedLayout>
    );
  }

  return (
    <LoggedInLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute
          path="/wishlists/:wishlistId"
          component={WishlistDetail}
          isLoggedIn={isLoggedIn}
        />
        {/* <PrivateRoute
  path="/wishlists/:wishlistId/items/:itemId"
  component={ItemDetail}
/> */}
      </Switch>
    </LoggedInLayout>
  );
};

function Routes({ isLoggedIn }) {
  return (
    <>
      <Switch>
        {renderRouter(isLoggedIn)}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

/**
 * This component automatically redirects unauthenticated users to the Login page
 */
function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(
  mapStateToProps,
  null,
)(Routes);
