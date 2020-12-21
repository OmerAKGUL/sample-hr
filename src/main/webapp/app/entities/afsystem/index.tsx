import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afsystem from './afsystem';
import AfsystemDetail from './afsystem-detail';
import AfsystemUpdate from './afsystem-update';
import AfsystemDeleteDialog from './afsystem-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfsystemUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfsystemUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfsystemDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afsystem} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfsystemDeleteDialog} />
  </>
);

export default Routes;
