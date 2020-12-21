import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxcustaddress.reducer';
import { IItxcustaddress } from 'app/shared/model/itxcustaddress.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcustaddressProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxcustaddress = (props: IItxcustaddressProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxcustaddressList, match, loading } = props;
  return (
    <div>
      <h2 id="itxcustaddress-heading">
        <Translate contentKey="sampleHrApp.itxcustaddress.home.title">Itxcustaddresses</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxcustaddress.home.createLabel">Create new Itxcustaddress</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxcustaddressList && itxcustaddressList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustaddress.custid">Custid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustaddress.addrid">Addrid</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxcustaddressList.map((itxcustaddress, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxcustaddress.id}`} color="link" size="sm">
                      {itxcustaddress.id}
                    </Button>
                  </td>
                  <td>
                    {itxcustaddress.custid ? <Link to={`itxcustinfo/${itxcustaddress.custid.id}`}>{itxcustaddress.custid.id}</Link> : ''}
                  </td>
                  <td>
                    {itxcustaddress.addrid ? (
                      <Link to={`itxcustadressinfo/${itxcustaddress.addrid.id}`}>{itxcustaddress.addrid.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxcustaddress.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcustaddress.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcustaddress.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxcustaddress.home.notFound">No Itxcustaddresses found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxcustaddress }: IRootState) => ({
  itxcustaddressList: itxcustaddress.entities,
  loading: itxcustaddress.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxcustaddress);
