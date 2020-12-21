import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './meinvestprofile.reducer';
import { IMeinvestprofile } from 'app/shared/model/meinvestprofile.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMeinvestprofileProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Meinvestprofile = (props: IMeinvestprofileProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { meinvestprofileList, match, loading } = props;
  return (
    <div>
      <h2 id="meinvestprofile-heading">
        <Translate contentKey="sampleHrApp.meinvestprofile.home.title">Meinvestprofiles</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.meinvestprofile.home.createLabel">Create new Meinvestprofile</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {meinvestprofileList && meinvestprofileList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.wlmid">Wlmid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.afsid">Afsid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.invtype">Invtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.processdescr">Processdescr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.notifgrp1emailaddr">Notifgrp 1 Emailaddr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.notifgrp2emailaddr">Notifgrp 2 Emailaddr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.notifmsgtempl">Notifmsgtempl</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchwltype">Matchwltype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchtxntype">Matchtxntype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchtxncusttype">Matchtxncusttype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchtxnacctype">Matchtxnacctype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchsystemcode">Matchsystemcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.invrespuserid">Invrespuserid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meinvestprofile.invresprole">Invresprole</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {meinvestprofileList.map((meinvestprofile, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${meinvestprofile.id}`} color="link" size="sm">
                      {meinvestprofile.id}
                    </Button>
                  </td>
                  <td>{meinvestprofile.name}</td>
                  <td>{meinvestprofile.wlmid}</td>
                  <td>{meinvestprofile.afsid}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Invtype.${meinvestprofile.invtype}`} />
                  </td>
                  <td>{meinvestprofile.processdescr}</td>
                  <td>{meinvestprofile.notifgrp1emailaddr}</td>
                  <td>{meinvestprofile.notifgrp2emailaddr}</td>
                  <td>{meinvestprofile.notifmsgtempl}</td>
                  <td>
                    {meinvestprofile.matchwltype ? (
                      <Link to={`wlmwltype/${meinvestprofile.matchwltype.id}`}>{meinvestprofile.matchwltype.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {meinvestprofile.matchtxntype ? (
                      <Link to={`itxtxntype/${meinvestprofile.matchtxntype.id}`}>{meinvestprofile.matchtxntype.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {meinvestprofile.matchtxncusttype ? (
                      <Link to={`itxcusttype/${meinvestprofile.matchtxncusttype.id}`}>{meinvestprofile.matchtxncusttype.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {meinvestprofile.matchtxnacctype ? (
                      <Link to={`itxaccounttype/${meinvestprofile.matchtxnacctype.id}`}>{meinvestprofile.matchtxnacctype.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {meinvestprofile.matchsystemcode ? (
                      <Link to={`afsystem/${meinvestprofile.matchsystemcode.id}`}>{meinvestprofile.matchsystemcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {meinvestprofile.invrespuserid ? (
                      <Link to={`jhiuser/${meinvestprofile.invrespuserid.id}`}>{meinvestprofile.invrespuserid.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {meinvestprofile.invresprole ? (
                      <Link to={`afsrole/${meinvestprofile.invresprole.id}`}>{meinvestprofile.invresprole.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${meinvestprofile.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${meinvestprofile.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${meinvestprofile.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.meinvestprofile.home.notFound">No Meinvestprofiles found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ meinvestprofile }: IRootState) => ({
  meinvestprofileList: meinvestprofile.entities,
  loading: meinvestprofile.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Meinvestprofile);
