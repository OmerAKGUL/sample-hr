import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxorgbranch from './itxorgbranch';
import ItxorgbranchDetail from './itxorgbranch-detail';
import ItxorgbranchUpdate from './itxorgbranch-update';
import ItxorgbranchDeleteDialog from './itxorgbranch-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxorgbranchUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxorgbranchUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxorgbranchDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxorgbranch} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxorgbranchDeleteDialog} />
  </>
);

export default Routes;
