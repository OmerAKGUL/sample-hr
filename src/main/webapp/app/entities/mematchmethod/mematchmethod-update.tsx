import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './mematchmethod.reducer';
import { IMematchmethod } from 'app/shared/model/mematchmethod.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMematchmethodUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MematchmethodUpdate = (props: IMematchmethodUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { mematchmethodEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/mematchmethod');
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
        ...mematchmethodEntity,
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
          <h2 id="sampleHrApp.mematchmethod.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.mematchmethod.home.createOrEditLabel">Create or edit a Mematchmethod</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : mematchmethodEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="mematchmethod-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="mematchmethod-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="mematchmethod-code">
                  <Translate contentKey="sampleHrApp.mematchmethod.code">Code</Translate>
                </Label>
                <AvField
                  id="mematchmethod-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="mematchmethod-name">
                  <Translate contentKey="sampleHrApp.mematchmethod.name">Name</Translate>
                </Label>
                <AvField id="mematchmethod-name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="mematchmethod-descr">
                  <Translate contentKey="sampleHrApp.mematchmethod.descr">Descr</Translate>
                </Label>
                <AvField id="mematchmethod-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="applyonwlfieldsLabel" for="mematchmethod-applyonwlfields">
                  <Translate contentKey="sampleHrApp.mematchmethod.applyonwlfields">Applyonwlfields</Translate>
                </Label>
                <AvField id="mematchmethod-applyonwlfields" type="text" name="applyonwlfields" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/mematchmethod" replace color="info">
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
  mematchmethodEntity: storeState.mematchmethod.entity,
  loading: storeState.mematchmethod.loading,
  updating: storeState.mematchmethod.updating,
  updateSuccess: storeState.mematchmethod.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MematchmethodUpdate);
