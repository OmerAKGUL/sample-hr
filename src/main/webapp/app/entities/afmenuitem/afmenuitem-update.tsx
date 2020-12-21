import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { getEntities as getAfsysmodules } from 'app/entities/afsysmodule/afsysmodule.reducer';
import { IAfform } from 'app/shared/model/afform.model';
import { getEntities as getAfforms } from 'app/entities/afform/afform.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afmenuitem.reducer';
import { IAfmenuitem } from 'app/shared/model/afmenuitem.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfmenuitemUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfmenuitemUpdate = (props: IAfmenuitemUpdateProps) => {
  const [modulecodeId, setModulecodeId] = useState('0');
  const [apprefformcodeId, setApprefformcodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afmenuitemEntity, afsysmodules, afforms, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afmenuitem');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfsysmodules();
    props.getAfforms();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...afmenuitemEntity,
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
          <h2 id="sampleHrApp.afmenuitem.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afmenuitem.home.createOrEditLabel">Create or edit a Afmenuitem</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afmenuitemEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afmenuitem-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afmenuitem-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="afmenuitem-code">
                  <Translate contentKey="sampleHrApp.afmenuitem.code">Code</Translate>
                </Label>
                <AvField
                  id="afmenuitem-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="afsidLabel" for="afmenuitem-afsid">
                  <Translate contentKey="sampleHrApp.afmenuitem.afsid">Afsid</Translate>
                </Label>
                <AvField id="afmenuitem-afsid" type="string" className="form-control" name="afsid" />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="afmenuitem-name">
                  <Translate contentKey="sampleHrApp.afmenuitem.name">Name</Translate>
                </Label>
                <AvField
                  id="afmenuitem-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="titleLabel" for="afmenuitem-title">
                  <Translate contentKey="sampleHrApp.afmenuitem.title">Title</Translate>
                </Label>
                <AvField id="afmenuitem-title" type="text" name="title" />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afmenuitem-descr">
                  <Translate contentKey="sampleHrApp.afmenuitem.descr">Descr</Translate>
                </Label>
                <AvField id="afmenuitem-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="linktypeLabel" for="afmenuitem-linktype">
                  <Translate contentKey="sampleHrApp.afmenuitem.linktype">Linktype</Translate>
                </Label>
                <AvInput
                  id="afmenuitem-linktype"
                  type="select"
                  className="form-control"
                  name="linktype"
                  value={(!isNew && afmenuitemEntity.linktype) || 'INTACTION'}
                >
                  <option value="INTACTION">{translate('sampleHrApp.Linktype.INTACTION')}</option>
                  <option value="EXTACTION">{translate('sampleHrApp.Linktype.EXTACTION')}</option>
                  <option value="INTREPORT">{translate('sampleHrApp.Linktype.INTREPORT')}</option>
                  <option value="EXTREPORT">{translate('sampleHrApp.Linktype.EXTREPORT')}</option>
                  <option value="INTWEBLINK">{translate('sampleHrApp.Linktype.INTWEBLINK')}</option>
                  <option value="EXTWEBLINK">{translate('sampleHrApp.Linktype.EXTWEBLINK')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="appreflinkurlLabel" for="afmenuitem-appreflinkurl">
                  <Translate contentKey="sampleHrApp.afmenuitem.appreflinkurl">Appreflinkurl</Translate>
                </Label>
                <AvField id="afmenuitem-appreflinkurl" type="text" name="appreflinkurl" />
              </AvGroup>
              <AvGroup>
                <Label for="afmenuitem-modulecode">
                  <Translate contentKey="sampleHrApp.afmenuitem.modulecode">Modulecode</Translate>
                </Label>
                <AvInput id="afmenuitem-modulecode" type="select" className="form-control" name="modulecode.id">
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
                <Label for="afmenuitem-apprefformcode">
                  <Translate contentKey="sampleHrApp.afmenuitem.apprefformcode">Apprefformcode</Translate>
                </Label>
                <AvInput id="afmenuitem-apprefformcode" type="select" className="form-control" name="apprefformcode.id">
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
              <Button tag={Link} id="cancel-save" to="/afmenuitem" replace color="info">
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
  afsysmodules: storeState.afsysmodule.entities,
  afforms: storeState.afform.entities,
  afmenuitemEntity: storeState.afmenuitem.entity,
  loading: storeState.afmenuitem.loading,
  updating: storeState.afmenuitem.updating,
  updateSuccess: storeState.afmenuitem.updateSuccess,
});

const mapDispatchToProps = {
  getAfsysmodules,
  getAfforms,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfmenuitemUpdate);
