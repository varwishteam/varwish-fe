import React from 'react';

import './spinningLoader/SpinningLoader.scss';

/**
 * Renders a spinning animation, use to let the user know, that the app is waiting
 * for someting (e.g. response from server)
 */
const SpinningLoader = () => (
  <div className="spinner">
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </div>
);

export default SpinningLoader;
