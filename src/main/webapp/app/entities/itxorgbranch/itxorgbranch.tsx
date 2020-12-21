import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxorgbranch.reducer';
import { IItxorgbranch } from 'app/shared/model/itxorgbranch.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxorgbranchProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxorgbranch = (props: IItxorgbranchProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxorgbranchList, match, loading } = props;
  return (
    <div>
      <h2 id="itxorgbranch-heading">
        <Translate contentKey="sampleHrApp.itxorgbranch.home.title">Itxorgbranches</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxorgbranch.home.createLabel">Create new Itxorgbranch</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxorgbranchList && itxorgbranchList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorgbranch.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorgbranch.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorgbranch.localname">Localname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorgbranch.brachtype">Brachtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorgbranch.orgid">Orgid</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxorgbranchList.map((itxorgbranch, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxorgbranch.id}`} color="link" size="sm">
                      {itxorgbranch.id}
                    </Button>
                  </td>
                  <td>{itxorgbranch.code}</td>
                  <td>{itxorgbranch.name}</td>
                  <td>{itxorgbranch.localname}</td>
                  <td>{itxorgbranch.brachtype}</td>
                  <td>{itxorgbranch.orgid ? <Link to={`itxorganization/${itxorgbranch.orgid.id}`}>{itxorgbranch.orgid.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxorgbranch.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxorgbranch.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxorgbranch.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="sampleHrApp.itxorgbranch.home.notFound">No Itxorgbranches found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxorgbranch }: IRootState) => ({
  itxorgbranchList: itxorgbranch.entities,
  loading: itxorgbranch.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxorgbranch);
