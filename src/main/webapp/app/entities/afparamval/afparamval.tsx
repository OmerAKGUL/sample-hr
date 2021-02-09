import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './afparamval.reducer';
import { IAfparamval } from 'app/shared/model/afparamval.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfparamvalProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

let sumValues = 0;
let sumValues2 = 0;
export const Afparamval = (props: IAfparamvalProps) => {
  useEffect(() => {
    props.getEntities();
    

  }, []);

  const { afparamvalList, match, loading } = props;

  const calculateFunction = () => {
    if (props.afparamvalList && props.afparamvalList.length > 0)
    {
      sumValues = 0;
      sumValues2 = 0;
      for (const [index, value] of afparamvalList.entries()) 
      {
        if(value.paramgrpname === "Match.Fields")
        {
          sumValues = sumValues + parseInt(value.value,10);
          // console.warn("value.paramgrpname === Match.Fields:" + (value.paramgrpname === "Match.Fields"));
          // console.warn("-------------sumValues:" + sumValues);
          // console.warn("sumValues === 100:" + (sumValues === 100));
        }
        if(value.paramgrpname === "Match.Algorithm" && value.valuetype === "BOOLEAN"	)
        {
          if(value.value === "TRUE"){
            sumValues2 = sumValues2 + 100;
            // console.warn("-------sumValues2:" + sumValues2);
            // console.warn("sumValues2 === 100:" + (sumValues2 === 100));
          }
        }
      }  
  
    }
  }
  

  return (
    <div>
      
      {calculateFunction()}
      <h2 id="afparamval-heading">
        <Translate contentKey="sampleHrApp.afparamval.home.title">Afparamvals</Translate>
       {/* <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.afparamval.home.createLabel">Create new Afparamval</Translate>
        </Link>*/}
      </h2>
      <div>
      { sumValues !== 100 ? <Translate  contentKey="sampleHrApp.afparamval.home.matchFieldsInfo">Create new Afparamval</Translate> : null}
      </div>
      <div>
      { sumValues2 !== 100 ? <Translate contentKey="sampleHrApp.afparamval.home.matchAlgoInfo">Create new Afparamval</Translate> : null}
      </div>
      <div className="table-responsive">
        {afparamvalList && afparamvalList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.idxno">Idxno</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.paramtype">Paramtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.paramgrpname">Paramgrpname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.valuetype">Valuetype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.valueformat">Valueformat</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.valueunit">Valueunit</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.value">Value</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.descr">Descr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.ownersys">Ownersys</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.afparamval.updateusr">Updateusr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {afparamvalList.map((afparamval, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${afparamval.id}`} color="link" size="sm">
                      {afparamval.id}
                    </Button>
                  </td>
                  <td>{afparamval.code}</td>
                  <td>{afparamval.idxno}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Paramtype.${afparamval.paramtype}`} />
                  </td>
                  <td>{afparamval.paramgrpname}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Valtype.${afparamval.valuetype}`} />
                  </td>
                  <td>{afparamval.valueformat}</td>
                  <td>{afparamval.valueunit}</td>
                  <td style={ afparamval.paramgrpname === "Match.Fields" && sumValues === 100 ? { background: 'green' } : afparamval.paramgrpname === "Match.Algorithm" && afparamval.valuetype === "BOOLEAN" && sumValues2 === 100 ? { background: 'green' } : afparamval.paramgrpname === "Match.Algorithm" && afparamval.valuetype === "INTEGER" && parseInt(afparamval.value,10)>=75 && parseInt(afparamval.value,10) <= 100 ? { background: 'green' } : { background: 'red' } }>{afparamval.value }</td>
                  <td>{afparamval.descr}</td>
                  <td>{afparamval.ownersys}</td>
                  <td>{afparamval.wfstate}</td>
                  <td>{afparamval.wfprocid}</td>
                  <td>{afparamval.createdt ? <TextFormat type="date" value={afparamval.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afparamval.updatedt ? <TextFormat type="date" value={afparamval.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{afparamval.createusr}</td>
                  <td>{afparamval.updateusr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${afparamval.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afparamval.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${afparamval.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="sampleHrApp.afparamval.home.notFound">No Afparamvals found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ afparamval }: IRootState) => ({
  afparamvalList: afparamval.entities,
  loading: afparamval.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Afparamval);
