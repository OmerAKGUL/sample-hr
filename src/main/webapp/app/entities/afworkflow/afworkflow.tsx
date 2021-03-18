import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afworkflow.reducer';
import { IAfworkflow } from 'app/shared/model/afworkflow.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfworkflowProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afworkflow = (props: IAfworkflowProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afworkflowList, match, loading } = props;
  return (
    <div>
      <h2 id="afworkflow-heading">
        <Translate contentKey="sampleHrApp.afworkflow.home.title">Afworkflows</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afworkflow.home.createLabel">Create new Afworkflow</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afworkflowList && afworkflowList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.apprefmngfrm">Apprefmngfrm</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.apprefmngdomain">Apprefmngdomain</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.wfprocid">Wfprocid</Translate>
                </th>
                {/* <th>
                  <Translate contentKey="sampleHrApp.afworkflow.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afworkflow.updateusr">Updateusr</Translate>
                </th> */}
                <th />
              </tr>
            </thead>
            <tbody>
              {afworkflowList.map((afworkflow, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afworkflow.id}`} color="link" size="sm">
                      {afworkflow.id}
                    </Button>
                  </td>
                  <td>{afworkflow.code}</td>
                  <td>{afworkflow.name}</td>
                  <td>{afworkflow.descr}</td>
                  <td>{afworkflow.apprefmngfrm}</td>
                  <td>{afworkflow.apprefmngdomain}</td>
                  <td>{afworkflow.wfstate}</td>
                  <td>{afworkflow.wfprocid}</td>
                  {/* <td>{afworkflow.createdt ? <TextFormat type="date" value={afworkflow.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afworkflow.updatedt ? <TextFormat type="date" value={afworkflow.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afworkflow.createusr}</td>
                  <td>{afworkflow.updateusr}</td> */}
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afworkflow.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afworkflow.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afworkflow.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afworkflow.home.notFound">No Afworkflows found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afworkflow }: IRootState) => ({
  afworkflowList: afworkflow.entities,
  loading: afworkflow.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afworkflow);
