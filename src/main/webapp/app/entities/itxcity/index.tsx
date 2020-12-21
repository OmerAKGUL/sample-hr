import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxcity from './itxcity';
import ItxcityDetail from './itxcity-detail';
import ItxcityUpdate from './itxcity-update';
import ItxcityDeleteDialog from './itxcity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxcityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxcityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxcityDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxcity} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxcityDeleteDialog} />
  </>
);

export default Routes;
