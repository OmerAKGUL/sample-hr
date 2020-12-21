import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afwfstate from './afwfstate';
import AfwfstateDetail from './afwfstate-detail';
import AfwfstateUpdate from './afwfstate-update';
import AfwfstateDeleteDialog from './afwfstate-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfwfstateUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfwfstateUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfwfstateDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afwfstate} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfwfstateDeleteDialog} />
  </>
);

export default Routes;
