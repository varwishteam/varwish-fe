import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import WishlistDetail from '../pages/WishlistDetail';
import SideMenu from './SideMenu';

function Routes({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Switch>
        {!isLoggedIn ? <Route exact path="/" component={Home} /> : null}
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" compoennt={SignUp} /> */}
        <SideMenu>
          {/* <Switch> */}
          {isLoggedIn ? <Route exact path="/" component={Home} /> : null}
          <PrivateRoute
            path="/wishlists/:wishlistId"
            component={WishlistDetail}
            isLoggedIn={isLoggedIn}
          />
          {/* <PrivateRoute
        path="/wishlists/:wishlistId/items/:itemId"
        component={ItemDetail}
      /> */}
          {/* </Switch> */}
        </SideMenu>
      </Switch>
    </React.Fragment>
  );
}

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
