import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afwfaction from './afwfaction';
import AfwfactionDetail from './afwfaction-detail';
import AfwfactionUpdate from './afwfaction-update';
import AfwfactionDeleteDialog from './afwfaction-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfwfactionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfwfactionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfwfactionDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afwfaction} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfwfactionDeleteDialog} />
  </>
);

export default Routes;
