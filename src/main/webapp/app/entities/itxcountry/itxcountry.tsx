import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxcountry.reducer';
import { IItxcountry } from 'app/shared/model/itxcountry.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcountryProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxcountry = (props: IItxcountryProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxcountryList, match, loading } = props;
  return (
    <div>
      <h2 id="itxcountry-heading">
        <Translate contentKey="sampleHrApp.itxcountry.home.title">Itxcountries</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxcountry.home.createLabel">Create new Itxcountry</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxcountryList && itxcountryList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcountry.isocode">Isocode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcountry.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcountry.localname">Localname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcountry.isocode2">Isocode 2</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcountry.numcode">Numcode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxcountryList.map((itxcountry, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxcountry.id}`} color="link" size="sm">
                      {itxcountry.id}
                    </Button>
                  </td>
                  <td>{itxcountry.isocode}</td>
                  <td>{itxcountry.name}</td>
                  <td>{itxcountry.localname}</td>
                  <td>{itxcountry.isocode2}</td>
                  <td>{itxcountry.numcode}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxcountry.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcountry.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcountry.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxcountry.home.notFound">No Itxcountries found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxcountry }: IRootState) => ({
  itxcountryList: itxcountry.entities,
  loading: itxcountry.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxcountry);
