import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './afworkflow.reducer';
import { IAfworkflow } from 'app/shared/model/afworkflow.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfworkflowUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfworkflowUpdate = (props: IAfworkflowUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afworkflowEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/modules/af/afworkflow');
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
        ...afworkflowEntity,
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
          <h2 id="sampleHrApp.afworkflow.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afworkflow.home.createOrEditLabel">Create or edit a Afworkflow</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afworkflowEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afworkflow-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afworkflow-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="afworkflow-code">
                  <Translate contentKey="sampleHrApp.afworkflow.code">Code</Translate>
                </Label>
                <AvField
                  id="afworkflow-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="afworkflow-name">
                  <Translate contentKey="sampleHrApp.afworkflow.name">Name</Translate>
                </Label>
                <AvField
                  id="afworkflow-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afworkflow-descr">
                  <Translate contentKey="sampleHrApp.afworkflow.descr">Descr</Translate>
                </Label>
                <AvField id="afworkflow-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefmngfrmLabel" for="afworkflow-apprefmngfrm">
                  <Translate contentKey="sampleHrApp.afworkflow.apprefmngfrm">Apprefmngfrm</Translate>
                </Label>
                <AvField id="afworkflow-apprefmngfrm" type="text" name="apprefmngfrm" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefmngdomainLabel" for="afworkflow-apprefmngdomain">
                  <Translate contentKey="sampleHrApp.afworkflow.apprefmngdomain">Apprefmngdomain</Translate>
                </Label>
                <AvField id="afworkflow-apprefmngdomain" type="text" name="apprefmngdomain" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="afworkflow-createdt">
                  <Translate contentKey="sampleHrApp.afworkflow.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="afworkflow-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afworkflowEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="afworkflow-updatedt">
                  <Translate contentKey="sampleHrApp.afworkflow.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="afworkflow-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afworkflowEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="afworkflow-createusr">
                  <Translate contentKey="sampleHrApp.afworkflow.createusr">Createusr</Translate>
                </Label>
                <AvField id="afworkflow-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="afworkflow-updateusr">
                  <Translate contentKey="sampleHrApp.afworkflow.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="afworkflow-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="afworkflow-wfstate">
                  <Translate contentKey="sampleHrApp.afworkflow.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="afworkflow-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="afworkflow-wfprocid">
                  <Translate contentKey="sampleHrApp.afworkflow.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="afworkflow-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/modules/af/afworkflow" replace color="info">
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
  afworkflowEntity: storeState.afworkflow.entity,
  loading: storeState.afworkflow.loading,
  updating: storeState.afworkflow.updating,
  updateSuccess: storeState.afworkflow.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfworkflowUpdate);
