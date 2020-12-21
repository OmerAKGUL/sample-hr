import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfschedule } from 'app/shared/model/afschedule.model';
import { getEntities as getAfschedules } from 'app/entities/afschedule/afschedule.reducer';
import { getEntity, updateEntity, createEntity, reset } from './meconfig.reducer';
import { IMeconfig } from 'app/shared/model/meconfig.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMeconfigUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MeconfigUpdate = (props: IMeconfigUpdateProps) => {
  const [scheduleidId, setScheduleidId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { meconfigEntity, afschedules, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/modules/me/meconfig');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfschedules();
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
        ...meconfigEntity,
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
          <h2 id="sampleHrApp.meconfig.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.meconfig.home.createOrEditLabel">Create or edit a Meconfig</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : meconfigEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="meconfig-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="meconfig-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="meconfig-code">
                  <Translate contentKey="sampleHrApp.meconfig.code">Code</Translate>
                </Label>
                <AvField
                  id="meconfig-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="meconfig-name">
                  <Translate contentKey="sampleHrApp.meconfig.name">Name</Translate>
                </Label>
                <AvField
                  id="meconfig-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="meconfig-descr">
                  <Translate contentKey="sampleHrApp.meconfig.descr">Descr</Translate>
                </Label>
                <AvField
                  id="meconfig-descr"
                  type="text"
                  name="descr"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="wlfieldlistLabel" for="meconfig-wlfieldlist">
                  <Translate contentKey="sampleHrApp.meconfig.wlfieldlist">Wlfieldlist</Translate>
                </Label>
                <AvField id="meconfig-wlfieldlist" type="text" name="wlfieldlist" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="meconfig-createdt">
                  <Translate contentKey="sampleHrApp.meconfig.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="meconfig-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.meconfigEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="meconfig-updatedt">
                  <Translate contentKey="sampleHrApp.meconfig.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="meconfig-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.meconfigEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="meconfig-createusr">
                  <Translate contentKey="sampleHrApp.meconfig.createusr">Createusr</Translate>
                </Label>
                <AvField id="meconfig-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="meconfig-updateusr">
                  <Translate contentKey="sampleHrApp.meconfig.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="meconfig-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="meconfig-wfstate">
                  <Translate contentKey="sampleHrApp.meconfig.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="meconfig-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="meconfig-wfprocid">
                  <Translate contentKey="sampleHrApp.meconfig.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="meconfig-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label for="meconfig-scheduleid">
                  <Translate contentKey="sampleHrApp.meconfig.scheduleid">Scheduleid</Translate>
                </Label>
                <AvInput id="meconfig-scheduleid" type="select" className="form-control" name="scheduleid.id">
                  <option value="" key="0" />
                  {afschedules
                    ? afschedules.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/meconfig" replace color="info">
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
  afschedules: storeState.afschedule.entities,
  meconfigEntity: storeState.meconfig.entity,
  loading: storeState.meconfig.loading,
  updating: storeState.meconfig.updating,
  updateSuccess: storeState.meconfig.updateSuccess,
});

const mapDispatchToProps = {
  getAfschedules,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MeconfigUpdate);
