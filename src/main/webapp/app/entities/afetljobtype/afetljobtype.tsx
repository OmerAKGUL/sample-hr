import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afetljobtype.reducer';
import { IAfetljobtype } from 'app/shared/model/afetljobtype.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfetljobtypeProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afetljobtype = (props: IAfetljobtypeProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afetljobtypeList, match, loading } = props;
  return (
    <div>
      <h2 id="afetljobtype-heading">
        <Translate contentKey="sampleHrApp.afetljobtype.home.title">Afetljobtypes</Translate>
        {window.location.pathname==="/modules/iwl/iwl2/afetljobtype"?null:
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afetljobtype.home.createLabel">Create new Afetljobtype</Translate>
        </Link>}
      </h2>
      <div className="table-responsive">
        {afetljobtypeList && afetljobtypeList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.jobname">Jobname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.apprefid">Apprefid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.srcdataprofile">Srcdataprofile</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.tgtdataprofile">Tgtdataprofile</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.afsid">Afsid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.srclocurl">Srclocurl</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.tgtlocurl">Tgtlocurl</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.srcconntype">Srcconntype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.tgtconntype">Tgtconntype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.srcsyscode">Srcsyscode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.tgtsyscode">Tgtsyscode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.scheduleid">Scheduleid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afetljobtype.updateusr">Updateusr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afetljobtypeList.map((afetljobtype, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afetljobtype.id}`} color="link" size="sm">
                      {afetljobtype.id}
                    </Button>
                  </td>
                  <td>{afetljobtype.jobname}</td>
                  <td>{afetljobtype.apprefid}</td>
                  <td>{afetljobtype.srcdataprofile}</td>
                  <td>{afetljobtype.tgtdataprofile}</td>
                  <td>{afetljobtype.afsid}</td>
                  <td>{afetljobtype.srclocurl}</td>
                  <td>{afetljobtype.tgtlocurl}</td>
                  <td>{afetljobtype.srcconntype}</td>
                  <td>{afetljobtype.tgtconntype}</td>
                  <td>{afetljobtype.wfstate}</td>
                  <td>{afetljobtype.wfprocid}</td>
                  <td>
                    {afetljobtype.srcsyscode ? <Link to={`afsystem/${afetljobtype.srcsyscode.id}`}>{afetljobtype.srcsyscode.code}</Link> : ''}
                  </td>
                  <td>
                    {afetljobtype.tgtsyscode ? <Link to={`afsystem/${afetljobtype.tgtsyscode.id}`}>{afetljobtype.tgtsyscode.code}</Link> : ''}
                  </td>
                  <td>
                    {afetljobtype.scheduleid ? (
                      <Link to={`afschedule/${afetljobtype.scheduleid.id}`}>{afetljobtype.scheduleid.name}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {afetljobtype.createdt ? <TextFormat type="date" value={afetljobtype.createdt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {afetljobtype.updatedt ? <TextFormat type="date" value={afetljobtype.updatedt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{afetljobtype.createusr}</td>
                  <td>{afetljobtype.updateusr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
				            {window.location.pathname==="/modules/iwl/iwl2/afetljobtype"?
                      <Button color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.start">Start</Translate>
                          </span>
                        </Button>:null}

                    {window.location.pathname==="/modules/iwl/iwl2/afetljobtype"?
                      <Button color="danger" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.stop">Stop</Translate>
                          </span>
                        </Button>:null}
                      
                    {window.location.pathname==="/modules/iwl/iwl2/afetljobtype"?null:
                      <Button tag={Link} to={`${match.url}/${afetljobtype.id}`} color="info" size="sm">
                            <FontAwesomeIcon icon="eye" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.view">View</Translate>
                            </span>
                          </Button>}
                    {window.location.pathname==="/modules/iwl/iwl2/afetljobtype"?null:
                      <Button tag={Link} to={`${match.url}/${afetljobtype.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>}
                    {window.location.pathname==="/modules/iwl/iwl2/afetljobtype"?null:
                      <Button tag={Link} to={`${match.url}/${afetljobtype.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>}
                      

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="sampleHrApp.afetljobtype.home.notFound">No Afetljobtypes found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afetljobtype }: IRootState) => ({
  afetljobtypeList: afetljobtype.entities,
  loading: afetljobtype.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afetljobtype);
