import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxtxntype from './itxtxntype';
import ItxtxntypeDetail from './itxtxntype-detail';
import ItxtxntypeUpdate from './itxtxntype-update';
import ItxtxntypeDeleteDialog from './itxtxntype-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxtxntypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxtxntypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxtxntypeDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxtxntype} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxtxntypeDeleteDialog} />
  </>
);

export default Routes;
