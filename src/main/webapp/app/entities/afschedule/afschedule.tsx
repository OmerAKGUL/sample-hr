import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afschedule.reducer';
import { IAfschedule } from 'app/shared/model/afschedule.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfscheduleProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afschedule = (props: IAfscheduleProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afscheduleList, match, loading } = props;
  return (
    <div>
      <h2 id="afschedule-heading">
        <Translate contentKey="sampleHrApp.afschedule.home.title">Afschedules</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afschedule.home.createLabel">Create new Afschedule</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afscheduleList && afscheduleList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.dtvalidfrom">Dtvalidfrom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.dtvaliduntil">Dtvaliduntil</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.periodunit">Periodunit</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.period">Period</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.wfprocid">Wfprocid</Translate>
                </th>
                {/* <th>
                  <Translate contentKey="sampleHrApp.afschedule.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afschedule.updateusr">Updateusr</Translate>
                </th> */}
                <th />
              </tr>
            </thead>
            <tbody>
              {afscheduleList.map((afschedule, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afschedule.id}`} color="link" size="sm">
                      {afschedule.id}
                    </Button>
                  </td>
                  <td>{afschedule.name}</td>
                  <td>{afschedule.descr}</td>
                  <td>
                    {afschedule.dtvalidfrom ? <TextFormat type="date" value={afschedule.dtvalidfrom} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {afschedule.dtvaliduntil ? <TextFormat type="date" value={afschedule.dtvaliduntil} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Periodunit.${afschedule.periodunit}`} />
                  </td>
                  <td>{afschedule.period}</td>
                  <td>{afschedule.wfstate}</td>
                  <td>{afschedule.wfprocid}</td>
                  {/* <td>{afschedule.createdt ? <TextFormat type="date" value={afschedule.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afschedule.updatedt ? <TextFormat type="date" value={afschedule.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afschedule.createusr}</td>
                   <td>{afschedule.updateusr}</td> */}
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afschedule.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afschedule.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afschedule.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afschedule.home.notFound">No Afschedules found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afschedule }: IRootState) => ({
  afscheduleList: afschedule.entities,
  loading: afschedule.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afschedule);
