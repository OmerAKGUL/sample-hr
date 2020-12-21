import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afmenuitem from './afmenuitem';
import AfmenuitemDetail from './afmenuitem-detail';
import AfmenuitemUpdate from './afmenuitem-update';
import AfmenuitemDeleteDialog from './afmenuitem-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfmenuitemUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfmenuitemUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfmenuitemDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afmenuitem} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfmenuitemDeleteDialog} />
  </>
);

export default Routes;
