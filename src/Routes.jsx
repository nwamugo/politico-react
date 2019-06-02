import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Profile from './pages/Profile/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/signup" component={LandingPage} />
      <Route path="/login" component={LandingPage} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
