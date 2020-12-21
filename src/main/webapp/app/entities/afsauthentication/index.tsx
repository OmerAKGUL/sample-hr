import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afsauthentication from './afsauthentication';
import AfsauthenticationDetail from './afsauthentication-detail';
import AfsauthenticationUpdate from './afsauthentication-update';
import AfsauthenticationDeleteDialog from './afsauthentication-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfsauthenticationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfsauthenticationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfsauthenticationDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afsauthentication} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfsauthenticationDeleteDialog} />
  </>
);

export default Routes;
