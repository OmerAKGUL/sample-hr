import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxaccounttinfo from './itxaccounttinfo';
import ItxaccounttinfoDetail from './itxaccounttinfo-detail';
import ItxaccounttinfoUpdate from './itxaccounttinfo-update';
import ItxaccounttinfoDeleteDialog from './itxaccounttinfo-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxaccounttinfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxaccounttinfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxaccounttinfoDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxaccounttinfo} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxaccounttinfoDeleteDialog} />
  </>
);

export default Routes;
