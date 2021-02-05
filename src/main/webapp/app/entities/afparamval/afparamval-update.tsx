import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, Redirect} from 'react-router-dom';
import { Button, Row, Col, Label, Table } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import afparamvalReducer, { getEntity, updateEntity, createEntity, reset, getEntities } from './afparamval.reducer';
import { IAfparamval } from 'app/shared/model/afparamval.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import afparamval, { Afparamval } from './afparamval';

export interface IAfparamvalUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfparamvalUpdate = (props: IAfparamvalUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);
  const { afparamvalEntity, loading, updating, match } = props;

  const handleClose = () => {
    props.history.push('/modules/af/afparamval');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.createdt = convertDateTimeToServer(values.createdt);
    values.updatedt = convertDateTimeToServer(values.updatedt);

    if (errors.length === 0) {
      const entity = {
        ...afparamvalEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sampleHrApp.afparamval.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afparamval.home.createOrEditLabel">Create or edit a Afparamval</Translate>
          </h2>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            

            <AvForm model={isNew ? {} : afparamvalEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afparamval-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afparamval-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="codeLabel" for="afparamval-code" >
                  <Translate contentKey="sampleHrApp.afparamval.code">Code</Translate>
                  
                </Label>
                <AvField
                  id="afparamval-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                  readOnly
                />
              </AvGroup>
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="idxnoLabel" for="afparamval-idxno">
                  <Translate contentKey="sampleHrApp.afparamval.idxno">Idxno</Translate>
                </Label>
                <AvField
                  id="afparamval-idxno"
                  type="string"
                  className="form-control"
                  name="idxno"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                  readOnly
                />
              </AvGroup>
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="paramtypeLabel" for="afparamval-paramtype">
                  <Translate contentKey="sampleHrApp.afparamval.paramtype">Paramtype</Translate>
                </Label>
                <AvInput
                  id="afparamval-paramtype"
                  type="select"
                  className="form-control"
                  name="paramtype"
                  value={(!isNew && afparamvalEntity.paramtype) || 'APPFRM'}
                  readOnly
                >
                  <option value="APPFRM">{translate('sampleHrApp.Paramtype.APPFRM')}</option>
                  <option value="DOMAINAPP">{translate('sampleHrApp.Paramtype.DOMAINAPP')}</option>
                  <option value="BUSINESS">{translate('sampleHrApp.Paramtype.BUSINESS')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="paramgrpnameLabel" for="afparamval-paramgrpname">
                  <Translate contentKey="sampleHrApp.afparamval.paramgrpname">Paramgrpname</Translate>
                </Label>
                <AvField
                  id="afparamval-paramgrpname"
                  type="text"
                  name="paramgrpname"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                  readOnly
                />
              </AvGroup>
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="valuetypeLabel" for="afparamval-valuetype">
                  <Translate contentKey="sampleHrApp.afparamval.valuetype">Valuetype</Translate>
                </Label>
                <AvInput
                  id="afparamval-valuetype"
                  type="select"
                  className="form-control"
                  name="valuetype"
                  value={(!isNew && afparamvalEntity.valuetype) || 'INTEGER'}
                  readOnly
                >
                  <option value="INTEGER">{translate('sampleHrApp.Valtype.INTEGER')}</option>
                  <option value="STRING">{translate('sampleHrApp.Valtype.STRING')}</option>
                  <option value="DATE">{translate('sampleHrApp.Valtype.DATE')}</option>
                  <option value="DATETIME">{translate('sampleHrApp.Valtype.DATETIME')}</option>
                  <option value="TIME">{translate('sampleHrApp.Valtype.TIME')}</option>
                  <option value="BOOLEAN">{translate('sampleHrApp.Valtype.BOOLEAN')}</option>
                </AvInput>
                
              </AvGroup>
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="valueformatLabel" for="afparamval-valueformat">
                  <Translate contentKey="sampleHrApp.afparamval.valueformat">Valueformat</Translate>
                </Label>
                <AvField id="afparamval-valueformat" type="text" name="valueformat" readOnly/>
              </AvGroup>
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="valueunitLabel" for="afparamval-valueunit">
                  <Translate contentKey="sampleHrApp.afparamval.valueunit">Valueunit</Translate>
                </Label>
                <AvField id="afparamval-valueunit" type="text" name="valueunit" readOnly/>
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afparamval-descr">
                  <Translate contentKey="sampleHrApp.afparamval.descr">Descr</Translate>
                </Label>
                <AvField id="afparamval-descr" type="text" name="descr" readOnly/>
              </AvGroup>
              {afparamvalEntity.paramgrpname === "Match.Algorithm" && afparamvalEntity.valuetype === "BOOLEAN"?
                <AvGroup>
                  <Label id="valueLabel" for="afparamval-value">
                    <Translate contentKey="sampleHrApp.afparamval.value">Value</Translate>
                  </Label>
                  <AvInput type ="select" className="form-control" id="afparamval-value" name="value">
                     <option value="TRUE">TRUE</option>
                    <option value="FALSE">FALSE</option>
                  </AvInput>
                </AvGroup>
                :
                afparamvalEntity.paramgrpname === "Match.Algorithm" && afparamvalEntity.valuetype === "INTEGER"
                ?
                <AvGroup>
                <Label id="valueLabel" for="afparamval-value">
                  <Translate contentKey="sampleHrApp.afparamval.value">Value</Translate>
                </Label>
                <AvField id="afparamval-value" type="number" name="value" max="100" min="75"/>
                </AvGroup>
                :
                <AvGroup>
                <Label id="valueLabel" for="afparamval-value">
                  <Translate contentKey="sampleHrApp.afparamval.value">Value</Translate>
                </Label>
                <AvField id="afparamval-value" type="number" name="value" min="1" />
                </AvGroup>
              }
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="ownersysLabel" for="afparamval-ownersys">
                  <Translate contentKey="sampleHrApp.afparamval.ownersys">Ownersys</Translate>
                </Label>
                <AvField id="afparamval-ownersys" type="text" name="ownersys" readOnly/>
              </AvGroup>
              { /* <AvGroup>
                <Label id="createdtLabel" for="afparamval-createdt">
                  <Translate contentKey="sampleHrApp.afparamval.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="afparamval-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afparamvalEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="afparamval-updatedt">
                  <Translate contentKey="sampleHrApp.afparamval.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="afparamval-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afparamvalEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="afparamval-createusr">
                  <Translate contentKey="sampleHrApp.afparamval.createusr">Createusr</Translate>
                </Label>
                <AvField id="afparamval-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="afparamval-updateusr">
                  <Translate contentKey="sampleHrApp.afparamval.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="afparamval-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup> */ }
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="wfstateLabel" for="afparamval-wfstate">
                  <Translate contentKey="sampleHrApp.afparamval.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="afparamval-wfstate" type="text" name="wfstate" readOnly/>
              </AvGroup>
              <AvGroup
                  hidden = { afparamvalEntity.paramgrpname === "Match.Fields" ? true : true}>
                <Label id="wfprocidLabel" for="afparamval-wfprocid">
                  <Translate contentKey="sampleHrApp.afparamval.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="afparamval-wfprocid" type="string" className="form-control" name="wfprocid" readOnly/>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/modules/af/afparamval" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  afparamvalEntity: storeState.afparamval.entity,
  loading: storeState.afparamval.loading,
  updating: storeState.afparamval.updating,
  updateSuccess: storeState.afparamval.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfparamvalUpdate);
