import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IWlmwltype } from 'app/shared/model/wlmwltype.model';
import { getEntities as getWlmwltypes } from 'app/entities/wlmwltype/wlmwltype.reducer';
import { IMematchmethod } from 'app/shared/model/mematchmethod.model';
import { getEntities as getMematchmethods } from 'app/entities/mematchmethod/mematchmethod.reducer';
import { getEntity, updateEntity, createEntity, reset } from './memtdwlcriteria.reducer';
import { IMemtdwlcriteria } from 'app/shared/model/memtdwlcriteria.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMemtdwlcriteriaUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MemtdwlcriteriaUpdate = (props: IMemtdwlcriteriaUpdateProps) => {
  const [wltypecodeId, setWltypecodeId] = useState('0');
  const [matchmethodcodeId, setMatchmethodcodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { memtdwlcriteriaEntity, wlmwltypes, mematchmethods, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/memtdwlcriteria');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getWlmwltypes();
    props.getMematchmethods();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...memtdwlcriteriaEntity,
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
          <h2 id="sampleHrApp.memtdwlcriteria.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.memtdwlcriteria.home.createOrEditLabel">Create or edit a Memtdwlcriteria</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : memtdwlcriteriaEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="memtdwlcriteria-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="memtdwlcriteria-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="wlmidLabel" for="memtdwlcriteria-wlmid">
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.wlmid">Wlmid</Translate>
                </Label>
                <AvField
                  id="memtdwlcriteria-wlmid"
                  type="string"
                  className="form-control"
                  name="wlmid"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="memtdwlcriteria-name">
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.name">Name</Translate>
                </Label>
                <AvField
                  id="memtdwlcriteria-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="applyonwlfieldsLabel" for="memtdwlcriteria-applyonwlfields">
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.applyonwlfields">Applyonwlfields</Translate>
                </Label>
                <AvField id="memtdwlcriteria-applyonwlfields" type="text" name="applyonwlfields" />
              </AvGroup>
              <AvGroup>
                <Label for="memtdwlcriteria-wltypecode">
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.wltypecode">Wltypecode</Translate>
                </Label>
                <AvInput id="memtdwlcriteria-wltypecode" type="select" className="form-control" name="wltypecode.id">
                  <option value="" key="0" />
                  {wlmwltypes
                    ? wlmwltypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="memtdwlcriteria-matchmethodcode">
                  <Translate contentKey="sampleHrApp.memtdwlcriteria.matchmethodcode">Matchmethodcode</Translate>
                </Label>
                <AvInput id="memtdwlcriteria-matchmethodcode" type="select" className="form-control" name="matchmethodcode.id">
                  <option value="" key="0" />
                  {mematchmethods
                    ? mematchmethods.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/memtdwlcriteria" replace color="info">
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
  wlmwltypes: storeState.wlmwltype.entities,
  mematchmethods: storeState.mematchmethod.entities,
  memtdwlcriteriaEntity: storeState.memtdwlcriteria.entity,
  loading: storeState.memtdwlcriteria.loading,
  updating: storeState.memtdwlcriteria.updating,
  updateSuccess: storeState.memtdwlcriteria.updateSuccess,
});

const mapDispatchToProps = {
  getWlmwltypes,
  getMematchmethods,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MemtdwlcriteriaUpdate);
