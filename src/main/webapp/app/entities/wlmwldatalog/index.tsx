import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Wlmwldatalog from './wlmwldatalog';
import WlmwldatalogDetail from './wlmwldatalog-detail';
import WlmwldatalogUpdate from './wlmwldatalog-update';
import WlmwldatalogDeleteDialog from './wlmwldatalog-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WlmwldatalogUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WlmwldatalogUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WlmwldatalogDetail} />
      <ErrorBoundaryRoute path={match.url} component={Wlmwldatalog} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WlmwldatalogDeleteDialog} />
  </>
);

export default Routes;
