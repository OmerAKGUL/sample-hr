import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './wlmwltype.reducer';
import { IWlmwltype } from 'app/shared/model/wlmwltype.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IWlmwltypeProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Wlmwltype = (props: IWlmwltypeProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { wlmwltypeList, match, loading } = props;
  return (
    <div>
      <h2 id="wlmwltype-heading">
        <Translate contentKey="sampleHrApp.wlmwltype.home.title">Wlmwltypes</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.wlmwltype.home.createLabel">Create new Wlmwltype</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {wlmwltypeList && wlmwltypeList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.publishercat">Publishercat</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.publisherorgid">Publisherorgid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.publishername">Publishername</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.publishformat">Publishformat</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.filteringtype">Filteringtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.updateusr">Updateusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwltype.wfprocid">Wfprocid</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {wlmwltypeList.map((wlmwltype, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${wlmwltype.id}`} color="link" size="sm">
                      {wlmwltype.id}
                    </Button>
                  </td>
                  <td>{wlmwltype.code}</td>
                  <td>{wlmwltype.name}</td>
                  <td>{wlmwltype.descr}</td>
                  <td>{wlmwltype.publishercat}</td>
                  <td>{wlmwltype.publisherorgid}</td>
                  <td>{wlmwltype.publishername}</td>
                  <td>{wlmwltype.publishformat}</td>
                  <td>{wlmwltype.filteringtype}</td>
                  <td>{wlmwltype.createdt ? <TextFormat type="date" value={wlmwltype.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{wlmwltype.updatedt ? <TextFormat type="date" value={wlmwltype.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{wlmwltype.createusr}</td>
                  <td>{wlmwltype.updateusr}</td>
                  <td>{wlmwltype.wfstate}</td>
                  <td>{wlmwltype.wfprocid}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${wlmwltype.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${wlmwltype.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${wlmwltype.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.wlmwltype.home.notFound">No Wlmwltypes found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ wlmwltype }: IRootState) => ({
  wlmwltypeList: wlmwltype.entities,
  loading: wlmwltype.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Wlmwltype);
