import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Afformdatafilter from './afformdatafilter';
import AfformdatafilterDetail from './afformdatafilter-detail';
import AfformdatafilterUpdate from './afformdatafilter-update';
import AfformdatafilterDeleteDialog from './afformdatafilter-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AfformdatafilterUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AfformdatafilterUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AfformdatafilterDetail} />
      <ErrorBoundaryRoute path={match.url} component={Afformdatafilter} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AfformdatafilterDeleteDialog} />
  </>
);

export default Routes;
