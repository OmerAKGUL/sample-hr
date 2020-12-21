import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afwprocess.reducer';
import { IAfwprocess } from 'app/shared/model/afwprocess.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfwprocessProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afwprocess = (props: IAfwprocessProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afwprocessList, match, loading } = props;
  return (
    <div>
      <h2 id="afwprocess-heading">
        <Translate contentKey="sampleHrApp.afwprocess.home.title">Afwprocesses</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afwprocess.home.createLabel">Create new Afwprocess</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afwprocessList && afwprocessList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.entity">Entity</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.apprefmngfrm">Apprefmngfrm</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.apprefmngdomain">Apprefmngdomain</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.updateusr">Updateusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwprocess.wfcode">Wfcode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afwprocessList.map((afwprocess, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afwprocess.id}`} color="link" size="sm">
                      {afwprocess.id}
                    </Button>
                  </td>
                  <td>{afwprocess.entity}</td>
                  <td>{afwprocess.apprefmngfrm}</td>
                  <td>{afwprocess.apprefmngdomain}</td>
                  <td>{afwprocess.createdt ? <TextFormat type="date" value={afwprocess.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afwprocess.updatedt ? <TextFormat type="date" value={afwprocess.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afwprocess.createusr}</td>
                  <td>{afwprocess.updateusr}</td>
                  <td>{afwprocess.wfstate}</td>
                  <td>{afwprocess.wfprocid}</td>
                  <td>{afwprocess.wfcode ? <Link to={`afworkflow/${afwprocess.wfcode.id}`}>{afwprocess.wfcode.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afwprocess.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afwprocess.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afwprocess.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afwprocess.home.notFound">No Afwprocesses found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afwprocess }: IRootState) => ({
  afwprocessList: afwprocess.entities,
  loading: afwprocess.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afwprocess);
