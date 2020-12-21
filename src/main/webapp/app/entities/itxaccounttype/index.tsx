import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxaccounttype from './itxaccounttype';
import ItxaccounttypeDetail from './itxaccounttype-detail';
import ItxaccounttypeUpdate from './itxaccounttype-update';
import ItxaccounttypeDeleteDialog from './itxaccounttype-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxaccounttypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxaccounttypeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxaccounttypeDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxaccounttype} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxaccounttypeDeleteDialog} />
  </>
);

export default Routes;
