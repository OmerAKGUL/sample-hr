import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afmenuchild.reducer';
import { IAfmenuchild } from 'app/shared/model/afmenuchild.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfmenuchildProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Afmenuchild = (props: IAfmenuchildProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { afmenuchildList, match, loading } = props;
  return (
    <div>
      <h2 id="afmenuchild-heading">
        <Translate contentKey="sampleHrApp.afmenuchild.home.title">Afmenuchildren</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afmenuchild.home.createLabel">Create new Afmenuchild</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {afmenuchildList && afmenuchildList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuchild.afmid">Afmid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuchild.menuitemcode">Menuitemcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afmenuchild.childcode">Childcode</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afmenuchildList.map((afmenuchild, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afmenuchild.id}`} color="link" size="sm">
                      {afmenuchild.id}
                    </Button>
                  </td>
                  <td>{afmenuchild.afmid}</td>
                  <td>
                    {afmenuchild.menuitemcode ? (
                      <Link to={`afmenuitem/${afmenuchild.menuitemcode.id}`}>{afmenuchild.menuitemcode.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {afmenuchild.childcode ? <Link to={`afmenuitem/${afmenuchild.childcode.id}`}>{afmenuchild.childcode.id}</Link> : ''}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afmenuchild.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afmenuchild.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afmenuchild.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afmenuchild.home.notFound">No Afmenuchildren found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afmenuchild }: IRootState) => ({
  afmenuchildList: afmenuchild.entities,
  loading: afmenuchild.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afmenuchild);
