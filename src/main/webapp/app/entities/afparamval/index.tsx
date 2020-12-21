import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afparamval from './afparamval';
import AfparamvalDetail from './afparamval-detail';
import AfparamvalUpdate from './afparamval-update';
import AfparamvalDeleteDialog from './afparamval-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfparamvalUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfparamvalUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfparamvalDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afparamval} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfparamvalDeleteDialog} />
  </>
);

export default Routes;
