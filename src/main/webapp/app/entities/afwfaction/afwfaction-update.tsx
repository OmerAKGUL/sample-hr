import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfmenuitem } from 'app/shared/model/afmenuitem.model';
import { getEntities as getAfmenuitems } from 'app/entities/afmenuitem/afmenuitem.reducer';
import { IAfform } from 'app/shared/model/afform.model';
import { getEntities as getAfforms } from 'app/entities/afform/afform.reducer';
import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { getEntities as getAfsysmodules } from 'app/entities/afsysmodule/afsysmodule.reducer';
import { IAfworkflow } from 'app/shared/model/afworkflow.model';
import { getEntities as getAfworkflows } from 'app/entities/afworkflow/afworkflow.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afwfaction.reducer';
import { IAfwfaction } from 'app/shared/model/afwfaction.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfwfactionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfwfactionUpdate = (props: IAfwfactionUpdateProps) => {
  const [appmenucodeId, setAppmenucodeId] = useState('0');
  const [appformcodeId, setAppformcodeId] = useState('0');
  const [appmodulecodeId, setAppmodulecodeId] = useState('0');
  const [wfcodeId, setWfcodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afwfactionEntity, afmenuitems, afforms, afsysmodules, afworkflows, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afwfaction');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfmenuitems();
    props.getAfforms();
    props.getAfsysmodules();
    props.getAfworkflows();
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
        ...afwfactionEntity,
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
          <h2 id="sampleHrApp.afwfaction.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afwfaction.home.createOrEditLabel">Create or edit a Afwfaction</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afwfactionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afwfaction-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afwfaction-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="afwfaction-code">
                  <Translate contentKey="sampleHrApp.afwfaction.code">Code</Translate>
                </Label>
                <AvField
                  id="afwfaction-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="afwfaction-name">
                  <Translate contentKey="sampleHrApp.afwfaction.name">Name</Translate>
                </Label>
                <AvField
                  id="afwfaction-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afwfaction-descr">
                  <Translate contentKey="sampleHrApp.afwfaction.descr">Descr</Translate>
                </Label>
                <AvField id="afwfaction-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefhandlerLabel" for="afwfaction-apprefhandler">
                  <Translate contentKey="sampleHrApp.afwfaction.apprefhandler">Apprefhandler</Translate>
                </Label>
                <AvField id="afwfaction-apprefhandler" type="text" name="apprefhandler" />
              </AvGroup>
              <AvGroup>
                <Label id="afsidLabel" for="afwfaction-afsid">
                  <Translate contentKey="sampleHrApp.afwfaction.afsid">Afsid</Translate>
                </Label>
                <AvField id="afwfaction-afsid" type="string" className="form-control" name="afsid" />
              </AvGroup>
              <AvGroup>
                <Label id="afmidLabel" for="afwfaction-afmid">
                  <Translate contentKey="sampleHrApp.afwfaction.afmid">Afmid</Translate>
                </Label>
                <AvField id="afwfaction-afmid" type="string" className="form-control" name="afmid" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="afwfaction-createdt">
                  <Translate contentKey="sampleHrApp.afwfaction.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="afwfaction-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwfactionEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="afwfaction-updatedt">
                  <Translate contentKey="sampleHrApp.afwfaction.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="afwfaction-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afwfactionEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="afwfaction-createusr">
                  <Translate contentKey="sampleHrApp.afwfaction.createusr">Createusr</Translate>
                </Label>
                <AvField id="afwfaction-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="afwfaction-updateusr">
                  <Translate contentKey="sampleHrApp.afwfaction.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="afwfaction-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="afwfaction-wfstate">
                  <Translate contentKey="sampleHrApp.afwfaction.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="afwfaction-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="afwfaction-wfprocid">
                  <Translate contentKey="sampleHrApp.afwfaction.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="afwfaction-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label for="afwfaction-appmenucode">
                  <Translate contentKey="sampleHrApp.afwfaction.appmenucode">Appmenucode</Translate>
                </Label>
                <AvInput id="afwfaction-appmenucode" type="select" className="form-control" name="appmenucode.id">
                  <option value="" key="0" />
                  {afmenuitems
                    ? afmenuitems.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afwfaction-appformcode">
                  <Translate contentKey="sampleHrApp.afwfaction.appformcode">Appformcode</Translate>
                </Label>
                <AvInput id="afwfaction-appformcode" type="select" className="form-control" name="appformcode.id">
                  <option value="" key="0" />
                  {afforms
                    ? afforms.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.title}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afwfaction-appmodulecode">
                  <Translate contentKey="sampleHrApp.afwfaction.appmodulecode">Appmodulecode</Translate>
                </Label>
                <AvInput id="afwfaction-appmodulecode" type="select" className="form-control" name="appmodulecode.id">
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
              <AvGroup>
                <Label for="afwfaction-wfcode">
                  <Translate contentKey="sampleHrApp.afwfaction.wfcode">Wfcode</Translate>
                </Label>
                <AvInput id="afwfaction-wfcode" type="select" className="form-control" name="wfcode.id">
                  <option value="" key="0" />
                  {afworkflows
                    ? afworkflows.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afwfaction" replace color="info">
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
  afmenuitems: storeState.afmenuitem.entities,
  afforms: storeState.afform.entities,
  afsysmodules: storeState.afsysmodule.entities,
  afworkflows: storeState.afworkflow.entities,
  afwfactionEntity: storeState.afwfaction.entity,
  loading: storeState.afwfaction.loading,
  updating: storeState.afwfaction.updating,
  updateSuccess: storeState.afwfaction.updateSuccess,
});

const mapDispatchToProps = {
  getAfmenuitems,
  getAfforms,
  getAfsysmodules,
  getAfworkflows,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfwfactionUpdate);
