import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Mematchresultctx from './mematchresultctx';
import MematchresultctxDetail from './mematchresultctx-detail';
import MematchresultctxUpdate from './mematchresultctx-update';
import MematchresultctxDeleteDialog from './mematchresultctx-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MematchresultctxUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MematchresultctxUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MematchresultctxDetail} />
      <ErrorBoundaryRoute path={match.url} component={Mematchresultctx} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MematchresultctxDeleteDialog} />
  </>
);

export default Routes;
