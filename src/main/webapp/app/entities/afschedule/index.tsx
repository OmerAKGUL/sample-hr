import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afschedule from './afschedule';
import AfscheduleDetail from './afschedule-detail';
import AfscheduleUpdate from './afschedule-update';
import AfscheduleDeleteDialog from './afschedule-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfscheduleUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfscheduleUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfscheduleDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afschedule} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfscheduleDeleteDialog} />
  </>
);

export default Routes;
