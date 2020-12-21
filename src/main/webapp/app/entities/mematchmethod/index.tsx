import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Mematchmethod from './mematchmethod';
import MematchmethodDetail from './mematchmethod-detail';
import MematchmethodUpdate from './mematchmethod-update';
import MematchmethodDeleteDialog from './mematchmethod-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MematchmethodUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MematchmethodUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MematchmethodDetail} />
      <ErrorBoundaryRoute path={match.url} component={Mematchmethod} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MematchmethodDeleteDialog} />
  </>
);

export default Routes;
