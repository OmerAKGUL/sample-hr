import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxcustadressinfo from './itxcustadressinfo';
import ItxcustadressinfoDetail from './itxcustadressinfo-detail';
import ItxcustadressinfoUpdate from './itxcustadressinfo-update';
import ItxcustadressinfoDeleteDialog from './itxcustadressinfo-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxcustadressinfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxcustadressinfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxcustadressinfoDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxcustadressinfo} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxcustadressinfoDeleteDialog} />
  </>
);

export default Routes;
