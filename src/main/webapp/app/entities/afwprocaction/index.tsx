import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afwprocaction from './afwprocaction';
import AfwprocactionDetail from './afwprocaction-detail';
import AfwprocactionUpdate from './afwprocaction-update';
import AfwprocactionDeleteDialog from './afwprocaction-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfwprocactionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfwprocactionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfwprocactionDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afwprocaction} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfwprocactionDeleteDialog} />
  </>
);

export default Routes;
