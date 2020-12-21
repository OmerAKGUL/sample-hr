import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxorganization.reducer';
import { IItxorganization } from 'app/shared/model/itxorganization.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxorganizationProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxorganization = (props: IItxorganizationProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxorganizationList, match, loading } = props;
  return (
    <div>
      <h2 id="itxorganization-heading">
        <Translate contentKey="sampleHrApp.itxorganization.home.title">Itxorganizations</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxorganization.home.createLabel">Create new Itxorganization</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxorganizationList && itxorganizationList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.commtitle">Commtitle</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.localcommtitle">Localcommtitle</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.sector">Sector</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.segment">Segment</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.traderegno">Traderegno</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.hqaddress">Hqaddress</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.enterprisetype">Enterprisetype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.registerdate">Registerdate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.swiftcode">Swiftcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.wwwaddr">Wwwaddr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxorganization.regcountry">Regcountry</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxorganizationList.map((itxorganization, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxorganization.id}`} color="link" size="sm">
                      {itxorganization.id}
                    </Button>
                  </td>
                  <td>{itxorganization.commtitle}</td>
                  <td>{itxorganization.localcommtitle}</td>
                  <td>{itxorganization.sector}</td>
                  <td>{itxorganization.segment}</td>
                  <td>{itxorganization.traderegno}</td>
                  <td>{itxorganization.hqaddress}</td>
                  <td>{itxorganization.enterprisetype}</td>
                  <td>
                    {itxorganization.registerdate ? (
                      <TextFormat type="date" value={itxorganization.registerdate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{itxorganization.swiftcode}</td>
                  <td>{itxorganization.wwwaddr}</td>
                  <td>
                    {itxorganization.regcountry ? (
                      <Link to={`itxcountry/${itxorganization.regcountry.id}`}>{itxorganization.regcountry.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxorganization.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxorganization.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxorganization.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxorganization.home.notFound">No Itxorganizations found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxorganization }: IRootState) => ({
  itxorganizationList: itxorganization.entities,
  loading: itxorganization.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxorganization);
