import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afmenuchild from './afmenuchild';
import AfmenuchildDetail from './afmenuchild-detail';
import AfmenuchildUpdate from './afmenuchild-update';
import AfmenuchildDeleteDialog from './afmenuchild-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfmenuchildUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfmenuchildUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfmenuchildDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afmenuchild} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfmenuchildDeleteDialog} />
  </>
);

export default Routes;
