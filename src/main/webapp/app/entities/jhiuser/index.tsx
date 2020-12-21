import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Jhiuser from './jhiuser';
import JhiuserDetail from './jhiuser-detail';
import JhiuserUpdate from './jhiuser-update';
import JhiuserDeleteDialog from './jhiuser-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={JhiuserUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={JhiuserUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={JhiuserDetail} />
      <ErrorBoundaryRoute path={match.url} component={Jhiuser} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={JhiuserDeleteDialog} />
  </>
);

export default Routes;
