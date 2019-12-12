import { Home, NotFound } from "./pages/";
import { Route, HashRouter as Router, Switch } from "react-router-dom";

import React from 'react';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
