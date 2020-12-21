import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afsauthentication.reducer';
import { IAfsauthentication } from 'app/shared/model/afsauthentication.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsauthenticationProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afsauthentication = (props: IAfsauthenticationProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afsauthenticationList, match, loading } = props;
  return (
    <div>
      <h2 id="afsauthentication-heading">
        <Translate contentKey="sampleHrApp.afsauthentication.home.title">Afsauthentications</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afsauthentication.home.createLabel">Create new Afsauthentication</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afsauthenticationList && afsauthenticationList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthentication.afsid">Afsid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthentication.authtype">Authtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthentication.pwdhash">Pwdhash</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthentication.secprotocol">Secprotocol</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthentication.appauthlink">Appauthlink</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthentication.rolecode">Rolecode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthentication.modulecode">Modulecode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afsauthenticationList.map((afsauthentication, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afsauthentication.id}`} color="link" size="sm">
                      {afsauthentication.id}
                    </Button>
                  </td>
                  <td>{afsauthentication.afsid}</td>
                  <td>{afsauthentication.authtype}</td>
                  <td>{afsauthentication.pwdhash}</td>
                  <td>{afsauthentication.secprotocol}</td>
                  <td>{afsauthentication.appauthlink}</td>
                  <td>
                    {afsauthentication.rolecode ? (
                      <Link to={`afsrole/${afsauthentication.rolecode.id}`}>{afsauthentication.rolecode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {afsauthentication.modulecode ? (
                      <Link to={`afsysmodule/${afsauthentication.modulecode.id}`}>{afsauthentication.modulecode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afsauthentication.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsauthentication.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsauthentication.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afsauthentication.home.notFound">No Afsauthentications found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afsauthentication }: IRootState) => ({
  afsauthenticationList: afsauthentication.entities,
  loading: afsauthentication.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afsauthentication);
