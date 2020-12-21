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
import { IMeinvestprofile } from 'app/shared/model/meinvestprofile.model';
import { getEntities as getMeinvestprofiles } from 'app/entities/meinvestprofile/meinvestprofile.reducer';
import { getEntity, updateEntity, createEntity, reset } from './meinvestproc.reducer';
import { IMeinvestproc } from 'app/shared/model/meinvestproc.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMeinvestprocUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MeinvestprocUpdate = (props: IMeinvestprocUpdateProps) => {
  const [wfprocidId, setWfprocidId] = useState('0');
  const [invprofileId, setInvprofileId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { meinvestprocEntity, afwprocesses, meinvestprofiles, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/meinvestproc');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfwprocesses();
    props.getMeinvestprofiles();
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
        ...meinvestprocEntity,
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
          <h2 id="sampleHrApp.meinvestproc.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.meinvestproc.home.createOrEditLabel">Create or edit a Meinvestproc</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : meinvestprocEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="meinvestproc-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="meinvestproc-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="descrLabel" for="meinvestproc-descr">
                  <Translate contentKey="sampleHrApp.meinvestproc.descr">Descr</Translate>
                </Label>
                <AvField id="meinvestproc-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="meinvestproc-createdt">
                  <Translate contentKey="sampleHrApp.meinvestproc.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="meinvestproc-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.meinvestprocEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="meinvestproc-updatedt">
                  <Translate contentKey="sampleHrApp.meinvestproc.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="meinvestproc-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.meinvestprocEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="meinvestproc-createusr">
                  <Translate contentKey="sampleHrApp.meinvestproc.createusr">Createusr</Translate>
                </Label>
                <AvField id="meinvestproc-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="meinvestproc-updateusr">
                  <Translate contentKey="sampleHrApp.meinvestproc.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="meinvestproc-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="meinvestproc-wfstate">
                  <Translate contentKey="sampleHrApp.meinvestproc.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="meinvestproc-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label for="meinvestproc-wfprocid">
                  <Translate contentKey="sampleHrApp.meinvestproc.wfprocid">Wfprocid</Translate>
                </Label>
                <AvInput id="meinvestproc-wfprocid" type="select" className="form-control" name="wfprocid.id">
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
                <Label for="meinvestproc-invprofile">
                  <Translate contentKey="sampleHrApp.meinvestproc.invprofile">Invprofile</Translate>
                </Label>
                <AvInput id="meinvestproc-invprofile" type="select" className="form-control" name="invprofile.id">
                  <option value="" key="0" />
                  {meinvestprofiles
                    ? meinvestprofiles.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.invtype}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/meinvestproc" replace color="info">
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
  meinvestprofiles: storeState.meinvestprofile.entities,
  meinvestprocEntity: storeState.meinvestproc.entity,
  loading: storeState.meinvestproc.loading,
  updating: storeState.meinvestproc.updating,
  updateSuccess: storeState.meinvestproc.updateSuccess,
});

const mapDispatchToProps = {
  getAfwprocesses,
  getMeinvestprofiles,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MeinvestprocUpdate);
