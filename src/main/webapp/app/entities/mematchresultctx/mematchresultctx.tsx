import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './mematchresultctx.reducer';
import { IMematchresultctx } from 'app/shared/model/mematchresultctx.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMematchresultctxProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Mematchresultctx = (props: IMematchresultctxProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { mematchresultctxList, match, loading } = props;
  return (
    <div>
      <h2 id="mematchresultctx-heading">
        <Translate contentKey="sampleHrApp.mematchresultctx.home.title">Mematchresultctxes</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.mematchresultctx.home.createLabel">Create new Mematchresultctx</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {mematchresultctxList && mematchresultctxList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresultctx.memid">Memid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchtime">Matchtime</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchmtdmsg">Matchmtdmsg</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchctxdata">Matchctxdata</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchid">Matchid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchmtdcode">Matchmtdcode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {mematchresultctxList.map((mematchresultctx, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${mematchresultctx.id}`} color="link" size="sm">
                      {mematchresultctx.id}
                    </Button>
                  </td>
                  <td>{mematchresultctx.memid}</td>
                  <td>
                    {mematchresultctx.matchtime ? (
                      <TextFormat type="date" value={mematchresultctx.matchtime} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{mematchresultctx.matchmtdmsg}</td>
                  <td>{mematchresultctx.matchctxdata}</td>
                  <td>
                    {mematchresultctx.matchid ? (
                      <Link to={`mematchresult/${mematchresultctx.matchid.id}`}>{mematchresultctx.matchid.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {mematchresultctx.matchmtdcode ? (
                      <Link to={`mematchmethod/${mematchresultctx.matchmtdcode.id}`}>{mematchresultctx.matchmtdcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${mematchresultctx.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${mematchresultctx.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${mematchresultctx.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.mematchresultctx.home.notFound">No Mematchresultctxes found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ mematchresultctx }: IRootState) => ({
  mematchresultctxList: mematchresultctx.entities,
  loading: mematchresultctx.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Mematchresultctx);
