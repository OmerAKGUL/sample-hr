import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IJhiuser } from 'app/shared/model/jhiuser.model';
import { getEntities as getJhiusers } from 'app/entities/jhiuser/jhiuser.reducer';
import { IAfsrole } from 'app/shared/model/afsrole.model';
import { getEntities as getAfsroles } from 'app/entities/afsrole/afsrole.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afsroleuser.reducer';
import { IAfsroleuser } from 'app/shared/model/afsroleuser.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfsroleuserUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsroleuserUpdate = (props: IAfsroleuserUpdateProps) => {
  const [usridId, setUsridId] = useState('0');
  const [rolecodeId, setRolecodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afsroleuserEntity, jhiusers, afsroles, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afsroleuser');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getJhiusers();
    props.getAfsroles();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...afsroleuserEntity,
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
          <h2 id="sampleHrApp.afsroleuser.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afsroleuser.home.createOrEditLabel">Create or edit a Afsroleuser</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afsroleuserEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afsroleuser-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afsroleuser-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label for="afsroleuser-usrid">
                  <Translate contentKey="sampleHrApp.afsroleuser.usrid">Usrid</Translate>
                </Label>
                <AvInput id="afsroleuser-usrid" type="select" className="form-control" name="usrid.id">
                  <option value="" key="0" />
                  {jhiusers
                    ? jhiusers.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.loginname}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afsroleuser-rolecode">
                  <Translate contentKey="sampleHrApp.afsroleuser.rolecode">Rolecode</Translate>
                </Label>
                <AvInput id="afsroleuser-rolecode" type="select" className="form-control" name="rolecode.id">
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
              <Button tag={Link} id="cancel-save" to="/afsroleuser" replace color="info">
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
  jhiusers: storeState.jhiuser.entities,
  afsroles: storeState.afsrole.entities,
  afsroleuserEntity: storeState.afsroleuser.entity,
  loading: storeState.afsroleuser.loading,
  updating: storeState.afsroleuser.updating,
  updateSuccess: storeState.afsroleuser.updateSuccess,
});

const mapDispatchToProps = {
  getJhiusers,
  getAfsroles,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsroleuserUpdate);
