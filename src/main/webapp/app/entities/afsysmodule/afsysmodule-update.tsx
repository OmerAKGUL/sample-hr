import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfsystem } from 'app/shared/model/afsystem.model';
import { getEntities as getAfsystems } from 'app/entities/afsystem/afsystem.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afsysmodule.reducer';
import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfsysmoduleUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsysmoduleUpdate = (props: IAfsysmoduleUpdateProps) => {
  const [appsyscodeId, setAppsyscodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afsysmoduleEntity, afsystems, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/modules/af/afsysmodule');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfsystems();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...afsysmoduleEntity,
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
          <h2 id="sampleHrApp.afsysmodule.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afsysmodule.home.createOrEditLabel">Create or edit a Afsysmodule</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afsysmoduleEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afsysmodule-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afsysmodule-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="afsysmodule-code">
                  <Translate contentKey="sampleHrApp.afsysmodule.code">Code</Translate>
                </Label>
                <AvField
                  id="afsysmodule-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="afsysmodule-name">
                  <Translate contentKey="sampleHrApp.afsysmodule.name">Name</Translate>
                </Label>
                <AvField
                  id="afsysmodule-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afsysmodule-descr">
                  <Translate contentKey="sampleHrApp.afsysmodule.descr">Descr</Translate>
                </Label>
                <AvField id="afsysmodule-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label for="afsysmodule-appsyscode">
                  <Translate contentKey="sampleHrApp.afsysmodule.appsyscode">Appsyscode</Translate>
                </Label>
                <AvInput id="afsysmodule-appsyscode" type="select" className="form-control" name="appsyscode.id">
                  <option value="" key="0" />
                  {afsystems
                    ? afsystems.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/modules/af/afsysmodule" replace color="info">
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
  afsystems: storeState.afsystem.entities,
  afsysmoduleEntity: storeState.afsysmodule.entity,
  loading: storeState.afsysmodule.loading,
  updating: storeState.afsysmodule.updating,
  updateSuccess: storeState.afsysmodule.updateSuccess,
});

const mapDispatchToProps = {
  getAfsystems,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsysmoduleUpdate);
