import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Meconfig from './meconfig';
import MeconfigDetail from './meconfig-detail';
import MeconfigUpdate from './meconfig-update';
import MeconfigDeleteDialog from './meconfig-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MeconfigUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MeconfigUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MeconfigDetail} />
      <ErrorBoundaryRoute path={match.url} component={Meconfig} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MeconfigDeleteDialog} />
  </>
);

export default Routes;
