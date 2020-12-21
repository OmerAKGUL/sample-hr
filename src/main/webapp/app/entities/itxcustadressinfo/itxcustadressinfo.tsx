import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxcustadressinfo.reducer';
import { IItxcustadressinfo } from 'app/shared/model/itxcustadressinfo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcustadressinfoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxcustadressinfo = (props: IItxcustadressinfoProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxcustadressinfoList, match, loading } = props;
  return (
    <div>
      <h2 id="itxcustadressinfo-heading">
        <Translate contentKey="sampleHrApp.itxcustadressinfo.home.title">Itxcustadressinfos</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxcustadressinfo.home.createLabel">Create new Itxcustadressinfo</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxcustadressinfoList && itxcustadressinfoList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.addrtype">Addrtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.addresstxt">Addresstxt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.addrline1">Addrline 1</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.addrline2">Addrline 2</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.postcode">Postcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.street1">Street 1</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.street2">Street 2</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.street3">Street 3</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.town">Town</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.county">County</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.city">City</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.country">Country</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxcustadressinfoList.map((itxcustadressinfo, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxcustadressinfo.id}`} color="link" size="sm">
                      {itxcustadressinfo.id}
                    </Button>
                  </td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Addrtype.${itxcustadressinfo.addrtype}`} />
                  </td>
                  <td>{itxcustadressinfo.addresstxt}</td>
                  <td>{itxcustadressinfo.addrline1}</td>
                  <td>{itxcustadressinfo.addrline2}</td>
                  <td>{itxcustadressinfo.postcode}</td>
                  <td>{itxcustadressinfo.street1}</td>
                  <td>{itxcustadressinfo.street2}</td>
                  <td>{itxcustadressinfo.street3}</td>
                  <td>{itxcustadressinfo.town}</td>
                  <td>{itxcustadressinfo.county}</td>
                  <td>{itxcustadressinfo.city}</td>
                  <td>
                    {itxcustadressinfo.country ? (
                      <Link to={`itxcountry/${itxcustadressinfo.country.id}`}>{itxcustadressinfo.country.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxcustadressinfo.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcustadressinfo.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcustadressinfo.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxcustadressinfo.home.notFound">No Itxcustadressinfos found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxcustadressinfo }: IRootState) => ({
  itxcustadressinfoList: itxcustadressinfo.entities,
  loading: itxcustadressinfo.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxcustadressinfo);
