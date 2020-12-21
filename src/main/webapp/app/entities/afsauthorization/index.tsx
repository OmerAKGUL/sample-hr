import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afsauthorization from './afsauthorization';
import AfsauthorizationDetail from './afsauthorization-detail';
import AfsauthorizationUpdate from './afsauthorization-update';
import AfsauthorizationDeleteDialog from './afsauthorization-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfsauthorizationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfsauthorizationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfsauthorizationDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afsauthorization} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfsauthorizationDeleteDialog} />
  </>
);

export default Routes;
