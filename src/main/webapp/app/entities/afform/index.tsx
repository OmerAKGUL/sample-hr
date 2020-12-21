import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afform from './afform';
import AfformDetail from './afform-detail';
import AfformUpdate from './afform-update';
import AfformDeleteDialog from './afform-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfformUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfformUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfformDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afform} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfformDeleteDialog} />
  </>
);

export default Routes;
