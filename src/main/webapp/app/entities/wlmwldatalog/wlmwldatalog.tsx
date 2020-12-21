import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './wlmwldatalog.reducer';
import { IWlmwldatalog } from 'app/shared/model/wlmwldatalog.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IWlmwldatalogProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Wlmwldatalog = (props: IWlmwldatalogProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { wlmwldatalogList, match, loading } = props;
  return (
    <div>
      <h2 id="wlmwldatalog-heading">
        <Translate contentKey="sampleHrApp.wlmwldatalog.home.title">Wlmwldatalogs</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.wlmwldatalog.home.createLabel">Create new Wlmwldatalog</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {wlmwldatalogList && wlmwldatalogList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.dtchanged">Dtchanged</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.changeusr">Changeusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.wltype">Wltype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.updateusr">Updateusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.namedata">Namedata</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.addressdata">Addressdata</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.citydata">Citydata</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.countrydata">Countrydata</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.birthdatedata">Birthdatedata</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.tinnumberdata">Tinnumberdata</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldatalog.wlwldataid">Wlwldataid</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {wlmwldatalogList.map((wlmwldatalog, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${wlmwldatalog.id}`} color="link" size="sm">
                      {wlmwldatalog.id}
                    </Button>
                  </td>
                  <td>
                    {wlmwldatalog.dtchanged ? <TextFormat type="date" value={wlmwldatalog.dtchanged} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{wlmwldatalog.changeusr}</td>
                  <td>{wlmwldatalog.wltype}</td>
                  <td>
                    {wlmwldatalog.createdt ? <TextFormat type="date" value={wlmwldatalog.createdt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {wlmwldatalog.updatedt ? <TextFormat type="date" value={wlmwldatalog.updatedt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{wlmwldatalog.createusr}</td>
                  <td>{wlmwldatalog.updateusr}</td>
                  <td>{wlmwldatalog.wfstate}</td>
                  <td>{wlmwldatalog.wfprocid}</td>
                  <td>{wlmwldatalog.namedata}</td>
                  <td>{wlmwldatalog.addressdata}</td>
                  <td>{wlmwldatalog.citydata}</td>
                  <td>{wlmwldatalog.countrydata}</td>
                  <td>
                    {wlmwldatalog.birthdatedata ? (
                      <TextFormat type="date" value={wlmwldatalog.birthdatedata} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{wlmwldatalog.tinnumberdata}</td>
                  <td>
                    {wlmwldatalog.wlwldataid ? (
                      <Link to={`wlmwldata/${wlmwldatalog.wlwldataid.id}`}>{wlmwldatalog.wlwldataid.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${wlmwldatalog.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${wlmwldatalog.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${wlmwldatalog.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.wlmwldatalog.home.notFound">No Wlmwldatalogs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ wlmwldatalog }: IRootState) => ({
  wlmwldatalogList: wlmwldatalog.entities,
  loading: wlmwldatalog.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Wlmwldatalog);
