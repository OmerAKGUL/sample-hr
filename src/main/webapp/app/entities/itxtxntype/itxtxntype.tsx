import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxtxntype.reducer';
import { IItxtxntype } from 'app/shared/model/itxtxntype.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxtxntypeProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxtxntype = (props: IItxtxntypeProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxtxntypeList, match, loading } = props;
  return (
    <div>
      <h2 id="itxtxntype-heading">
        <Translate contentKey="sampleHrApp.itxtxntype.home.title">Itxtxntypes</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxtxntype.home.createLabel">Create new Itxtxntype</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxtxntypeList && itxtxntypeList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxntype.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxntype.descr">Descr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxtxntypeList.map((itxtxntype, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxtxntype.id}`} color="link" size="sm">
                      {itxtxntype.id}
                    </Button>
                  </td>
                  <td>{itxtxntype.name}</td>
                  <td>{itxtxntype.descr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxtxntype.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxtxntype.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxtxntype.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxtxntype.home.notFound">No Itxtxntypes found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxtxntype }: IRootState) => ({
  itxtxntypeList: itxtxntype.entities,
  loading: itxtxntype.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxtxntype);
