import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IMematchmethod } from 'app/shared/model/mematchmethod.model';
import { getEntities as getMematchmethods } from 'app/entities/mematchmethod/mematchmethod.reducer';
import { IMeconfig } from 'app/shared/model/meconfig.model';
import { getEntities as getMeconfigs } from 'app/entities/meconfig/meconfig.reducer';
import { getEntity, updateEntity, createEntity, reset } from './memtdconfig.reducer';
import { IMemtdconfig } from 'app/shared/model/memtdconfig.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMemtdconfigUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MemtdconfigUpdate = (props: IMemtdconfigUpdateProps) => {
  const [methodcodeId, setMethodcodeId] = useState('0');
  const [configcodeId, setConfigcodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { memtdconfigEntity, mematchmethods, meconfigs, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/memtdconfig');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getMematchmethods();
    props.getMeconfigs();
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
        ...memtdconfigEntity,
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
          <h2 id="sampleHrApp.memtdconfig.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.memtdconfig.home.createOrEditLabel">Create or edit a Memtdconfig</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : memtdconfigEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="memtdconfig-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="memtdconfig-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="memidLabel" for="memtdconfig-memid">
                  <Translate contentKey="sampleHrApp.memtdconfig.memid">Memid</Translate>
                </Label>
                <AvField
                  id="memtdconfig-memid"
                  type="string"
                  className="form-control"
                  name="memid"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="memtdconfig-createdt">
                  <Translate contentKey="sampleHrApp.memtdconfig.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="memtdconfig-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.memtdconfigEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="memtdconfig-updatedt">
                  <Translate contentKey="sampleHrApp.memtdconfig.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="memtdconfig-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.memtdconfigEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="memtdconfig-createusr">
                  <Translate contentKey="sampleHrApp.memtdconfig.createusr">Createusr</Translate>
                </Label>
                <AvField id="memtdconfig-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="memtdconfig-updateusr">
                  <Translate contentKey="sampleHrApp.memtdconfig.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="memtdconfig-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label for="memtdconfig-methodcode">
                  <Translate contentKey="sampleHrApp.memtdconfig.methodcode">Methodcode</Translate>
                </Label>
                <AvInput id="memtdconfig-methodcode" type="select" className="form-control" name="methodcode.id">
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
              <AvGroup>
                <Label for="memtdconfig-configcode">
                  <Translate contentKey="sampleHrApp.memtdconfig.configcode">Configcode</Translate>
                </Label>
                <AvInput id="memtdconfig-configcode" type="select" className="form-control" name="configcode.id">
                  <option value="" key="0" />
                  {meconfigs
                    ? meconfigs.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/memtdconfig" replace color="info">
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
  mematchmethods: storeState.mematchmethod.entities,
  meconfigs: storeState.meconfig.entities,
  memtdconfigEntity: storeState.memtdconfig.entity,
  loading: storeState.memtdconfig.loading,
  updating: storeState.memtdconfig.updating,
  updateSuccess: storeState.memtdconfig.updateSuccess,
});

const mapDispatchToProps = {
  getMematchmethods,
  getMeconfigs,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MemtdconfigUpdate);
