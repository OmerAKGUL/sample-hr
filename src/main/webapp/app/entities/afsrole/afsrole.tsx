import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afsrole.reducer';
import { IAfsrole } from 'app/shared/model/afsrole.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsroleProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afsrole = (props: IAfsroleProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afsroleList, match, loading } = props;
  return (
    <div>
      <h2 id="afsrole-heading">
        <Translate contentKey="sampleHrApp.afsrole.home.title">Afsroles</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afsrole.home.createLabel">Create new Afsrole</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afsroleList && afsroleList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsrole.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsrole.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsrole.descr">Descr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afsroleList.map((afsrole, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afsrole.id}`} color="link" size="sm">
                      {afsrole.id}
                    </Button>
                  </td>
                  <td>{afsrole.name}</td>
                  <td>{afsrole.code}</td>
                  <td>{afsrole.descr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afsrole.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsrole.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsrole.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afsrole.home.notFound">No Afsroles found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afsrole }: IRootState) => ({
  afsroleList: afsrole.entities,
  loading: afsrole.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afsrole);
