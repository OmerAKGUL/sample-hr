import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxaccounttinfo.reducer';
import { IItxaccounttinfo } from 'app/shared/model/itxaccounttinfo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxaccounttinfoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxaccounttinfo = (props: IItxaccounttinfoProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxaccounttinfoList, match, loading } = props;
  return (
    <div>
      <h2 id="itxaccounttinfo-heading">
        <Translate contentKey="sampleHrApp.itxaccounttinfo.home.title">Itxaccounttinfos</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxaccounttinfo.home.createLabel">Create new Itxaccounttinfo</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxaccounttinfoList && itxaccounttinfoList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxaccounttinfo.srcsysacccode">Srcsysacccode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxaccounttinfo.typeid">Typeid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxaccounttinfo.srcsyscode">Srcsyscode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxaccounttinfo.ownercustid">Ownercustid</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxaccounttinfoList.map((itxaccounttinfo, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxaccounttinfo.id}`} color="link" size="sm">
                      {itxaccounttinfo.id}
                    </Button>
                  </td>
                  <td>{itxaccounttinfo.srcsysacccode}</td>
                  <td>
                    {itxaccounttinfo.typeid ? (
                      <Link to={`itxaccounttype/${itxaccounttinfo.typeid.id}`}>{itxaccounttinfo.typeid.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {itxaccounttinfo.srcsyscode ? (
                      <Link to={`afsystem/${itxaccounttinfo.srcsyscode.id}`}>{itxaccounttinfo.srcsyscode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {itxaccounttinfo.ownercustid ? (
                      <Link to={`itxcustinfo/${itxaccounttinfo.ownercustid.id}`}>{itxaccounttinfo.ownercustid.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxaccounttinfo.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxaccounttinfo.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxaccounttinfo.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxaccounttinfo.home.notFound">No Itxaccounttinfos found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxaccounttinfo }: IRootState) => ({
  itxaccounttinfoList: itxaccounttinfo.entities,
  loading: itxaccounttinfo.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxaccounttinfo);
