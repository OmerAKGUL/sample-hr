import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfworkflow } from 'app/shared/model/afworkflow.model';
import { getEntities as getAfworkflows } from 'app/entities/afworkflow/afworkflow.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afwfstate.reducer';
import { IAfwfstate } from 'app/shared/model/afwfstate.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfwfstateUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfwfstateUpdate = (props: IAfwfstateUpdateProps) => {
  const [wfcodeId, setWfcodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afwfstateEntity, afworkflows, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afwfstate');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfworkflows();
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
        ...afwfstateEntity,
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
          <h2 id="sampleHrApp.afwfstate.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afwfstate.home.createOrEditLabel">Create or edit a Afwfstate</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afwfstateEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afwfstate-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afwfstate-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="afwfstate-code">
                  <Translate contentKey="sampleHrApp.afwfstate.code">Code</Translate>
                </Label>
                <AvField
                  id="afwfstate-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="afwfstate-name">
                  <Translate contentKey="sampleHrApp.afwfstate.name">Name</Translate>
                </Label>
                <AvField
                  id="afwfstate-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afwfstate-descr">
                  <Translate contentKey="sampleHrApp.afwfstate.descr">Descr</Translate>
                </Label>
                <AvField id="afwfstate-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefhandlerfrmLabel" for="afwfstate-apprefhandlerfrm">
                  <Translate contentKey="sampleHrApp.afwfstate.apprefhandlerfrm">Apprefhandlerfrm</Translate>
                </Label>
                <AvField id="afwfstate-apprefhandlerfrm" type="text" name="apprefhandlerfrm" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefhandlerdomLabel" for="afwfstate-apprefhandlerdom">
                  <Translate contentKey="sampleHrApp.afwfstate.apprefhandlerdom">Apprefhandlerdom</Translate>
                </Label>
                <AvField id="afwfstate-apprefhandlerdom" type="text" name="apprefhandlerdom" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="afwfstate-createdt">
                  <Translate contentKey="sampleHrApp.afwfstate.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="afwfstate-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwfstateEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="afwfstate-updatedt">
                  <Translate contentKey="sampleHrApp.afwfstate.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="afwfstate-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwfstateEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="afwfstate-createusr">
                  <Translate contentKey="sampleHrApp.afwfstate.createusr">Createusr</Translate>
                </Label>
                <AvField id="afwfstate-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="afwfstate-updateusr">
                  <Translate contentKey="sampleHrApp.afwfstate.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="afwfstate-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="afwfstate-wfstate">
                  <Translate contentKey="sampleHrApp.afwfstate.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="afwfstate-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="afwfstate-wfprocid">
                  <Translate contentKey="sampleHrApp.afwfstate.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="afwfstate-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label for="afwfstate-wfcode">
                  <Translate contentKey="sampleHrApp.afwfstate.wfcode">Wfcode</Translate>
                </Label>
                <AvInput id="afwfstate-wfcode" type="select" className="form-control" name="wfcode.id">
                  <option value="" key="0" />
                  {afworkflows
                    ? afworkflows.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afwfstate" replace color="info">
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
  afworkflows: storeState.afworkflow.entities,
  afwfstateEntity: storeState.afwfstate.entity,
  loading: storeState.afwfstate.loading,
  updating: storeState.afwfstate.updating,
  updateSuccess: storeState.afwfstate.updateSuccess,
});

const mapDispatchToProps = {
  getAfworkflows,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfwfstateUpdate);
