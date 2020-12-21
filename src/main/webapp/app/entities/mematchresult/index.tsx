import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Mematchresult from './mematchresult';
import MematchresultDetail from './mematchresult-detail';
import MematchresultUpdate from './mematchresult-update';
import MematchresultDeleteDialog from './mematchresult-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MematchresultUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MematchresultUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MematchresultDetail} />
      <ErrorBoundaryRoute path={match.url} component={Mematchresult} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MematchresultDeleteDialog} />
  </>
);

export default Routes;
