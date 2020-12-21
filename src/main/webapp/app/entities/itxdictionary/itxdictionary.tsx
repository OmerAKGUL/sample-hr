import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxdictionary.reducer';
import { IItxdictionary } from 'app/shared/model/itxdictionary.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxdictionaryProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxdictionary = (props: IItxdictionaryProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxdictionaryList, match, loading } = props;
  return (
    <div>
      <h2 id="itxdictionary-heading">
        <Translate contentKey="sampleHrApp.itxdictionary.home.title">Itxdictionaries</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxdictionary.home.createLabel">Create new Itxdictionary</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxdictionaryList && itxdictionaryList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxdictionary.termname">Termname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxdictionary.type">Type</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxdictionary.countryisocode">Countryisocode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxdictionaryList.map((itxdictionary, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxdictionary.id}`} color="link" size="sm">
                      {itxdictionary.id}
                    </Button>
                  </td>
                  <td>{itxdictionary.termname}</td>
                  <td>{itxdictionary.type}</td>
                  <td>
                    {itxdictionary.countryisocode ? (
                      <Link to={`itxcountry/${itxdictionary.countryisocode.id}`}>{itxdictionary.countryisocode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxdictionary.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxdictionary.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxdictionary.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxdictionary.home.notFound">No Itxdictionaries found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxdictionary }: IRootState) => ({
  itxdictionaryList: itxdictionary.entities,
  loading: itxdictionary.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxdictionary);
