import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afform.reducer';
import { IAfform } from 'app/shared/model/afform.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfformProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afform = (props: IAfformProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afformList, match, loading } = props;
  return (
    <div>
      <h2 id="afform-heading">
        <Translate contentKey="sampleHrApp.afform.home.title">Afforms</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afform.home.createLabel">Create new Afform</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afformList && afformList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afform.title">Title</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afform.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afform.apprefclsid">Apprefclsid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afform.apprefformid">Apprefformid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afform.appreflinkurl">Appreflinkurl</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afform.code">Code</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afformList.map((afform, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afform.id}`} color="link" size="sm">
                      {afform.id}
                    </Button>
                  </td>
                  <td>{afform.title}</td>
                  <td>{afform.descr}</td>
                  <td>{afform.apprefclsid}</td>
                  <td>{afform.apprefformid}</td>
                  <td>{afform.appreflinkurl}</td>
                  <td>{afform.code ? <Link to={`afsysmodule/${afform.code.id}`}>{afform.code.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afform.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afform.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afform.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afform.home.notFound">No Afforms found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afform }: IRootState) => ({
  afformList: afform.entities,
  loading: afform.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afform);
