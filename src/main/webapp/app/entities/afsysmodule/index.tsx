import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afsysmodule from './afsysmodule';
import AfsysmoduleDetail from './afsysmodule-detail';
import AfsysmoduleUpdate from './afsysmodule-update';
import AfsysmoduleDeleteDialog from './afsysmodule-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfsysmoduleUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfsysmoduleUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfsysmoduleDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afsysmodule} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfsysmoduleDeleteDialog} />
  </>
);

export default Routes;
