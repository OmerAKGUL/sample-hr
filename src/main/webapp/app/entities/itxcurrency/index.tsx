import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxcurrency from './itxcurrency';
import ItxcurrencyDetail from './itxcurrency-detail';
import ItxcurrencyUpdate from './itxcurrency-update';
import ItxcurrencyDeleteDialog from './itxcurrency-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxcurrencyUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxcurrencyUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxcurrencyDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxcurrency} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxcurrencyDeleteDialog} />
  </>
);

export default Routes;
