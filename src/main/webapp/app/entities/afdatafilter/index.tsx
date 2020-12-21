import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afdatafilter from './afdatafilter';
import AfdatafilterDetail from './afdatafilter-detail';
import AfdatafilterUpdate from './afdatafilter-update';
import AfdatafilterDeleteDialog from './afdatafilter-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfdatafilterUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfdatafilterUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfdatafilterDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afdatafilter} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfdatafilterDeleteDialog} />
  </>
);

export default Routes;
