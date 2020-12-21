import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afsroleuser.reducer';
import { IAfsroleuser } from 'app/shared/model/afsroleuser.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsroleuserProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afsroleuser = (props: IAfsroleuserProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afsroleuserList, match, loading } = props;
  return (
    <div>
      <h2 id="afsroleuser-heading">
        <Translate contentKey="sampleHrApp.afsroleuser.home.title">Afsroleusers</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afsroleuser.home.createLabel">Create new Afsroleuser</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afsroleuserList && afsroleuserList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsroleuser.usrid">Usrid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsroleuser.rolecode">Rolecode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afsroleuserList.map((afsroleuser, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afsroleuser.id}`} color="link" size="sm">
                      {afsroleuser.id}
                    </Button>
                  </td>
                  <td>{afsroleuser.usrid ? <Link to={`jhiuser/${afsroleuser.usrid.id}`}>{afsroleuser.usrid.loginname}</Link> : ''}</td>
                  <td>{afsroleuser.rolecode ? <Link to={`afsrole/${afsroleuser.rolecode.id}`}>{afsroleuser.rolecode.name}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afsroleuser.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsroleuser.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsroleuser.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afsroleuser.home.notFound">No Afsroleusers found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afsroleuser }: IRootState) => ({
  afsroleuserList: afsroleuser.entities,
  loading: afsroleuser.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afsroleuser);
