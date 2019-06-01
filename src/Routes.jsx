import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={LandingPage} />
      <Route exact path="/login" component={LandingPage} />
    </Switch>
  );
};

export default Routes;
