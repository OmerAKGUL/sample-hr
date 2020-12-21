import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afworkflow from './afworkflow';
import AfworkflowDetail from './afworkflow-detail';
import AfworkflowUpdate from './afworkflow-update';
import AfworkflowDeleteDialog from './afworkflow-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfworkflowUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfworkflowUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfworkflowDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afworkflow} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfworkflowDeleteDialog} />
  </>
);

export default Routes;
