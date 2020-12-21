import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxcountry from './itxcountry';
import ItxcountryDetail from './itxcountry-detail';
import ItxcountryUpdate from './itxcountry-update';
import ItxcountryDeleteDialog from './itxcountry-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxcountryUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxcountryUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxcountryDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxcountry} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxcountryDeleteDialog} />
  </>
);

export default Routes;
