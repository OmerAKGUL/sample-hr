import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afsrole from './afsrole';
import AfsroleDetail from './afsrole-detail';
import AfsroleUpdate from './afsrole-update';
import AfsroleDeleteDialog from './afsrole-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfsroleUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfsroleUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfsroleDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afsrole} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfsroleDeleteDialog} />
  </>
);

export default Routes;
