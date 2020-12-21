import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afetljobtype from './afetljobtype';
import AfetljobtypeDetail from './afetljobtype-detail';
import AfetljobtypeUpdate from './afetljobtype-update';
import AfetljobtypeDeleteDialog from './afetljobtype-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfetljobtypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfetljobtypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfetljobtypeDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afetljobtype} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfetljobtypeDeleteDialog} />
  </>
);

export default Routes;
