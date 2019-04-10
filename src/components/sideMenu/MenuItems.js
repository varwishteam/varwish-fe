import React from 'react';
import {
  Hidden,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  List
} from '@material-ui/core';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import AuthButton from '../AuthButton';
import '../../styles/Link.scss';

export default function MenuItems({ classes }) {
  return (
    <div>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <List>
        <Link to="/" className="link--no-underline">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Wishlists" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <AuthButton type="list-item" />
    </div>
  );
}
