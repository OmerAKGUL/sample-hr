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
import { getEntity, updateEntity, createEntity, reset } from './afwprocess.reducer';
import { IAfwprocess } from 'app/shared/model/afwprocess.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfwprocessUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfwprocessUpdate = (props: IAfwprocessUpdateProps) => {
  const [wfcodeId, setWfcodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afwprocessEntity, afworkflows, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afwprocess');
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
        ...afwprocessEntity,
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
          <h2 id="sampleHrApp.afwprocess.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afwprocess.home.createOrEditLabel">Create or edit a Afwprocess</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afwprocessEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afwprocess-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afwprocess-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="entityLabel" for="afwprocess-entity">
                  <Translate contentKey="sampleHrApp.afwprocess.entity">Entity</Translate>
                </Label>
                <AvField
                  id="afwprocess-entity"
                  type="text"
                  name="entity"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="apprefmngfrmLabel" for="afwprocess-apprefmngfrm">
                  <Translate contentKey="sampleHrApp.afwprocess.apprefmngfrm">Apprefmngfrm</Translate>
                </Label>
                <AvField id="afwprocess-apprefmngfrm" type="text" name="apprefmngfrm" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefmngdomainLabel" for="afwprocess-apprefmngdomain">
                  <Translate contentKey="sampleHrApp.afwprocess.apprefmngdomain">Apprefmngdomain</Translate>
                </Label>
                <AvField id="afwprocess-apprefmngdomain" type="text" name="apprefmngdomain" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="afwprocess-createdt">
                  <Translate contentKey="sampleHrApp.afwprocess.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="afwprocess-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwprocessEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="afwprocess-updatedt">
                  <Translate contentKey="sampleHrApp.afwprocess.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="afwprocess-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwprocessEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="afwprocess-createusr">
                  <Translate contentKey="sampleHrApp.afwprocess.createusr">Createusr</Translate>
                </Label>
                <AvField id="afwprocess-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="afwprocess-updateusr">
                  <Translate contentKey="sampleHrApp.afwprocess.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="afwprocess-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="afwprocess-wfstate">
                  <Translate contentKey="sampleHrApp.afwprocess.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="afwprocess-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="afwprocess-wfprocid">
                  <Translate contentKey="sampleHrApp.afwprocess.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="afwprocess-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label for="afwprocess-wfcode">
                  <Translate contentKey="sampleHrApp.afwprocess.wfcode">Wfcode</Translate>
                </Label>
                <AvInput id="afwprocess-wfcode" type="select" className="form-control" name="wfcode.id">
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
              <Button tag={Link} id="cancel-save" to="/afwprocess" replace color="info">
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
  afwprocessEntity: storeState.afwprocess.entity,
  loading: storeState.afwprocess.loading,
  updating: storeState.afwprocess.updating,
  updateSuccess: storeState.afwprocess.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(AfwprocessUpdate);
