import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxcusttype from './itxcusttype';
import ItxcusttypeDetail from './itxcusttype-detail';
import ItxcusttypeUpdate from './itxcusttype-update';
import ItxcusttypeDeleteDialog from './itxcusttype-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxcusttypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxcusttypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxcusttypeDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxcusttype} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxcusttypeDeleteDialog} />
  </>
);

export default Routes;
