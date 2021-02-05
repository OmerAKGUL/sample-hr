import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './afsystem.reducer';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfsystemUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsystemUpdate = (props: IAfsystemUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afsystemEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/modules/af/afsystem');
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
    if (errors.length === 0) {
      const entity = {
        ...afsystemEntity,
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
          <h2 id="sampleHrApp.afsystem.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afsystem.home.createOrEditLabel">Create or edit a Afsystem</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afsystemEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afsystem-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afsystem-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="afsystem-code">
                  <Translate contentKey="sampleHrApp.afsystem.code">Code</Translate>
                </Label>
                <AvField
                  id="afsystem-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="afsystem-name">
                  <Translate contentKey="sampleHrApp.afsystem.name">Name</Translate>
                </Label>
                <AvField
                  id="afsystem-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afsystem-descr">
                  <Translate contentKey="sampleHrApp.afsystem.descr">Descr</Translate>
                </Label>
                <AvField id="afsystem-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefcodeLabel" for="afsystem-apprefcode">
                  <Translate contentKey="sampleHrApp.afsystem.apprefcode">Apprefcode</Translate>
                </Label>
                <AvField id="afsystem-apprefcode" type="text" name="apprefcode" />
              </AvGroup>
              <AvGroup>
                <Label id="systypeLabel" for="afsystem-systype">
                  <Translate contentKey="sampleHrApp.afsystem.systype">Systype</Translate>
                </Label>
                <AvInput
                  id="afsystem-systype"
                  type="select"
                  className="form-control"
                  name="systype"
                  value={(!isNew && afsystemEntity.systype) || 'INTERNAL'}
                >
                  <option value="INTERNAL">{translate('sampleHrApp.Systype.INTERNAL')}</option>
                  <option value="EXTERNAL">{translate('sampleHrApp.Systype.EXTERNAL')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="appdomaincodeLabel" for="afsystem-appdomaincode">
                  <Translate contentKey="sampleHrApp.afsystem.appdomaincode">Appdomaincode</Translate>
                </Label>
                <AvField id="afsystem-appdomaincode" type="text" name="appdomaincode" />
              </AvGroup>
              <AvGroup>
                <Label id="connecttypeLabel" for="afsystem-connecttype">
                  <Translate contentKey="sampleHrApp.afsystem.connecttype">Connecttype</Translate>
                </Label>
                <AvField id="afsystem-connecttype" type="text" name="connecttype" />
              </AvGroup>
              <AvGroup>
                <Label id="connectstrLabel" for="afsystem-connectstr">
                  <Translate contentKey="sampleHrApp.afsystem.connectstr">Connectstr</Translate>
                </Label>
                <AvField id="afsystem-connectstr" type="text" name="connectstr" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/modules/af/afsystem" replace color="info">
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
  afsystemEntity: storeState.afsystem.entity,
  loading: storeState.afsystem.loading,
  updating: storeState.afsystem.updating,
  updateSuccess: storeState.afsystem.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsystemUpdate);
