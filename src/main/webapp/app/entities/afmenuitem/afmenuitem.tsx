import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afmenuitem.reducer';
import { IAfmenuitem } from 'app/shared/model/afmenuitem.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfmenuitemProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afmenuitem = (props: IAfmenuitemProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afmenuitemList, match, loading } = props;
  return (
    <div>
      <h2 id="afmenuitem-heading">
        <Translate contentKey="sampleHrApp.afmenuitem.home.title">Afmenuitems</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afmenuitem.home.createLabel">Create new Afmenuitem</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afmenuitemList && afmenuitemList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuitem.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuitem.afsid">Afsid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuitem.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuitem.title">Title</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuitem.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuitem.linktype">Linktype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuitem.appreflinkurl">Appreflinkurl</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuitem.modulecode">Modulecode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuitem.apprefformcode">Apprefformcode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afmenuitemList.map((afmenuitem, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afmenuitem.id}`} color="link" size="sm">
                      {afmenuitem.id}
                    </Button>
                  </td>
                  <td>{afmenuitem.code}</td>
                  <td>{afmenuitem.afsid}</td>
                  <td>{afmenuitem.name}</td>
                  <td>{afmenuitem.title}</td>
                  <td>{afmenuitem.descr}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Linktype.${afmenuitem.linktype}`} />
                  </td>
                  <td>{afmenuitem.appreflinkurl}</td>
                  <td>
                    {afmenuitem.modulecode ? <Link to={`afsysmodule/${afmenuitem.modulecode.id}`}>{afmenuitem.modulecode.id}</Link> : ''}
                  </td>
                  <td>
                    {afmenuitem.apprefformcode ? (
                      <Link to={`afform/${afmenuitem.apprefformcode.id}`}>{afmenuitem.apprefformcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afmenuitem.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afmenuitem.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afmenuitem.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afmenuitem.home.notFound">No Afmenuitems found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afmenuitem }: IRootState) => ({
  afmenuitemList: afmenuitem.entities,
  loading: afmenuitem.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afmenuitem);
