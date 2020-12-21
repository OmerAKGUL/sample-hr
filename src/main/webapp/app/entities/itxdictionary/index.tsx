import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxdictionary from './itxdictionary';
import ItxdictionaryDetail from './itxdictionary-detail';
import ItxdictionaryUpdate from './itxdictionary-update';
import ItxdictionaryDeleteDialog from './itxdictionary-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxdictionaryUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxdictionaryUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxdictionaryDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxdictionary} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxdictionaryDeleteDialog} />
  </>
);

export default Routes;
