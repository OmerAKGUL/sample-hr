import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Wlmwldata from './wlmwldata';
import WlmwldataDetail from './wlmwldata-detail';
import WlmwldataUpdate from './wlmwldata-update';
import WlmwldataDeleteDialog from './wlmwldata-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WlmwldataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WlmwldataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WlmwldataDetail} />
      <ErrorBoundaryRoute path={match.url} component={Wlmwldata} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WlmwldataDeleteDialog} />
  </>
);

export default Routes;
