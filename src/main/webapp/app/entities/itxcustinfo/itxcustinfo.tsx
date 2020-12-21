import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxcustinfo.reducer';
import { IItxcustinfo } from 'app/shared/model/itxcustinfo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcustinfoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxcustinfo = (props: IItxcustinfoProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { itxcustinfoList, match, loading } = props;
  return (
    <div>
      <h2 id="itxcustinfo-heading">
        <Translate contentKey="sampleHrApp.itxcustinfo.home.title">Itxcustinfos</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxcustinfo.home.createLabel">Create new Itxcustinfo</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxcustinfoList && itxcustinfoList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.srcsyscustid">Srcsyscustid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.itxid">Itxid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.midname">Midname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.surname">Surname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.birthdate">Birthdate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.commtitle">Commtitle</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.addresstype">Addresstype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.address">Address</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.city">City</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.nationality">Nationality</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.nationalid">Nationalid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.gender">Gender</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.updateusr">Updateusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.idtype1">Idtype 1</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.idno1">Idno 1</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.idtype2">Idtype 2</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.idno2">Idno 2</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.idtype3">Idtype 3</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.idno3">Idno 3</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.custorgid">Custorgid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.custtype">Custtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.srcsyscode">Srcsyscode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxcustinfo.custorgbrachid">Custorgbrachid</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxcustinfoList.map((itxcustinfo, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxcustinfo.id}`} color="link" size="sm">
                      {itxcustinfo.id}
                    </Button>
                  </td>
                  <td>{itxcustinfo.srcsyscustid}</td>
                  <td>{itxcustinfo.itxid}</td>
                  <td>{itxcustinfo.name}</td>
                  <td>{itxcustinfo.midname}</td>
                  <td>{itxcustinfo.surname}</td>
                  <td>
                    {itxcustinfo.birthdate ? <TextFormat type="date" value={itxcustinfo.birthdate} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{itxcustinfo.commtitle}</td>
                  <td>{itxcustinfo.addresstype}</td>
                  <td>{itxcustinfo.address}</td>
                  <td>{itxcustinfo.city}</td>
                  <td>{itxcustinfo.nationality}</td>
                  <td>{itxcustinfo.nationalid}</td>
                  <td>{itxcustinfo.gender}</td>
                  <td>{itxcustinfo.createdt ? <TextFormat type="date" value={itxcustinfo.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{itxcustinfo.updatedt ? <TextFormat type="date" value={itxcustinfo.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{itxcustinfo.createusr}</td>
                  <td>{itxcustinfo.updateusr}</td>
                  <td>{itxcustinfo.wfstate}</td>
                  <td>{itxcustinfo.wfprocid}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Idtype.${itxcustinfo.idtype1}`} />
                  </td>
                  <td>{itxcustinfo.idno1}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Idtype.${itxcustinfo.idtype2}`} />
                  </td>
                  <td>{itxcustinfo.idno2}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Idtype.${itxcustinfo.idtype3}`} />
                  </td>
                  <td>{itxcustinfo.idno3}</td>
                  <td>
                    {itxcustinfo.custorgid ? (
                      <Link to={`itxorganization/${itxcustinfo.custorgid.id}`}>{itxcustinfo.custorgid.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {itxcustinfo.custtype ? <Link to={`itxcusttype/${itxcustinfo.custtype.id}`}>{itxcustinfo.custtype.id}</Link> : ''}
                  </td>
                  <td>
                    {itxcustinfo.srcsyscode ? <Link to={`afsystem/${itxcustinfo.srcsyscode.id}`}>{itxcustinfo.srcsyscode.id}</Link> : ''}
                  </td>
                  <td>
                    {itxcustinfo.custorgbrachid ? (
                      <Link to={`itxorgbranch/${itxcustinfo.custorgbrachid.id}`}>{itxcustinfo.custorgbrachid.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxcustinfo.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcustinfo.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxcustinfo.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.itxcustinfo.home.notFound">No Itxcustinfos found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itxcustinfo }: IRootState) => ({
  itxcustinfoList: itxcustinfo.entities,
  loading: itxcustinfo.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxcustinfo);
