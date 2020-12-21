import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Itxcustaddress from './itxcustaddress';
import ItxcustaddressDetail from './itxcustaddress-detail';
import ItxcustaddressUpdate from './itxcustaddress-update';
import ItxcustaddressDeleteDialog from './itxcustaddress-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ItxcustaddressUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ItxcustaddressUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ItxcustaddressDetail} />
      <ErrorBoundaryRoute path={match.url} component={Itxcustaddress} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ItxcustaddressDeleteDialog} />
  </>
);

export default Routes;
