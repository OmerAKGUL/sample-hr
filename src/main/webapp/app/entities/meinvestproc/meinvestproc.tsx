import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './meinvestproc.reducer';
import { IMeinvestproc } from 'app/shared/model/meinvestproc.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMeinvestprocProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Meinvestproc = (props: IMeinvestprocProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { meinvestprocList, match, loading } = props;
  return (
    <div>
      <h2 id="meinvestproc-heading">
        <Translate contentKey="sampleHrApp.meinvestproc.home.title">Meinvestprocs</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.meinvestproc.home.createLabel">Create new Meinvestproc</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {meinvestprocList && meinvestprocList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestproc.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestproc.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestproc.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestproc.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestproc.updateusr">Updateusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestproc.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestproc.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestproc.invprofile">Invprofile</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {meinvestprocList.map((meinvestproc, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${meinvestproc.id}`} color="link" size="sm">
                      {meinvestproc.id}
                    </Button>
                  </td>
                  <td>{meinvestproc.descr}</td>
                  <td>
                    {meinvestproc.createdt ? <TextFormat type="date" value={meinvestproc.createdt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {meinvestproc.updatedt ? <TextFormat type="date" value={meinvestproc.updatedt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{meinvestproc.createusr}</td>
                  <td>{meinvestproc.updateusr}</td>
                  <td>{meinvestproc.wfstate}</td>
                  <td>
                    {meinvestproc.wfprocid ? <Link to={`afwprocess/${meinvestproc.wfprocid.id}`}>{meinvestproc.wfprocid.id}</Link> : ''}
                  </td>
                  <td>
                    {meinvestproc.invprofile ? (
                      <Link to={`meinvestprofile/${meinvestproc.invprofile.id}`}>{meinvestproc.invprofile.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${meinvestproc.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${meinvestproc.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${meinvestproc.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.meinvestproc.home.notFound">No Meinvestprocs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ meinvestproc }: IRootState) => ({
  meinvestprocList: meinvestproc.entities,
  loading: meinvestproc.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Meinvestproc);
