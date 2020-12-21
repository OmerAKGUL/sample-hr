import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Memtdconfig from './memtdconfig';
import MemtdconfigDetail from './memtdconfig-detail';
import MemtdconfigUpdate from './memtdconfig-update';
import MemtdconfigDeleteDialog from './memtdconfig-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MemtdconfigUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MemtdconfigUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MemtdconfigDetail} />
      <ErrorBoundaryRoute path={match.url} component={Memtdconfig} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MemtdconfigDeleteDialog} />
  </>
);

export default Routes;
