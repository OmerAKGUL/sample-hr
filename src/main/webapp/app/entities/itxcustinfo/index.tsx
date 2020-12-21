import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxcustinfo from './itxcustinfo';
import ItxcustinfoDetail from './itxcustinfo-detail';
import ItxcustinfoUpdate from './itxcustinfo-update';
import ItxcustinfoDeleteDialog from './itxcustinfo-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxcustinfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxcustinfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxcustinfoDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxcustinfo} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxcustinfoDeleteDialog} />
  </>
);

export default Routes;
