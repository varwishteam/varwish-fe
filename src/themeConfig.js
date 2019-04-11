import { createMuiTheme } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import deepOrange from '@material-ui/core/colors/deepOrange';

/**
 * Material UI theme configuration
 */
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: deepOrange
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
