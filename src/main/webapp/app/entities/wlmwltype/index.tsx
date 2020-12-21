import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Wlmwltype from './wlmwltype';
import WlmwltypeDetail from './wlmwltype-detail';
import WlmwltypeUpdate from './wlmwltype-update';
import WlmwltypeDeleteDialog from './wlmwltype-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WlmwltypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WlmwltypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WlmwltypeDetail} />
      <ErrorBoundaryRoute path={match.url} component={Wlmwltype} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WlmwltypeDeleteDialog} />
  </>
);

export default Routes;
