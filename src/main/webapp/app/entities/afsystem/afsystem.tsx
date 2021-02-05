import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afsystem.reducer';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsystemProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afsystem = (props: IAfsystemProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afsystemList, match, loading } = props;
  return (
    <div>
      <h2 id="afsystem-heading">
        <Translate contentKey="sampleHrApp.afsystem.home.title">Afsystems</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afsystem.home.createLabel">Create new Afsystem</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afsystemList && afsystemList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsystem.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsystem.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsystem.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsystem.apprefcode">Apprefcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsystem.systype">Systype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsystem.appdomaincode">Appdomaincode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsystem.connecttype">Connecttype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsystem.connectstr">Connectstr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afsystemList.map((afsystem, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afsystem.id}`} color="link" size="sm">
                      {afsystem.id}
                    </Button>
                  </td>
                  <td>{afsystem.code}</td>
                  <td>{afsystem.name}</td>
                  <td>{afsystem.descr}</td>
                  <td>{afsystem.apprefcode}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Systype.${afsystem.systype}`} />
                  </td>
                  <td>{afsystem.appdomaincode}</td>
                  <td>{afsystem.connecttype}</td>
                  <td>{afsystem.connectstr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afsystem.id}/edit`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsystem.id}`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsystem.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afsystem.home.notFound">No Afsystems found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afsystem }: IRootState) => ({
  afsystemList: afsystem.entities,
  loading: afsystem.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afsystem);
