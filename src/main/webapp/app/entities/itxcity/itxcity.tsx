import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxcity.reducer';
import { IItxcity } from 'app/shared/model/itxcity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxcity = (props: IItxcityProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxcityList, match, loading } = props;
  return (
    <div>
      <h2 id="itxcity-heading">
        <Translate contentKey="sampleHrApp.itxcity.home.title">Itxcities</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxcity.home.createLabel">Create new Itxcity</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxcityList && itxcityList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcity.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcity.localname">Localname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcity.phonecode">Phonecode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcity.countryisocode">Countryisocode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxcityList.map((itxcity, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxcity.id}`} color="link" size="sm">
                      {itxcity.id}
                    </Button>
                  </td>
                  <td>{itxcity.name}</td>
                  <td>{itxcity.localname}</td>
                  <td>{itxcity.phonecode}</td>
                  <td>
                    {itxcity.countryisocode ? <Link to={`itxcountry/${itxcity.countryisocode.id}`}>{itxcity.countryisocode.id}</Link> : ''}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxcity.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcity.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcity.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxcity.home.notFound">No Itxcities found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxcity }: IRootState) => ({
  itxcityList: itxcity.entities,
  loading: itxcity.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxcity);
