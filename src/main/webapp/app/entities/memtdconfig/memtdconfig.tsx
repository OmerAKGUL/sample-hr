import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './memtdconfig.reducer';
import { IMemtdconfig } from 'app/shared/model/memtdconfig.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMemtdconfigProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Memtdconfig = (props: IMemtdconfigProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { memtdconfigList, match, loading } = props;
  return (
    <div>
      <h2 id="memtdconfig-heading">
        <Translate contentKey="sampleHrApp.memtdconfig.home.title">Memtdconfigs</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.memtdconfig.home.createLabel">Create new Memtdconfig</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {memtdconfigList && memtdconfigList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdconfig.memid">Memid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdconfig.methodcode">Methodcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdconfig.configcode">Configcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdconfig.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdconfig.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdconfig.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdconfig.updateusr">Updateusr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {memtdconfigList.map((memtdconfig, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${memtdconfig.id}`} color="link" size="sm">
                      {memtdconfig.id}
                    </Button>
                  </td>
                  <td>{memtdconfig.memid}</td>
                  <td>
                    {memtdconfig.methodcode ? (
                      <Link to={`mematchmethod/${memtdconfig.methodcode.id}`}>{memtdconfig.methodcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {memtdconfig.configcode ? <Link to={`meconfig/${memtdconfig.configcode.id}`}>{memtdconfig.configcode.id}</Link> : ''}
                  </td>
                  <td>{memtdconfig.createdt ? <TextFormat type="date" value={memtdconfig.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{memtdconfig.updatedt ? <TextFormat type="date" value={memtdconfig.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{memtdconfig.createusr}</td>
                  <td>{memtdconfig.updateusr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${memtdconfig.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${memtdconfig.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${memtdconfig.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.memtdconfig.home.notFound">No Memtdconfigs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ memtdconfig }: IRootState) => ({
  memtdconfigList: memtdconfig.entities,
  loading: memtdconfig.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Memtdconfig);
