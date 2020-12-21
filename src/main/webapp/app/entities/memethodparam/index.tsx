import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Memethodparam from './memethodparam';
import MemethodparamDetail from './memethodparam-detail';
import MemethodparamUpdate from './memethodparam-update';
import MemethodparamDeleteDialog from './memethodparam-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MemethodparamUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MemethodparamUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MemethodparamDetail} />
      <ErrorBoundaryRoute path={match.url} component={Memethodparam} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MemethodparamDeleteDialog} />
  </>
);

export default Routes;
