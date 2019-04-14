import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import WishlistDetail from '../pages/WishlistDetail';
import Layout from './Layout';

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
  return (
    <>
      <Switch>
        {!isLoggedIn && <Route exact path="/" component={Home} />}
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" component={SignUp} /> */}
        <Layout>
          {isLoggedIn && <Route exact path="/" component={Home} />}
          <PrivateRoute
            path="/wishlists/:wishlistId"
            component={WishlistDetail}
            isLoggedIn={isLoggedIn}
          />
          {/* <PrivateRoute
        path="/wishlists/:wishlistId/items/:itemId"
        component={ItemDetail}
      /> */}
        </Layout>
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
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(Routes);
