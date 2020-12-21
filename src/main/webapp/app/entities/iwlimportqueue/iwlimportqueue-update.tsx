import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfetljobtype } from 'app/shared/model/afetljobtype.model';
import { getEntities as getAfetljobtypes } from 'app/entities/afetljobtype/afetljobtype.reducer';
import { getEntity, updateEntity, createEntity, reset } from './iwlimportqueue.reducer';
import { IIwlimportqueue } from 'app/shared/model/iwlimportqueue.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IIwlimportqueueUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const IwlimportqueueUpdate = (props: IIwlimportqueueUpdateProps) => {
  const [etljobtypeId, setEtljobtypeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { iwlimportqueueEntity, afetljobtypes, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/iwlimportqueue');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfetljobtypes();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.etljobstart = convertDateTimeToServer(values.etljobstart);
    values.createdt = convertDateTimeToServer(values.createdt);
    values.updatedt = convertDateTimeToServer(values.updatedt);

    if (errors.length === 0) {
      const entity = {
        ...iwlimportqueueEntity,
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
          <h2 id="sampleHrApp.iwlimportqueue.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.iwlimportqueue.home.createOrEditLabel">Create or edit a Iwlimportqueue</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : iwlimportqueueEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="iwlimportqueue-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="iwlimportqueue-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="etljobstartLabel" for="iwlimportqueue-etljobstart">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.etljobstart">Etljobstart</Translate>
                </Label>
                <AvInput
                  id="iwlimportqueue-etljobstart"
                  type="datetime-local"
                  className="form-control"
                  name="etljobstart"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.iwlimportqueueEntity.etljobstart)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="etljobsessiondLabel" for="iwlimportqueue-etljobsessiond">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.etljobsessiond">Etljobsessiond</Translate>
                </Label>
                <AvField id="iwlimportqueue-etljobsessiond" type="text" name="etljobsessiond" />
              </AvGroup>
              <AvGroup>
                <Label id="srcfileurlLabel" for="iwlimportqueue-srcfileurl">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.srcfileurl">Srcfileurl</Translate>
                </Label>
                <AvField id="iwlimportqueue-srcfileurl" type="text" name="srcfileurl" />
              </AvGroup>
              <AvGroup>
                <Label id="tgtfileurlLabel" for="iwlimportqueue-tgtfileurl">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.tgtfileurl">Tgtfileurl</Translate>
                </Label>
                <AvField id="iwlimportqueue-tgtfileurl" type="text" name="tgtfileurl" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="iwlimportqueue-createdt">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="iwlimportqueue-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.iwlimportqueueEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="iwlimportqueue-updatedt">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="iwlimportqueue-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.iwlimportqueueEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="iwlimportqueue-createusr">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.createusr">Createusr</Translate>
                </Label>
                <AvField id="iwlimportqueue-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="iwlimportqueue-updateusr">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="iwlimportqueue-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="iwlimportqueue-wfstate">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="iwlimportqueue-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="iwlimportqueue-wfprocid">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="iwlimportqueue-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label for="iwlimportqueue-etljobtype">
                  <Translate contentKey="sampleHrApp.iwlimportqueue.etljobtype">Etljobtype</Translate>
                </Label>
                <AvInput id="iwlimportqueue-etljobtype" type="select" className="form-control" name="etljobtype.id">
                  <option value="" key="0" />
                  {afetljobtypes
                    ? afetljobtypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.jobname}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/iwlimportqueue" replace color="info">
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
  afetljobtypes: storeState.afetljobtype.entities,
  iwlimportqueueEntity: storeState.iwlimportqueue.entity,
  loading: storeState.iwlimportqueue.loading,
  updating: storeState.iwlimportqueue.updating,
  updateSuccess: storeState.iwlimportqueue.updateSuccess,
});

const mapDispatchToProps = {
  getAfetljobtypes,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(IwlimportqueueUpdate);
