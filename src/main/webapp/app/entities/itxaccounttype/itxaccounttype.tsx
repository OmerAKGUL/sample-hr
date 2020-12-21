import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxaccounttype.reducer';
import { IItxaccounttype } from 'app/shared/model/itxaccounttype.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxaccounttypeProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxaccounttype = (props: IItxaccounttypeProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxaccounttypeList, match, loading } = props;
  return (
    <div>
      <h2 id="itxaccounttype-heading">
        <Translate contentKey="sampleHrApp.itxaccounttype.home.title">Itxaccounttypes</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxaccounttype.home.createLabel">Create new Itxaccounttype</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxaccounttypeList && itxaccounttypeList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxaccounttype.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxaccounttype.descr">Descr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxaccounttypeList.map((itxaccounttype, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxaccounttype.id}`} color="link" size="sm">
                      {itxaccounttype.id}
                    </Button>
                  </td>
                  <td>{itxaccounttype.name}</td>
                  <td>{itxaccounttype.descr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxaccounttype.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxaccounttype.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxaccounttype.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxaccounttype.home.notFound">No Itxaccounttypes found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxaccounttype }: IRootState) => ({
  itxaccounttypeList: itxaccounttype.entities,
  loading: itxaccounttype.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxaccounttype);
