import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Meinvestproc from './meinvestproc';
import MeinvestprocDetail from './meinvestproc-detail';
import MeinvestprocUpdate from './meinvestproc-update';
import MeinvestprocDeleteDialog from './meinvestproc-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MeinvestprocUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MeinvestprocUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MeinvestprocDetail} />
      <ErrorBoundaryRoute path={match.url} component={Meinvestproc} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MeinvestprocDeleteDialog} />
  </>
);

export default Routes;
