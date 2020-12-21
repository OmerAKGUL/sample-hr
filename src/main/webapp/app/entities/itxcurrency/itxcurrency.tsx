import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxcurrency.reducer';
import { IItxcurrency } from 'app/shared/model/itxcurrency.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcurrencyProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxcurrency = (props: IItxcurrencyProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxcurrencyList, match, loading } = props;
  return (
    <div>
      <h2 id="itxcurrency-heading">
        <Translate contentKey="sampleHrApp.itxcurrency.home.title">Itxcurrencies</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxcurrency.home.createLabel">Create new Itxcurrency</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxcurrencyList && itxcurrencyList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcurrency.isocode">Isocode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcurrency.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcurrency.localname">Localname</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxcurrencyList.map((itxcurrency, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxcurrency.id}`} color="link" size="sm">
                      {itxcurrency.id}
                    </Button>
                  </td>
                  <td>{itxcurrency.isocode}</td>
                  <td>{itxcurrency.name}</td>
                  <td>{itxcurrency.localname}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxcurrency.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcurrency.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcurrency.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxcurrency.home.notFound">No Itxcurrencies found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxcurrency }: IRootState) => ({
  itxcurrencyList: itxcurrency.entities,
  loading: itxcurrency.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxcurrency);
