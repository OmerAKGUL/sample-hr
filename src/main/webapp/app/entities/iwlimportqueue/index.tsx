import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Iwlimportqueue from './iwlimportqueue';
import IwlimportqueueDetail from './iwlimportqueue-detail';
import IwlimportqueueUpdate from './iwlimportqueue-update';
import IwlimportqueueDeleteDialog from './iwlimportqueue-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={IwlimportqueueUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={IwlimportqueueUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={IwlimportqueueDetail} />
      <ErrorBoundaryRoute path={match.url} component={Iwlimportqueue} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={IwlimportqueueDeleteDialog} />
  </>
);

export default Routes;
