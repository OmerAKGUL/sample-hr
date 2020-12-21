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
import { IItxtxntype } from 'app/shared/model/itxtxntype.model';
import { getEntities as getItxtxntypes } from 'app/entities/itxtxntype/itxtxntype.reducer';
import { IItxcusttype } from 'app/shared/model/itxcusttype.model';
import { getEntities as getItxcusttypes } from 'app/entities/itxcusttype/itxcusttype.reducer';
import { IItxaccounttype } from 'app/shared/model/itxaccounttype.model';
import { getEntities as getItxaccounttypes } from 'app/entities/itxaccounttype/itxaccounttype.reducer';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { getEntities as getAfsystems } from 'app/entities/afsystem/afsystem.reducer';
import { IJhiuser } from 'app/shared/model/jhiuser.model';
import { getEntities as getJhiusers } from 'app/entities/jhiuser/jhiuser.reducer';
import { IAfsrole } from 'app/shared/model/afsrole.model';
import { getEntities as getAfsroles } from 'app/entities/afsrole/afsrole.reducer';
import { getEntity, updateEntity, createEntity, reset } from './meinvestprofile.reducer';
import { IMeinvestprofile } from 'app/shared/model/meinvestprofile.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMeinvestprofileUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MeinvestprofileUpdate = (props: IMeinvestprofileUpdateProps) => {
  const [matchwltypeId, setMatchwltypeId] = useState('0');
  const [matchtxntypeId, setMatchtxntypeId] = useState('0');
  const [matchtxncusttypeId, setMatchtxncusttypeId] = useState('0');
  const [matchtxnacctypeId, setMatchtxnacctypeId] = useState('0');
  const [matchsystemcodeId, setMatchsystemcodeId] = useState('0');
  const [invrespuseridId, setInvrespuseridId] = useState('0');
  const [invresproleId, setInvresproleId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const {
    meinvestprofileEntity,
    wlmwltypes,
    itxtxntypes,
    itxcusttypes,
    itxaccounttypes,
    afsystems,
    jhiusers,
    afsroles,
    loading,
    updating,
  } = props;

  const handleClose = () => {
    props.history.push('/meinvestprofile');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getWlmwltypes();
    props.getItxtxntypes();
    props.getItxcusttypes();
    props.getItxaccounttypes();
    props.getAfsystems();
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
        ...meinvestprofileEntity,
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
          <h2 id="sampleHrApp.meinvestprofile.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.meinvestprofile.home.createOrEditLabel">Create or edit a Meinvestprofile</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : meinvestprofileEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="meinvestprofile-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="meinvestprofile-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="meinvestprofile-name">
                  <Translate contentKey="sampleHrApp.meinvestprofile.name">Name</Translate>
                </Label>
                <AvField id="meinvestprofile-name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="wlmidLabel" for="meinvestprofile-wlmid">
                  <Translate contentKey="sampleHrApp.meinvestprofile.wlmid">Wlmid</Translate>
                </Label>
                <AvField id="meinvestprofile-wlmid" type="string" className="form-control" name="wlmid" />
              </AvGroup>
              <AvGroup>
                <Label id="afsidLabel" for="meinvestprofile-afsid">
                  <Translate contentKey="sampleHrApp.meinvestprofile.afsid">Afsid</Translate>
                </Label>
                <AvField id="meinvestprofile-afsid" type="string" className="form-control" name="afsid" />
              </AvGroup>
              <AvGroup>
                <Label id="invtypeLabel" for="meinvestprofile-invtype">
                  <Translate contentKey="sampleHrApp.meinvestprofile.invtype">Invtype</Translate>
                </Label>
                <AvInput
                  id="meinvestprofile-invtype"
                  type="select"
                  className="form-control"
                  name="invtype"
                  value={(!isNew && meinvestprofileEntity.invtype) || 'GENEL'}
                >
                  <option value="GENEL">{translate('sampleHrApp.Invtype.GENEL')}</option>
                  <option value="IDARI">{translate('sampleHrApp.Invtype.IDARI')}</option>
                  <option value="ADLI">{translate('sampleHrApp.Invtype.ADLI')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="processdescrLabel" for="meinvestprofile-processdescr">
                  <Translate contentKey="sampleHrApp.meinvestprofile.processdescr">Processdescr</Translate>
                </Label>
                <AvField id="meinvestprofile-processdescr" type="text" name="processdescr" />
              </AvGroup>
              <AvGroup>
                <Label id="notifgrp1emailaddrLabel" for="meinvestprofile-notifgrp1emailaddr">
                  <Translate contentKey="sampleHrApp.meinvestprofile.notifgrp1emailaddr">Notifgrp 1 Emailaddr</Translate>
                </Label>
                <AvField id="meinvestprofile-notifgrp1emailaddr" type="text" name="notifgrp1emailaddr" />
              </AvGroup>
              <AvGroup>
                <Label id="notifgrp2emailaddrLabel" for="meinvestprofile-notifgrp2emailaddr">
                  <Translate contentKey="sampleHrApp.meinvestprofile.notifgrp2emailaddr">Notifgrp 2 Emailaddr</Translate>
                </Label>
                <AvField id="meinvestprofile-notifgrp2emailaddr" type="text" name="notifgrp2emailaddr" />
              </AvGroup>
              <AvGroup>
                <Label id="notifmsgtemplLabel" for="meinvestprofile-notifmsgtempl">
                  <Translate contentKey="sampleHrApp.meinvestprofile.notifmsgtempl">Notifmsgtempl</Translate>
                </Label>
                <AvField id="meinvestprofile-notifmsgtempl" type="text" name="notifmsgtempl" />
              </AvGroup>
              <AvGroup>
                <Label for="meinvestprofile-matchwltype">
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchwltype">Matchwltype</Translate>
                </Label>
                <AvInput id="meinvestprofile-matchwltype" type="select" className="form-control" name="matchwltype.id">
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
                <Label for="meinvestprofile-matchtxntype">
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchtxntype">Matchtxntype</Translate>
                </Label>
                <AvInput id="meinvestprofile-matchtxntype" type="select" className="form-control" name="matchtxntype.id">
                  <option value="" key="0" />
                  {itxtxntypes
                    ? itxtxntypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="meinvestprofile-matchtxncusttype">
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchtxncusttype">Matchtxncusttype</Translate>
                </Label>
                <AvInput id="meinvestprofile-matchtxncusttype" type="select" className="form-control" name="matchtxncusttype.id">
                  <option value="" key="0" />
                  {itxcusttypes
                    ? itxcusttypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="meinvestprofile-matchtxnacctype">
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchtxnacctype">Matchtxnacctype</Translate>
                </Label>
                <AvInput id="meinvestprofile-matchtxnacctype" type="select" className="form-control" name="matchtxnacctype.id">
                  <option value="" key="0" />
                  {itxaccounttypes
                    ? itxaccounttypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="meinvestprofile-matchsystemcode">
                  <Translate contentKey="sampleHrApp.meinvestprofile.matchsystemcode">Matchsystemcode</Translate>
                </Label>
                <AvInput id="meinvestprofile-matchsystemcode" type="select" className="form-control" name="matchsystemcode.id">
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
              <AvGroup>
                <Label for="meinvestprofile-invrespuserid">
                  <Translate contentKey="sampleHrApp.meinvestprofile.invrespuserid">Invrespuserid</Translate>
                </Label>
                <AvInput id="meinvestprofile-invrespuserid" type="select" className="form-control" name="invrespuserid.id">
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
                <Label for="meinvestprofile-invresprole">
                  <Translate contentKey="sampleHrApp.meinvestprofile.invresprole">Invresprole</Translate>
                </Label>
                <AvInput id="meinvestprofile-invresprole" type="select" className="form-control" name="invresprole.id">
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
              <Button tag={Link} id="cancel-save" to="/meinvestprofile" replace color="info">
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
  itxtxntypes: storeState.itxtxntype.entities,
  itxcusttypes: storeState.itxcusttype.entities,
  itxaccounttypes: storeState.itxaccounttype.entities,
  afsystems: storeState.afsystem.entities,
  jhiusers: storeState.jhiuser.entities,
  afsroles: storeState.afsrole.entities,
  meinvestprofileEntity: storeState.meinvestprofile.entity,
  loading: storeState.meinvestprofile.loading,
  updating: storeState.meinvestprofile.updating,
  updateSuccess: storeState.meinvestprofile.updateSuccess,
});

const mapDispatchToProps = {
  getWlmwltypes,
  getItxtxntypes,
  getItxcusttypes,
  getItxaccounttypes,
  getAfsystems,
  getJhiusers,
  getAfsroles,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MeinvestprofileUpdate);
