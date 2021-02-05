import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afwfaction.reducer';
import { IAfwfaction } from 'app/shared/model/afwfaction.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfwfactionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afwfaction = (props: IAfwfactionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afwfactionList, match, loading } = props;
  return (
    <div>
      <h2 id="afwfaction-heading">
        <Translate contentKey="sampleHrApp.afwfaction.home.title">Afwfactions</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afwfaction.home.createLabel">Create new Afwfaction</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afwfactionList && afwfactionList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.apprefhandler">Apprefhandler</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.afsid">Afsid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.afmid">Afmid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.appmenucode">Appmenucode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.appformcode">Appformcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.appmodulecode">Appmodulecode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.wfcode">Wfcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afwfaction.updateusr">Updateusr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afwfactionList.map((afwfaction, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afwfaction.id}`} color="link" size="sm">
                      {afwfaction.id}
                    </Button>
                  </td>
                  <td>{afwfaction.code}</td>
                  <td>{afwfaction.name}</td>
                  <td>{afwfaction.descr}</td>
                  <td>{afwfaction.apprefhandler}</td>
                  <td>{afwfaction.afsid}</td>
                  <td>{afwfaction.afmid}</td>
                  <td>{afwfaction.wfstate}</td>
                  <td>{afwfaction.wfprocid}</td>
                  <td>
                    {afwfaction.appmenucode ? <Link to={`afmenuitem/${afwfaction.appmenucode.id}`}>{afwfaction.appmenucode.name}</Link> : ''}
                  </td>
                  <td>
                    {afwfaction.appformcode ? <Link to={`afform/${afwfaction.appformcode.id}`}>{afwfaction.appformcode.title}</Link> : ''}
                  </td>
                  <td>
                    {afwfaction.appmodulecode ? (
                      <Link to={`afsysmodule/${afwfaction.appmodulecode.id}`}>{afwfaction.appmodulecode.name}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>{afwfaction.wfcode ? <Link to={`afworkflow/${afwfaction.wfcode.id}`}>{afwfaction.wfcode.name}</Link> : ''}</td>
                  <td>{afwfaction.createdt ? <TextFormat type="date" value={afwfaction.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afwfaction.updatedt ? <TextFormat type="date" value={afwfaction.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afwfaction.createusr}</td>
                  <td>{afwfaction.updateusr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afwfaction.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afwfaction.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afwfaction.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afwfaction.home.notFound">No Afwfactions found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afwfaction }: IRootState) => ({
  afwfactionList: afwfaction.entities,
  loading: afwfaction.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afwfaction);
