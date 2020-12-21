import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxorganization from './itxorganization';
import ItxorganizationDetail from './itxorganization-detail';
import ItxorganizationUpdate from './itxorganization-update';
import ItxorganizationDeleteDialog from './itxorganization-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxorganizationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxorganizationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxorganizationDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxorganization} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxorganizationDeleteDialog} />
  </>
);

export default Routes;
