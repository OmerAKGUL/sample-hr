import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afwprocaction.reducer';
import { IAfwprocaction } from 'app/shared/model/afwprocaction.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfwprocactionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afwprocaction = (props: IAfwprocactionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afwprocactionList, match, loading } = props;
  return (
    <div>
      <h2 id="afwprocaction-heading">
        <Translate contentKey="sampleHrApp.afwprocaction.home.title">Afwprocactions</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afwprocaction.home.createLabel">Create new Afwprocaction</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afwprocactionList && afwprocactionList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.actionnote">Actionnote</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.scheduleddt">Scheduleddt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.starteddt">Starteddt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.finisheddt">Finisheddt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.refdoc1url">Refdoc 1 Url</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.refdoc2url">Refdoc 2 Url</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.updateusr">Updateusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.procid">Procid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocaction.actioncode">Actioncode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afwprocactionList.map((afwprocaction, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afwprocaction.id}`} color="link" size="sm">
                      {afwprocaction.id}
                    </Button>
                  </td>
                  <td>{afwprocaction.actionnote}</td>
                  <td>
                    {afwprocaction.scheduleddt ? (
                      <TextFormat type="date" value={afwprocaction.scheduleddt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {afwprocaction.starteddt ? <TextFormat type="date" value={afwprocaction.starteddt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {afwprocaction.finisheddt ? <TextFormat type="date" value={afwprocaction.finisheddt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{afwprocaction.refdoc1url}</td>
                  <td>{afwprocaction.refdoc2url}</td>
                  <td>
                    {afwprocaction.createdt ? <TextFormat type="date" value={afwprocaction.createdt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {afwprocaction.updatedt ? <TextFormat type="date" value={afwprocaction.updatedt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{afwprocaction.createusr}</td>
                  <td>{afwprocaction.updateusr}</td>
                  <td>{afwprocaction.wfstate}</td>
                  <td>{afwprocaction.wfprocid}</td>
                  <td>{afwprocaction.procid ? <Link to={`afwprocess/${afwprocaction.procid.id}`}>{afwprocaction.procid.id}</Link> : ''}</td>
                  <td>
                    {afwprocaction.actioncode ? (
                      <Link to={`afwfaction/${afwprocaction.actioncode.id}`}>{afwprocaction.actioncode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afwprocaction.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afwprocaction.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afwprocaction.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afwprocaction.home.notFound">No Afwprocactions found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afwprocaction }: IRootState) => ({
  afwprocactionList: afwprocaction.entities,
  loading: afwprocaction.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afwprocaction);
