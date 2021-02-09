import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './meconfig.reducer';
import { IMeconfig } from 'app/shared/model/meconfig.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMeconfigProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Meconfig = (props: IMeconfigProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);


  const { meconfigList, match, loading } = props;
  return (
    <div>
      <h2 id="meconfig-heading">
        <Translate contentKey="sampleHrApp.meconfig.home.title">Meconfigs</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.meconfig.home.createLabel">Create new Meconfig</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {meconfigList && meconfigList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.wlfieldlist">Wlfieldlist</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.wfstate" >Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.scheduleid">Scheduleid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.meconfig.updateusr">Updateusr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {meconfigList.map((meconfig, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${meconfig.id}`} color="link" size="sm">
                      {meconfig.id}
                    </Button>
                  </td>
                  <td>{meconfig.code}</td>
                  <td>{meconfig.name}</td>
                  <td>{meconfig.descr}</td>
                  <td>{meconfig.wlfieldlist}</td>
                  {/* bgcolor = {meconfig.wfstate === "1" ? "red":meconfig.wfstate === "2" ? "yellow":"green" } */}
          <td >
					
					{meconfig.wfstate === "1" ? <Translate contentKey="sampleHrApp.meconfig.stopped">Stopped</Translate>:meconfig.wfstate === "2" ? <Translate contentKey="sampleHrApp.meconfig.preparing">Preparing</Translate>:<Translate contentKey="sampleHrApp.meconfig.started">Started</Translate>}
					
					</td>
                  
					<td>{meconfig.wfprocid}</td>
                  <td>{meconfig.scheduleid ? <Link to={`afschedule/${meconfig.scheduleid.id}`}>{meconfig.scheduleid.name}</Link> : ''}</td>
                  <td>{meconfig.createdt ? <TextFormat type="date" value={meconfig.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{meconfig.updatedt ? <TextFormat type="date" value={meconfig.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{meconfig.createusr}</td>
                  <td>{meconfig.updateusr}</td>
                  <td className="text-right">
					<div className="btn-group flex-btn-group-container">
					{meconfig.wfstate === "1"?
                     <Button tag={Link} to={`${match.url}/${meconfig.id}/delete`}  color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.start">Start</Translate>
                        </span>
                      </Button>
					:null}
					{meconfig.wfstate === "3"?
                      <Button tag={Link} to={`${match.url}/${meconfig.id}/delete`}  color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.stop">Stop</Translate>
                        </span>
                      </Button>:null}
					 {/* }<Button tag={Link} to={`${match.url}/${meconfig.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${meconfig.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${meconfig.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="sampleHrApp.meconfig.home.notFound">No Meconfigs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ meconfig }: IRootState) => ({
  meconfigList: meconfig.entities,
  loading: meconfig.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Meconfig);
