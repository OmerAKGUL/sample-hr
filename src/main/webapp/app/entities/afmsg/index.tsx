import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afmsg from './afmsg';
import AfmsgDetail from './afmsg-detail';
import AfmsgUpdate from './afmsg-update';
import AfmsgDeleteDialog from './afmsg-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfmsgUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfmsgUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfmsgDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afmsg} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfmsgDeleteDialog} />
  </>
);

export default Routes;
