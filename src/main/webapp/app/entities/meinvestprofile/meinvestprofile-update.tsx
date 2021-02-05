import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import VirtualizedSelect from 'react-virtualized-select';
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
  const [matchwltypeId, setMatchwltypeId] = useState({label : '', value : 0});
  const [matchtxntypeId, setMatchtxntypeId] = useState({label : '', value : 0});
  const [matchtxncusttypeId, setMatchtxncusttypeId] = useState({label : '', value : 0});
  const [matchtxnacctypeId, setMatchtxnacctypeId] = useState({label : '', value : 0});
  const [matchsystemcodeId, setMatchsystemcodeId] = useState({label : '', value : 0});
  const [invrespuseridId, setInvrespuseridId] = useState({label : '', value : 0});
  const [invresproleId, setInvresproleId] = useState({label : '', value : 0});
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
    props.history.push('/modules/me/meinvestprofile');
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
    props.meinvestprofileEntity.matchwltype ? setMatchwltypeId({label : props.meinvestprofileEntity.matchwltype.name,value :props.meinvestprofileEntity.matchwltype.id }): null;
    props.meinvestprofileEntity.matchtxntype ? setMatchtxntypeId({label : props.meinvestprofileEntity.matchtxntype.name,value :props.meinvestprofileEntity.matchtxntype.id }): null;
    props.meinvestprofileEntity.matchtxncusttype ? setMatchtxncusttypeId({label : props.meinvestprofileEntity.matchtxncusttype.name,value :props.meinvestprofileEntity.matchtxncusttype.id }): null;
    props.meinvestprofileEntity.matchtxnacctype ? setMatchtxnacctypeId({label : props.meinvestprofileEntity.matchtxnacctype.name,value :props.meinvestprofileEntity.matchtxnacctype.id }): null;
    props.meinvestprofileEntity.matchsystemcode ? setMatchsystemcodeId({label : props.meinvestprofileEntity.matchsystemcode.name,value :props.meinvestprofileEntity.matchsystemcode.id }): null;
    props.meinvestprofileEntity.invrespuserid ? setInvrespuseridId({label : props.meinvestprofileEntity.invrespuserid.loginname,value :props.meinvestprofileEntity.invrespuserid.id }): null;
    props.meinvestprofileEntity.invresprole ? setInvresproleId({label : props.meinvestprofileEntity.invresprole.name,value :props.meinvestprofileEntity.invresprole.id }): null;
  }, [props.meinvestprofileEntity]);
  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.matchwltype.id = matchwltypeId.value;
    values.matchtxntype.id = matchtxntypeId.value;
    values.matchtxncusttype.id = matchtxncusttypeId.value;
    values.matchtxnacctype.id = matchtxnacctypeId.value;
    values.matchsystemcode.id = matchsystemcodeId.value;
    values.invrespuserid.id = invrespuseridId.value;
    values.invresprole.id = invresproleId.value;
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
                <VirtualizedSelect
                      id="meinvestprofile-matchwltype"
                      options={ wlmwltypes.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setMatchwltypeId(e)}
                      value={matchwltypeId}
                    />
                <AvInput id="meinvestprofile-matchwltype" type="select" className="form-control" name="matchwltype.id" hidden>
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
                <VirtualizedSelect
                      id="meinvestprofile-matchtxntype"
                      options={ itxtxntypes.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setMatchtxntypeId(e)}
                      value={matchtxntypeId}
                    />
                <AvInput id="meinvestprofile-matchtxntype" type="select" className="form-control" name="matchtxntype.id" hidden>
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
                <VirtualizedSelect
                      id="meinvestprofile-matchtxncusttype"
                      options={ itxcusttypes.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setMatchtxncusttypeId(e)}
                      value={matchtxncusttypeId}
                    />
                <AvInput id="meinvestprofile-matchtxncusttype" type="select" className="form-control" name="matchtxncusttype.id" hidden>
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
                <VirtualizedSelect
                      id="meinvestprofile-matchtxnacctype"
                      options={ itxaccounttypes.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setMatchtxnacctypeId(e)}
                      value={matchtxnacctypeId}
                    />
                <AvInput id="meinvestprofile-matchtxnacctype" type="select" className="form-control" name="matchtxnacctype.id" hidden>
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
                <VirtualizedSelect
                      id="meinvestprofile-matchsystemcode"
                      options={ afsystems.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setMatchsystemcodeId(e)}
                      value={matchsystemcodeId}
                    />
                <AvInput id="meinvestprofile-matchsystemcode" type="select" className="form-control" name="matchsystemcode.id" hidden>
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
                <VirtualizedSelect
                      id="meinvestprofile-invrespuserid"
                      options={ jhiusers.map(otherEntity => ({label:otherEntity.loginname,value:otherEntity.id})) }
                      onChange={(e) => setInvrespuseridId(e)}
                      value={invrespuseridId}
                    />
                <AvInput id="meinvestprofile-invrespuserid" type="select" className="form-control" name="invrespuserid.id" hidden>
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
                <VirtualizedSelect
                      id="meinvestprofile-invresprole"
                      options={ afsroles.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setInvresproleId(e)}
                      value={invresproleId}
                    />
                <AvInput id="meinvestprofile-invresprole" type="select" className="form-control" name="invresprole.id" hidden>
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
              <Button tag={Link} id="cancel-save" to="/modules/me/meinvestprofile" replace color="info">
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
