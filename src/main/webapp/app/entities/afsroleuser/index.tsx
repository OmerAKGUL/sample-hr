import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afsroleuser from './afsroleuser';
import AfsroleuserDetail from './afsroleuser-detail';
import AfsroleuserUpdate from './afsroleuser-update';
import AfsroleuserDeleteDialog from './afsroleuser-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfsroleuserUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfsroleuserUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfsroleuserDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afsroleuser} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfsroleuserDeleteDialog} />
  </>
);

export default Routes;
