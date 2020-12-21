import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './afparamval.reducer';
import { IAfparamval } from 'app/shared/model/afparamval.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfparamvalUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfparamvalUpdate = (props: IAfparamvalUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afparamvalEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afparamval');
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
              <AvGroup>
                <Label id="codeLabel" for="afparamval-code">
                  <Translate contentKey="sampleHrApp.afparamval.code">Code</Translate>
                </Label>
                <AvField
                  id="afparamval-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
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
                />
              </AvGroup>
              <AvGroup>
                <Label id="paramtypeLabel" for="afparamval-paramtype">
                  <Translate contentKey="sampleHrApp.afparamval.paramtype">Paramtype</Translate>
                </Label>
                <AvInput
                  id="afparamval-paramtype"
                  type="select"
                  className="form-control"
                  name="paramtype"
                  value={(!isNew && afparamvalEntity.paramtype) || 'APPFRM'}
                >
                  <option value="APPFRM">{translate('sampleHrApp.Paramtype.APPFRM')}</option>
                  <option value="DOMAINAPP">{translate('sampleHrApp.Paramtype.DOMAINAPP')}</option>
                  <option value="BUSINESS">{translate('sampleHrApp.Paramtype.BUSINESS')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
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
                />
              </AvGroup>
              <AvGroup>
                <Label id="valuetypeLabel" for="afparamval-valuetype">
                  <Translate contentKey="sampleHrApp.afparamval.valuetype">Valuetype</Translate>
                </Label>
                <AvInput
                  id="afparamval-valuetype"
                  type="select"
                  className="form-control"
                  name="valuetype"
                  value={(!isNew && afparamvalEntity.valuetype) || 'INTEGER'}
                >
                  <option value="INTEGER">{translate('sampleHrApp.Valtype.INTEGER')}</option>
                  <option value="STRING">{translate('sampleHrApp.Valtype.STRING')}</option>
                  <option value="DATE">{translate('sampleHrApp.Valtype.DATE')}</option>
                  <option value="DATETIME">{translate('sampleHrApp.Valtype.DATETIME')}</option>
                  <option value="TIME">{translate('sampleHrApp.Valtype.TIME')}</option>
                  <option value="BOOLEAN">{translate('sampleHrApp.Valtype.BOOLEAN')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="valueformatLabel" for="afparamval-valueformat">
                  <Translate contentKey="sampleHrApp.afparamval.valueformat">Valueformat</Translate>
                </Label>
                <AvField id="afparamval-valueformat" type="text" name="valueformat" />
              </AvGroup>
              <AvGroup>
                <Label id="valueunitLabel" for="afparamval-valueunit">
                  <Translate contentKey="sampleHrApp.afparamval.valueunit">Valueunit</Translate>
                </Label>
                <AvField id="afparamval-valueunit" type="text" name="valueunit" />
              </AvGroup>
              <AvGroup>
                <Label id="valueLabel" for="afparamval-value">
                  <Translate contentKey="sampleHrApp.afparamval.value">Value</Translate>
                </Label>
                <AvField id="afparamval-value" type="text" name="value" />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afparamval-descr">
                  <Translate contentKey="sampleHrApp.afparamval.descr">Descr</Translate>
                </Label>
                <AvField id="afparamval-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="ownersysLabel" for="afparamval-ownersys">
                  <Translate contentKey="sampleHrApp.afparamval.ownersys">Ownersys</Translate>
                </Label>
                <AvField id="afparamval-ownersys" type="text" name="ownersys" />
              </AvGroup>
              <AvGroup>
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
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="afparamval-wfstate">
                  <Translate contentKey="sampleHrApp.afparamval.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="afparamval-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="afparamval-wfprocid">
                  <Translate contentKey="sampleHrApp.afparamval.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="afparamval-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afparamval" replace color="info">
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
