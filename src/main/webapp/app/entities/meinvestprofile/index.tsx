import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Meinvestprofile from './meinvestprofile';
import MeinvestprofileDetail from './meinvestprofile-detail';
import MeinvestprofileUpdate from './meinvestprofile-update';
import MeinvestprofileDeleteDialog from './meinvestprofile-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MeinvestprofileUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MeinvestprofileUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MeinvestprofileDetail} />
      <ErrorBoundaryRoute path={match.url} component={Meinvestprofile} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MeinvestprofileDeleteDialog} />
  </>
);

export default Routes;
