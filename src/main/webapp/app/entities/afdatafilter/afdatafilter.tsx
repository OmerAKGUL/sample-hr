import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afdatafilter.reducer';
import { IAfdatafilter } from 'app/shared/model/afdatafilter.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfdatafilterProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afdatafilter = (props: IAfdatafilterProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afdatafilterList, match, loading } = props;
  return (
    <div>
      <h2 id="afdatafilter-heading">
        <Translate contentKey="sampleHrApp.afdatafilter.home.title">Afdatafilters</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afdatafilter.home.createLabel">Create new Afdatafilter</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afdatafilterList && afdatafilterList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afdatafilter.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afdatafilter.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afdatafilter.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afdatafilter.appscript">Appscript</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afdatafilter.type">Type</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afdatafilterList.map((afdatafilter, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afdatafilter.id}`} color="link" size="sm">
                      {afdatafilter.id}
                    </Button>
                  </td>
                  <td>{afdatafilter.code}</td>
                  <td>{afdatafilter.name}</td>
                  <td>{afdatafilter.descr}</td>
                  <td>{afdatafilter.appscript}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Datafiltertype.${afdatafilter.type}`} />
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afdatafilter.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afdatafilter.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afdatafilter.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afdatafilter.home.notFound">No Afdatafilters found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afdatafilter }: IRootState) => ({
  afdatafilterList: afdatafilter.entities,
  loading: afdatafilter.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afdatafilter);
