import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afwfstate.reducer';
import { IAfwfstate } from 'app/shared/model/afwfstate.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfwfstateProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afwfstate = (props: IAfwfstateProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afwfstateList, match, loading } = props;
  return (
    <div>
      <h2 id="afwfstate-heading">
        <Translate contentKey="sampleHrApp.afwfstate.home.title">Afwfstates</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afwfstate.home.createLabel">Create new Afwfstate</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afwfstateList && afwfstateList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.apprefhandlerfrm">Apprefhandlerfrm</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.apprefhandlerdom">Apprefhandlerdom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.wfcode">Wfcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfstate.updateusr">Updateusr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afwfstateList.map((afwfstate, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afwfstate.id}`} color="link" size="sm">
                      {afwfstate.id}
                    </Button>
                  </td>
                  <td>{afwfstate.code}</td>
                  <td>{afwfstate.name}</td>
                  <td>{afwfstate.descr}</td>
                  <td>{afwfstate.apprefhandlerfrm}</td>
                  <td>{afwfstate.apprefhandlerdom}</td>
                  <td>{afwfstate.wfstate}</td>
                  <td>{afwfstate.wfprocid}</td>
                  <td>{afwfstate.wfcode ? <Link to={`afworkflow/${afwfstate.wfcode.id}`}>{afwfstate.wfcode.id}</Link> : ''}</td>
                  <td>{afwfstate.createdt ? <TextFormat type="date" value={afwfstate.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afwfstate.updatedt ? <TextFormat type="date" value={afwfstate.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afwfstate.createusr}</td>
                  <td>{afwfstate.updateusr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afwfstate.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afwfstate.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afwfstate.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afwfstate.home.notFound">No Afwfstates found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afwfstate }: IRootState) => ({
  afwfstateList: afwfstate.entities,
  loading: afwfstate.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afwfstate);
