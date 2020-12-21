import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfparamval } from 'app/shared/model/afparamval.model';
import { getEntities as getAfparamvals } from 'app/entities/afparamval/afparamval.reducer';
import { IMematchmethod } from 'app/shared/model/mematchmethod.model';
import { getEntities as getMematchmethods } from 'app/entities/mematchmethod/mematchmethod.reducer';
import { IWlmwltype } from 'app/shared/model/wlmwltype.model';
import { getEntities as getWlmwltypes } from 'app/entities/wlmwltype/wlmwltype.reducer';
import { getEntity, updateEntity, createEntity, reset } from './memethodparam.reducer';
import { IMemethodparam } from 'app/shared/model/memethodparam.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMemethodparamUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MemethodparamUpdate = (props: IMemethodparamUpdateProps) => {
  const [paramvalcodeId, setParamvalcodeId] = useState('0');
  const [paramidxnoId, setParamidxnoId] = useState('0');
  const [matchmethodcodeId, setMatchmethodcodeId] = useState('0');
  const [wltypeId, setWltypeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { memethodparamEntity, afparamvals, mematchmethods, wlmwltypes, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/memethodparam');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfparamvals();
    props.getMematchmethods();
    props.getWlmwltypes();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...memethodparamEntity,
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
          <h2 id="sampleHrApp.memethodparam.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.memethodparam.home.createOrEditLabel">Create or edit a Memethodparam</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : memethodparamEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="memethodparam-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="memethodparam-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="memidLabel" for="memethodparam-memid">
                  <Translate contentKey="sampleHrApp.memethodparam.memid">Memid</Translate>
                </Label>
                <AvField
                  id="memethodparam-memid"
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
                <Label id="wlmidLabel" for="memethodparam-wlmid">
                  <Translate contentKey="sampleHrApp.memethodparam.wlmid">Wlmid</Translate>
                </Label>
                <AvField id="memethodparam-wlmid" type="string" className="form-control" name="wlmid" />
              </AvGroup>
              <AvGroup>
                <Label for="memethodparam-paramvalcode">
                  <Translate contentKey="sampleHrApp.memethodparam.paramvalcode">Paramvalcode</Translate>
                </Label>
                <AvInput id="memethodparam-paramvalcode" type="select" className="form-control" name="paramvalcode.id">
                  <option value="" key="0" />
                  {afparamvals
                    ? afparamvals.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.code}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="memethodparam-paramidxno">
                  <Translate contentKey="sampleHrApp.memethodparam.paramidxno">Paramidxno</Translate>
                </Label>
                <AvInput id="memethodparam-paramidxno" type="select" className="form-control" name="paramidxno.id">
                  <option value="" key="0" />
                  {afparamvals
                    ? afparamvals.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="memethodparam-matchmethodcode">
                  <Translate contentKey="sampleHrApp.memethodparam.matchmethodcode">Matchmethodcode</Translate>
                </Label>
                <AvInput id="memethodparam-matchmethodcode" type="select" className="form-control" name="matchmethodcode.id">
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
                <Label for="memethodparam-wltype">
                  <Translate contentKey="sampleHrApp.memethodparam.wltype">Wltype</Translate>
                </Label>
                <AvInput id="memethodparam-wltype" type="select" className="form-control" name="wltype.id">
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
              <Button tag={Link} id="cancel-save" to="/memethodparam" replace color="info">
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
  afparamvals: storeState.afparamval.entities,
  mematchmethods: storeState.mematchmethod.entities,
  wlmwltypes: storeState.wlmwltype.entities,
  memethodparamEntity: storeState.memethodparam.entity,
  loading: storeState.memethodparam.loading,
  updating: storeState.memethodparam.updating,
  updateSuccess: storeState.memethodparam.updateSuccess,
});

const mapDispatchToProps = {
  getAfparamvals,
  getMematchmethods,
  getWlmwltypes,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MemethodparamUpdate);
