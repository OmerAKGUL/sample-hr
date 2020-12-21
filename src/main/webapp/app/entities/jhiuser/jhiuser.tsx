import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './jhiuser.reducer';
import { IJhiuser } from 'app/shared/model/jhiuser.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IJhiuserProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Jhiuser = (props: IJhiuserProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { jhiuserList, match, loading } = props;
  return (
    <div>
      <h2 id="jhiuser-heading">
        <Translate contentKey="sampleHrApp.jhiuser.home.title">Jhiusers</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.jhiuser.home.createLabel">Create new Jhiuser</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {jhiuserList && jhiuserList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.loginname">Loginname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.passwordhash">Passwordhash</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.firstname">Firstname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.lastname">Lastname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.imageurl">Imageurl</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.langkey">Langkey</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.activationkey">Activationkey</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.resetkey">Resetkey</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.createdby">Createdby</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.createddate">Createddate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.resetdate">Resetdate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.lastmodifiedby">Lastmodifiedby</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.jhiuser.lastmodifieddate">Lastmodifieddate</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {jhiuserList.map((jhiuser, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${jhiuser.id}`} color="link" size="sm">
                      {jhiuser.id}
                    </Button>
                  </td>
                  <td>{jhiuser.loginname}</td>
                  <td>{jhiuser.passwordhash}</td>
                  <td>{jhiuser.firstname}</td>
                  <td>{jhiuser.lastname}</td>
                  <td>{jhiuser.imageurl}</td>
                  <td>{jhiuser.langkey}</td>
                  <td>{jhiuser.activationkey}</td>
                  <td>{jhiuser.resetkey}</td>
                  <td>{jhiuser.createdby}</td>
                  <td>{jhiuser.createddate ? <TextFormat type="date" value={jhiuser.createddate} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{jhiuser.resetdate ? <TextFormat type="date" value={jhiuser.resetdate} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{jhiuser.lastmodifiedby}</td>
                  <td>
                    {jhiuser.lastmodifieddate ? <TextFormat type="date" value={jhiuser.lastmodifieddate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${jhiuser.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${jhiuser.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${jhiuser.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.jhiuser.home.notFound">No Jhiusers found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ jhiuser }: IRootState) => ({
  jhiuserList: jhiuser.entities,
  loading: jhiuser.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Jhiuser);
