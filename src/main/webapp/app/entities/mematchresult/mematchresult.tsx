import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './mematchresult.reducer';
import { IMematchresult } from 'app/shared/model/mematchresult.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMematchresultProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Mematchresult = (props: IMematchresultProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { mematchresultList, match, loading } = props;
  return (
    <div>
      <h2 id="mematchresult-heading">
        <Translate contentKey="sampleHrApp.mematchresult.home.title">Mematchresults</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.mematchresult.home.createLabel">Create new Mematchresult</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {mematchresultList && mematchresultList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.matchid">Matchid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.matchctxid">Matchctxid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.matchwltype">Matchwltype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.matchtxnid">Matchtxnid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.matchscore">Matchscore</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.matchconfigcode">Matchconfigcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.invprocid">Invprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.mematchresult.updateusr">Updateusr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {mematchresultList.map((mematchresult, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${mematchresult.id}`} color="link" size="sm">
                      {mematchresult.id}
                    </Button>
                  </td>
                  <td>{mematchresult.matchid}</td>
                  <td>{mematchresult.matchctxid}</td>
                  <td>{mematchresult.matchwltype}</td>
                  <td>{mematchresult.matchtxnid}</td>
                  <td>{mematchresult.matchscore}</td>
                  <td>{mematchresult.wfstate}</td>
                  <td>{mematchresult.wfprocid}</td>
                  <td>
                    {mematchresult.matchconfigcode ? (
                      <Link to={`meconfig/${mematchresult.matchconfigcode.id}`}>{mematchresult.matchconfigcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {mematchresult.invprocid ? (
                      <Link to={`meinvestproc/${mematchresult.invprocid.id}`}>{mematchresult.invprocid.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {mematchresult.createdt ? <TextFormat type="date" value={mematchresult.createdt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {mematchresult.updatedt ? <TextFormat type="date" value={mematchresult.updatedt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{mematchresult.createusr}</td>
                  <td>{mematchresult.updateusr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${mematchresult.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${mematchresult.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${mematchresult.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.mematchresult.home.notFound">No Mematchresults found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ mematchresult }: IRootState) => ({
  mematchresultList: mematchresult.entities,
  loading: mematchresult.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Mematchresult);
