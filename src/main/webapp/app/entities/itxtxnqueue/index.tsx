import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxtxnqueue from './itxtxnqueue';
import ItxtxnqueueDetail from './itxtxnqueue-detail';
import ItxtxnqueueUpdate from './itxtxnqueue-update';
import ItxtxnqueueDeleteDialog from './itxtxnqueue-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxtxnqueueUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxtxnqueueUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxtxnqueueDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxtxnqueue} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxtxnqueueDeleteDialog} />
  </>
);

export default Routes;
