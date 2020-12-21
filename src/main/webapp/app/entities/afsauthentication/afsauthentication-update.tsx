import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfsrole } from 'app/shared/model/afsrole.model';
import { getEntities as getAfsroles } from 'app/entities/afsrole/afsrole.reducer';
import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { getEntities as getAfsysmodules } from 'app/entities/afsysmodule/afsysmodule.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afsauthentication.reducer';
import { IAfsauthentication } from 'app/shared/model/afsauthentication.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfsauthenticationUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsauthenticationUpdate = (props: IAfsauthenticationUpdateProps) => {
  const [rolecodeId, setRolecodeId] = useState('0');
  const [modulecodeId, setModulecodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afsauthenticationEntity, afsroles, afsysmodules, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afsauthentication');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfsroles();
    props.getAfsysmodules();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...afsauthenticationEntity,
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
          <h2 id="sampleHrApp.afsauthentication.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afsauthentication.home.createOrEditLabel">Create or edit a Afsauthentication</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afsauthenticationEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afsauthentication-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afsauthentication-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="afsidLabel" for="afsauthentication-afsid">
                  <Translate contentKey="sampleHrApp.afsauthentication.afsid">Afsid</Translate>
                </Label>
                <AvField
                  id="afsauthentication-afsid"
                  type="string"
                  className="form-control"
                  name="afsid"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="authtypeLabel" for="afsauthentication-authtype">
                  <Translate contentKey="sampleHrApp.afsauthentication.authtype">Authtype</Translate>
                </Label>
                <AvField
                  id="afsauthentication-authtype"
                  type="text"
                  name="authtype"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="pwdhashLabel" for="afsauthentication-pwdhash">
                  <Translate contentKey="sampleHrApp.afsauthentication.pwdhash">Pwdhash</Translate>
                </Label>
                <AvField id="afsauthentication-pwdhash" type="text" name="pwdhash" />
              </AvGroup>
              <AvGroup>
                <Label id="secprotocolLabel" for="afsauthentication-secprotocol">
                  <Translate contentKey="sampleHrApp.afsauthentication.secprotocol">Secprotocol</Translate>
                </Label>
                <AvField id="afsauthentication-secprotocol" type="text" name="secprotocol" />
              </AvGroup>
              <AvGroup>
                <Label id="appauthlinkLabel" for="afsauthentication-appauthlink">
                  <Translate contentKey="sampleHrApp.afsauthentication.appauthlink">Appauthlink</Translate>
                </Label>
                <AvField id="afsauthentication-appauthlink" type="text" name="appauthlink" />
              </AvGroup>
              <AvGroup>
                <Label for="afsauthentication-rolecode">
                  <Translate contentKey="sampleHrApp.afsauthentication.rolecode">Rolecode</Translate>
                </Label>
                <AvInput id="afsauthentication-rolecode" type="select" className="form-control" name="rolecode.id">
                  <option value="" key="0" />
                  {afsroles
                    ? afsroles.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afsauthentication-modulecode">
                  <Translate contentKey="sampleHrApp.afsauthentication.modulecode">Modulecode</Translate>
                </Label>
                <AvInput id="afsauthentication-modulecode" type="select" className="form-control" name="modulecode.id">
                  <option value="" key="0" />
                  {afsysmodules
                    ? afsysmodules.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afsauthentication" replace color="info">
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
  afsroles: storeState.afsrole.entities,
  afsysmodules: storeState.afsysmodule.entities,
  afsauthenticationEntity: storeState.afsauthentication.entity,
  loading: storeState.afsauthentication.loading,
  updating: storeState.afsauthentication.updating,
  updateSuccess: storeState.afsauthentication.updateSuccess,
});

const mapDispatchToProps = {
  getAfsroles,
  getAfsysmodules,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsauthenticationUpdate);
