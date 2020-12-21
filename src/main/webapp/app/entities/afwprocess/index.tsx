import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afwprocess from './afwprocess';
import AfwprocessDetail from './afwprocess-detail';
import AfwprocessUpdate from './afwprocess-update';
import AfwprocessDeleteDialog from './afwprocess-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfwprocessUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfwprocessUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfwprocessDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afwprocess} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfwprocessDeleteDialog} />
  </>
);

export default Routes;
