import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './afdatafilter.reducer';
import { IAfdatafilter } from 'app/shared/model/afdatafilter.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfdatafilterUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfdatafilterUpdate = (props: IAfdatafilterUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afdatafilterEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afdatafilter');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...afdatafilterEntity,
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
          <h2 id="sampleHrApp.afdatafilter.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afdatafilter.home.createOrEditLabel">Create or edit a Afdatafilter</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afdatafilterEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afdatafilter-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afdatafilter-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="afdatafilter-code">
                  <Translate contentKey="sampleHrApp.afdatafilter.code">Code</Translate>
                </Label>
                <AvField
                  id="afdatafilter-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="afdatafilter-name">
                  <Translate contentKey="sampleHrApp.afdatafilter.name">Name</Translate>
                </Label>
                <AvField
                  id="afdatafilter-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afdatafilter-descr">
                  <Translate contentKey="sampleHrApp.afdatafilter.descr">Descr</Translate>
                </Label>
                <AvField id="afdatafilter-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="appscriptLabel" for="afdatafilter-appscript">
                  <Translate contentKey="sampleHrApp.afdatafilter.appscript">Appscript</Translate>
                </Label>
                <AvField
                  id="afdatafilter-appscript"
                  type="text"
                  name="appscript"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="typeLabel" for="afdatafilter-type">
                  <Translate contentKey="sampleHrApp.afdatafilter.type">Type</Translate>
                </Label>
                <AvInput
                  id="afdatafilter-type"
                  type="select"
                  className="form-control"
                  name="type"
                  value={(!isNew && afdatafilterEntity.type) || 'VIEW'}
                >
                  <option value="VIEW">{translate('sampleHrApp.Datafiltertype.VIEW')}</option>
                  <option value="SQLSELECT">{translate('sampleHrApp.Datafiltertype.SQLSELECT')}</option>
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afdatafilter" replace color="info">
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
  afdatafilterEntity: storeState.afdatafilter.entity,
  loading: storeState.afdatafilter.loading,
  updating: storeState.afdatafilter.updating,
  updateSuccess: storeState.afdatafilter.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfdatafilterUpdate);
