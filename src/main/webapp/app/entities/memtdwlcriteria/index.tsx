import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Memtdwlcriteria from './memtdwlcriteria';
import MemtdwlcriteriaDetail from './memtdwlcriteria-detail';
import MemtdwlcriteriaUpdate from './memtdwlcriteria-update';
import MemtdwlcriteriaDeleteDialog from './memtdwlcriteria-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MemtdwlcriteriaUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MemtdwlcriteriaUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MemtdwlcriteriaDetail} />
      <ErrorBoundaryRoute path={match.url} component={Memtdwlcriteria} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MemtdwlcriteriaDeleteDialog} />
  </>
);

export default Routes;
