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
import { getEntity, updateEntity, createEntity, reset } from './afform.reducer';
import { IAfform } from 'app/shared/model/afform.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfformUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfformUpdate = (props: IAfformUpdateProps) => {
  const [codeId, setCodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afformEntity, afsysmodules, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afform');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

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
        ...afformEntity,
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
          <h2 id="sampleHrApp.afform.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afform.home.createOrEditLabel">Create or edit a Afform</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afformEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afform-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afform-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="titleLabel" for="afform-title">
                  <Translate contentKey="sampleHrApp.afform.title">Title</Translate>
                </Label>
                <AvField
                  id="afform-title"
                  type="text"
                  name="title"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afform-descr">
                  <Translate contentKey="sampleHrApp.afform.descr">Descr</Translate>
                </Label>
                <AvField id="afform-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefclsidLabel" for="afform-apprefclsid">
                  <Translate contentKey="sampleHrApp.afform.apprefclsid">Apprefclsid</Translate>
                </Label>
                <AvField id="afform-apprefclsid" type="text" name="apprefclsid" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefformidLabel" for="afform-apprefformid">
                  <Translate contentKey="sampleHrApp.afform.apprefformid">Apprefformid</Translate>
                </Label>
                <AvField
                  id="afform-apprefformid"
                  type="text"
                  name="apprefformid"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="appreflinkurlLabel" for="afform-appreflinkurl">
                  <Translate contentKey="sampleHrApp.afform.appreflinkurl">Appreflinkurl</Translate>
                </Label>
                <AvField id="afform-appreflinkurl" type="text" name="appreflinkurl" />
              </AvGroup>
              <AvGroup>
                <Label for="afform-code">
                  <Translate contentKey="sampleHrApp.afform.code">Code</Translate>
                </Label>
                <AvInput id="afform-code" type="select" className="form-control" name="code.id">
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
              <Button tag={Link} id="cancel-save" to="/afform" replace color="info">
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
  afformEntity: storeState.afform.entity,
  loading: storeState.afform.loading,
  updating: storeState.afform.updating,
  updateSuccess: storeState.afform.updateSuccess,
});

const mapDispatchToProps = {
  getAfsysmodules,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfformUpdate);
