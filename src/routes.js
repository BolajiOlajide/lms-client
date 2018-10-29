import React from 'react';

import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

// pages
import LoanPage from './pages/Loan.page';
import AuthPage from './pages/Auth.page';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/" component={LoanPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
