import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afsysmodule.reducer';
import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsysmoduleProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afsysmodule = (props: IAfsysmoduleProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afsysmoduleList, match, loading } = props;
  return (
    <div>
      <h2 id="afsysmodule-heading">
        <Translate contentKey="sampleHrApp.afsysmodule.home.title">Afsysmodules</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afsysmodule.home.createLabel">Create new Afsysmodule</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afsysmoduleList && afsysmoduleList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsysmodule.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsysmodule.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsysmodule.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsysmodule.appsyscode">Appsyscode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afsysmoduleList.map((afsysmodule, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afsysmodule.id}`} color="link" size="sm">
                      {afsysmodule.id}
                    </Button>
                  </td>
                  <td>{afsysmodule.code}</td>
                  <td>{afsysmodule.name}</td>
                  <td>{afsysmodule.descr}</td>
                  <td>
                    {afsysmodule.appsyscode ? <Link to={`afsystem/${afsysmodule.appsyscode.id}`}>{afsysmodule.appsyscode.name}</Link> : ''}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afsysmodule.id}/edit`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsysmodule.id}`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsysmodule.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afsysmodule.home.notFound">No Afsysmodules found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afsysmodule }: IRootState) => ({
  afsysmoduleList: afsysmodule.entities,
  loading: afsysmodule.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afsysmodule);
