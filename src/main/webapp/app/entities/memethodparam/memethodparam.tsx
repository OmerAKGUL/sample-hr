import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './memethodparam.reducer';
import { IMemethodparam } from 'app/shared/model/memethodparam.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMemethodparamProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Memethodparam = (props: IMemethodparamProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { memethodparamList, match, loading } = props;
  return (
    <div>
      <h2 id="memethodparam-heading">
        <Translate contentKey="sampleHrApp.memethodparam.home.title">Memethodparams</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.memethodparam.home.createLabel">Create new Memethodparam</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {memethodparamList && memethodparamList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memethodparam.memid">Memid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memethodparam.wlmid">Wlmid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memethodparam.paramvalcode">Paramvalcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memethodparam.paramidxno">Paramidxno</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memethodparam.matchmethodcode">Matchmethodcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.memethodparam.wltype">Wltype</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {memethodparamList.map((memethodparam, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${memethodparam.id}`} color="link" size="sm">
                      {memethodparam.id}
                    </Button>
                  </td>
                  <td>{memethodparam.memid}</td>
                  <td>{memethodparam.wlmid}</td>
                  <td>
                    {memethodparam.paramvalcode ? (
                      <Link to={`afparamval/${memethodparam.paramvalcode.id}`}>{memethodparam.paramvalcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {memethodparam.paramidxno ? (
                      <Link to={`afparamval/${memethodparam.paramidxno.id}`}>{memethodparam.paramidxno.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {memethodparam.matchmethodcode ? (
                      <Link to={`mematchmethod/${memethodparam.matchmethodcode.id}`}>{memethodparam.matchmethodcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>{memethodparam.wltype ? <Link to={`wlmwltype/${memethodparam.wltype.id}`}>{memethodparam.wltype.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${memethodparam.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${memethodparam.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${memethodparam.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.memethodparam.home.notFound">No Memethodparams found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ memethodparam }: IRootState) => ({
  memethodparamList: memethodparam.entities,
  loading: memethodparam.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Memethodparam);
