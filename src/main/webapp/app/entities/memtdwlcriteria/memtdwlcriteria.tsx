import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './memtdwlcriteria.reducer';
import { IMemtdwlcriteria } from 'app/shared/model/memtdwlcriteria.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMemtdwlcriteriaProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Memtdwlcriteria = (props: IMemtdwlcriteriaProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { memtdwlcriteriaList, match, loading } = props;
  return (
    <div>
      <h2 id="memtdwlcriteria-heading">
        <Translate contentKey="sampleHrApp.memtdwlcriteria.home.title">Memtdwlcriteria</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.memtdwlcriteria.home.createLabel">Create new Memtdwlcriteria</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {memtdwlcriteriaList && memtdwlcriteriaList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.wlmid">Wlmid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.applyonwlfields">Applyonwlfields</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.wltypecode">Wltypecode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.matchmethodcode">Matchmethodcode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {memtdwlcriteriaList.map((memtdwlcriteria, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${memtdwlcriteria.id}`} color="link" size="sm">
                      {memtdwlcriteria.id}
                    </Button>
                  </td>
                  <td>{memtdwlcriteria.wlmid}</td>
                  <td>{memtdwlcriteria.name}</td>
                  <td>{memtdwlcriteria.applyonwlfields}</td>
                  <td>
                    {memtdwlcriteria.wltypecode ? (
                      <Link to={`wlmwltype/${memtdwlcriteria.wltypecode.id}`}>{memtdwlcriteria.wltypecode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {memtdwlcriteria.matchmethodcode ? (
                      <Link to={`mematchmethod/${memtdwlcriteria.matchmethodcode.id}`}>{memtdwlcriteria.matchmethodcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${memtdwlcriteria.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${memtdwlcriteria.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${memtdwlcriteria.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.memtdwlcriteria.home.notFound">No Memtdwlcriteria found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ memtdwlcriteria }: IRootState) => ({
  memtdwlcriteriaList: memtdwlcriteria.entities,
  loading: memtdwlcriteria.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Memtdwlcriteria);
