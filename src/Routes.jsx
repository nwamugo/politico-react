import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Profile from './pages/Profile/Profile';
import Parties from './pages/Parties/Parties';
import ElectionResults from './pages/ElectionResults/ElectionResults';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/signup" component={LandingPage} />
      <Route path="/login" component={LandingPage} />
      <Route path="/profile" component={Profile} />
      <Route path="/parties" component={Parties} />
      <Route path="/results" component={ElectionResults} />
    </Switch>
  );
};

export default Routes;
