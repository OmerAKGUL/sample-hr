import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afsauthorization.reducer';
import { IAfsauthorization } from 'app/shared/model/afsauthorization.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsauthorizationProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afsauthorization = (props: IAfsauthorizationProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afsauthorizationList, match, loading } = props;
  return (
    <div>
      <h2 id="afsauthorization-heading">
        <Translate contentKey="sampleHrApp.afsauthorization.home.title">Afsauthorizations</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afsauthorization.home.createLabel">Create new Afsauthorization</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afsauthorizationList && afsauthorizationList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthorization.authtype">Authtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthorization.afsid">Afsid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthorization.afsid2">Afsid 2</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthorization.afwid">Afwid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthorization.rolecode">Rolecode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthorization.acccode">Acccode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthorization.modulecode">Modulecode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afsauthorization.menuitemcode">Menuitemcode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afsauthorizationList.map((afsauthorization, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afsauthorization.id}`} color="link" size="sm">
                      {afsauthorization.id}
                    </Button>
                  </td>
                  <td>{afsauthorization.authtype}</td>
                  <td>{afsauthorization.afsid}</td>
                  <td>{afsauthorization.afsid2}</td>
                  <td>{afsauthorization.afwid}</td>
                  <td>
                    {afsauthorization.rolecode ? (
                      <Link to={`afsrole/${afsauthorization.rolecode.id}`}>{afsauthorization.rolecode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {afsauthorization.acccode ? (
                      <Link to={`afwfaction/${afsauthorization.acccode.id}`}>{afsauthorization.acccode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {afsauthorization.modulecode ? (
                      <Link to={`afsysmodule/${afsauthorization.modulecode.id}`}>{afsauthorization.modulecode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {afsauthorization.menuitemcode ? (
                      <Link to={`afmenuitem/${afsauthorization.menuitemcode.id}`}>{afsauthorization.menuitemcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afsauthorization.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsauthorization.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afsauthorization.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afsauthorization.home.notFound">No Afsauthorizations found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afsauthorization }: IRootState) => ({
  afsauthorizationList: afsauthorization.entities,
  loading: afsauthorization.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afsauthorization);
