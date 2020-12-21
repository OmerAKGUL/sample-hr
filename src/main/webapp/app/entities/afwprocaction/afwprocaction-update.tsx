import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfwprocess } from 'app/shared/model/afwprocess.model';
import { getEntities as getAfwprocesses } from 'app/entities/afwprocess/afwprocess.reducer';
import { IAfwfaction } from 'app/shared/model/afwfaction.model';
import { getEntities as getAfwfactions } from 'app/entities/afwfaction/afwfaction.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afwprocaction.reducer';
import { IAfwprocaction } from 'app/shared/model/afwprocaction.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfwprocactionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfwprocactionUpdate = (props: IAfwprocactionUpdateProps) => {
  const [procidId, setProcidId] = useState('0');
  const [actioncodeId, setActioncodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afwprocactionEntity, afwprocesses, afwfactions, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afwprocaction');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfwprocesses();
    props.getAfwfactions();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.scheduleddt = convertDateTimeToServer(values.scheduleddt);
    values.starteddt = convertDateTimeToServer(values.starteddt);
    values.finisheddt = convertDateTimeToServer(values.finisheddt);
    values.createdt = convertDateTimeToServer(values.createdt);
    values.updatedt = convertDateTimeToServer(values.updatedt);

    if (errors.length === 0) {
      const entity = {
        ...afwprocactionEntity,
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
          <h2 id="sampleHrApp.afwprocaction.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afwprocaction.home.createOrEditLabel">Create or edit a Afwprocaction</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afwprocactionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afwprocaction-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afwprocaction-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="actionnoteLabel" for="afwprocaction-actionnote">
                  <Translate contentKey="sampleHrApp.afwprocaction.actionnote">Actionnote</Translate>
                </Label>
                <AvField id="afwprocaction-actionnote" type="text" name="actionnote" />
              </AvGroup>
              <AvGroup>
                <Label id="scheduleddtLabel" for="afwprocaction-scheduleddt">
                  <Translate contentKey="sampleHrApp.afwprocaction.scheduleddt">Scheduleddt</Translate>
                </Label>
                <AvInput
                  id="afwprocaction-scheduleddt"
                  type="datetime-local"
                  className="form-control"
                  name="scheduleddt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwprocactionEntity.scheduleddt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="starteddtLabel" for="afwprocaction-starteddt">
                  <Translate contentKey="sampleHrApp.afwprocaction.starteddt">Starteddt</Translate>
                </Label>
                <AvInput
                  id="afwprocaction-starteddt"
                  type="datetime-local"
                  className="form-control"
                  name="starteddt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwprocactionEntity.starteddt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="finisheddtLabel" for="afwprocaction-finisheddt">
                  <Translate contentKey="sampleHrApp.afwprocaction.finisheddt">Finisheddt</Translate>
                </Label>
                <AvInput
                  id="afwprocaction-finisheddt"
                  type="datetime-local"
                  className="form-control"
                  name="finisheddt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwprocactionEntity.finisheddt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="refdoc1urlLabel" for="afwprocaction-refdoc1url">
                  <Translate contentKey="sampleHrApp.afwprocaction.refdoc1url">Refdoc 1 Url</Translate>
                </Label>
                <AvField id="afwprocaction-refdoc1url" type="text" name="refdoc1url" />
              </AvGroup>
              <AvGroup>
                <Label id="refdoc2urlLabel" for="afwprocaction-refdoc2url">
                  <Translate contentKey="sampleHrApp.afwprocaction.refdoc2url">Refdoc 2 Url</Translate>
                </Label>
                <AvField id="afwprocaction-refdoc2url" type="text" name="refdoc2url" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="afwprocaction-createdt">
                  <Translate contentKey="sampleHrApp.afwprocaction.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="afwprocaction-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwprocactionEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="afwprocaction-updatedt">
                  <Translate contentKey="sampleHrApp.afwprocaction.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="afwprocaction-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwprocactionEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="afwprocaction-createusr">
                  <Translate contentKey="sampleHrApp.afwprocaction.createusr">Createusr</Translate>
                </Label>
                <AvField id="afwprocaction-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="afwprocaction-updateusr">
                  <Translate contentKey="sampleHrApp.afwprocaction.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="afwprocaction-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="afwprocaction-wfstate">
                  <Translate contentKey="sampleHrApp.afwprocaction.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="afwprocaction-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="afwprocaction-wfprocid">
                  <Translate contentKey="sampleHrApp.afwprocaction.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="afwprocaction-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label for="afwprocaction-procid">
                  <Translate contentKey="sampleHrApp.afwprocaction.procid">Procid</Translate>
                </Label>
                <AvInput id="afwprocaction-procid" type="select" className="form-control" name="procid.id">
                  <option value="" key="0" />
                  {afwprocesses
                    ? afwprocesses.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.entity}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afwprocaction-actioncode">
                  <Translate contentKey="sampleHrApp.afwprocaction.actioncode">Actioncode</Translate>
                </Label>
                <AvInput id="afwprocaction-actioncode" type="select" className="form-control" name="actioncode.id">
                  <option value="" key="0" />
                  {afwfactions
                    ? afwfactions.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afwprocaction" replace color="info">
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
  afwprocesses: storeState.afwprocess.entities,
  afwfactions: storeState.afwfaction.entities,
  afwprocactionEntity: storeState.afwprocaction.entity,
  loading: storeState.afwprocaction.loading,
  updating: storeState.afwprocaction.updating,
  updateSuccess: storeState.afwprocaction.updateSuccess,
});

const mapDispatchToProps = {
  getAfwprocesses,
  getAfwfactions,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfwprocactionUpdate);
