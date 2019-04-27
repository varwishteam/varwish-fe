import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home, Login, NotFound, SignUp, WishlistDetail } from '../pages';
import LoggedInLayout from './LoggedInLayout';
import NotLoggedLayout from './NotLoggedLayout';

/**
 * All first-level routes go here
 * The HomePage for guest(not authenticated) users and Login/Signup pages are standalone
 * All other pages have the drawer/NavBar added by the Layout component
 *
 * PrivateRoutes are protected from non-authenticated users, redirect to Login page
 *
 * @prop {*} isLoggedIn Informatin about user's logged-in state
 */
function Routes({ isLoggedIn }) {
  if (!isLoggedIn) {
    return (
      <NotLoggedLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </NotLoggedLayout>
    );
  }

  return (
    <LoggedInLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={redirectToHome} />
        <Route path="/sign-up" component={redirectToHome} />
        <Route exact path="/wishlists" component={redirectToHome} />
        <PrivateRoute
          path="/wishlists/:wishlistId"
          component={WishlistDetail}
          isLoggedIn={isLoggedIn}
        />
        {/* <PrivateRoute
          path="/wishlists/:wishlistId/items/:itemId"
          component={ItemDetail}
        /> */}
        <Route component={NotFound} />
      </Switch>
    </LoggedInLayout>
  );
}

/** Redirect to Home page if a logged in user navigates to /login or /sign-up */
const redirectToHome = () => <Redirect to={{ pathname: '/' }} />;

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
