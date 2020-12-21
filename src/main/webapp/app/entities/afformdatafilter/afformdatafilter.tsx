import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afformdatafilter.reducer';
import { IAfformdatafilter } from 'app/shared/model/afformdatafilter.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfformdatafilterProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afformdatafilter = (props: IAfformdatafilterProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afformdatafilterList, match, loading } = props;
  return (
    <div>
      <h2 id="afformdatafilter-heading">
        <Translate contentKey="sampleHrApp.afformdatafilter.home.title">Afformdatafilters</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afformdatafilter.home.createLabel">Create new Afformdatafilter</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afformdatafilterList && afformdatafilterList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afformdatafilter.afsid">Afsid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afformdatafilter.affid">Affid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afformdatafilter.approlecode">Approlecode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afformdatafilter.appformcode">Appformcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afformdatafilter.appdatafiltercode">Appdatafiltercode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afformdatafilterList.map((afformdatafilter, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afformdatafilter.id}`} color="link" size="sm">
                      {afformdatafilter.id}
                    </Button>
                  </td>
                  <td>{afformdatafilter.afsid}</td>
                  <td>{afformdatafilter.affid}</td>
                  <td>
                    {afformdatafilter.approlecode ? (
                      <Link to={`afsrole/${afformdatafilter.approlecode.id}`}>{afformdatafilter.approlecode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {afformdatafilter.appformcode ? (
                      <Link to={`afform/${afformdatafilter.appformcode.id}`}>{afformdatafilter.appformcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {afformdatafilter.appdatafiltercode ? (
                      <Link to={`afdatafilter/${afformdatafilter.appdatafiltercode.id}`}>{afformdatafilter.appdatafiltercode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afformdatafilter.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afformdatafilter.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afformdatafilter.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afformdatafilter.home.notFound">No Afformdatafilters found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afformdatafilter }: IRootState) => ({
  afformdatafilterList: afformdatafilter.entities,
  loading: afformdatafilter.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afformdatafilter);
