import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './itxcurrency.reducer';
import { IItxcurrency } from 'app/shared/model/itxcurrency.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxcurrencyUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcurrencyUpdate = (props: IItxcurrencyUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxcurrencyEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxcurrency');
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
        ...itxcurrencyEntity,
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
          <h2 id="sampleHrApp.itxcurrency.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxcurrency.home.createOrEditLabel">Create or edit a Itxcurrency</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxcurrencyEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxcurrency-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxcurrency-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="isocodeLabel" for="itxcurrency-isocode">
                  <Translate contentKey="sampleHrApp.itxcurrency.isocode">Isocode</Translate>
                </Label>
                <AvField
                  id="itxcurrency-isocode"
                  type="text"
                  name="isocode"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="itxcurrency-name">
                  <Translate contentKey="sampleHrApp.itxcurrency.name">Name</Translate>
                </Label>
                <AvField id="itxcurrency-name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="localnameLabel" for="itxcurrency-localname">
                  <Translate contentKey="sampleHrApp.itxcurrency.localname">Localname</Translate>
                </Label>
                <AvField id="itxcurrency-localname" type="text" name="localname" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/itxcurrency" replace color="info">
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
  itxcurrencyEntity: storeState.itxcurrency.entity,
  loading: storeState.itxcurrency.loading,
  updating: storeState.itxcurrency.updating,
  updateSuccess: storeState.itxcurrency.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcurrencyUpdate);
