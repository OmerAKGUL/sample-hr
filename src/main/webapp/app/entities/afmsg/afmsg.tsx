import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afmsg.reducer';
import { IAfmsg } from 'app/shared/model/afmsg.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfmsgProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afmsg = (props: IAfmsgProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afmsgList, match, loading } = props;
  return (
    <div>
      <h2 id="afmsg-heading">
        <Translate contentKey="sampleHrApp.afmsg.home.title">Afmsgs</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afmsg.home.createLabel">Create new Afmsg</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afmsgList && afmsgList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmsg.appmsgtype">Appmsgtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmsg.apprefctxinfo">Apprefctxinfo</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmsg.appmsgcode">Appmsgcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmsg.langisocode">Langisocode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmsg.appmsgtxt">Appmsgtxt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmsg.msgseverity">Msgseverity</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmsg.appsyscode">Appsyscode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afmsgList.map((afmsg, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afmsg.id}`} color="link" size="sm">
                      {afmsg.id}
                    </Button>
                  </td>
                  <td>{afmsg.appmsgtype}</td>
                  <td>{afmsg.apprefctxinfo}</td>
                  <td>{afmsg.appmsgcode}</td>
                  <td>{afmsg.langisocode}</td>
                  <td>{afmsg.appmsgtxt}</td>
                  <td>{afmsg.msgseverity}</td>
                  <td>{afmsg.appsyscode ? <Link to={`afsystem/${afmsg.appsyscode.id}`}>{afmsg.appsyscode.name}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afmsg.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afmsg.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afmsg.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afmsg.home.notFound">No Afmsgs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afmsg }: IRootState) => ({
  afmsgList: afmsg.entities,
  loading: afmsg.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afmsg);
