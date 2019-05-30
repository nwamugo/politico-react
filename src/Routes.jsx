import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Signup from './components/containers/Signup/Signup';
import Login from './components/containers/Login/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
