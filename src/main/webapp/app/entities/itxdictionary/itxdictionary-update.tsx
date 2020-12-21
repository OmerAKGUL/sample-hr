import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IItxcountry } from 'app/shared/model/itxcountry.model';
import { getEntities as getItxcountries } from 'app/entities/itxcountry/itxcountry.reducer';
import { getEntity, updateEntity, createEntity, reset } from './itxdictionary.reducer';
import { IItxdictionary } from 'app/shared/model/itxdictionary.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxdictionaryUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxdictionaryUpdate = (props: IItxdictionaryUpdateProps) => {
  const [countryisocodeId, setCountryisocodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxdictionaryEntity, itxcountries, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxdictionary');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getItxcountries();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...itxdictionaryEntity,
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
          <h2 id="sampleHrApp.itxdictionary.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxdictionary.home.createOrEditLabel">Create or edit a Itxdictionary</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxdictionaryEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxdictionary-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxdictionary-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="termnameLabel" for="itxdictionary-termname">
                  <Translate contentKey="sampleHrApp.itxdictionary.termname">Termname</Translate>
                </Label>
                <AvField
                  id="itxdictionary-termname"
                  type="text"
                  name="termname"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="typeLabel" for="itxdictionary-type">
                  <Translate contentKey="sampleHrApp.itxdictionary.type">Type</Translate>
                </Label>
                <AvField
                  id="itxdictionary-type"
                  type="text"
                  name="type"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label for="itxdictionary-countryisocode">
                  <Translate contentKey="sampleHrApp.itxdictionary.countryisocode">Countryisocode</Translate>
                </Label>
                <AvInput id="itxdictionary-countryisocode" type="select" className="form-control" name="countryisocode.id">
                  <option value="" key="0" />
                  {itxcountries
                    ? itxcountries.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/itxdictionary" replace color="info">
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
  itxcountries: storeState.itxcountry.entities,
  itxdictionaryEntity: storeState.itxdictionary.entity,
  loading: storeState.itxdictionary.loading,
  updating: storeState.itxdictionary.updating,
  updateSuccess: storeState.itxdictionary.updateSuccess,
});

const mapDispatchToProps = {
  getItxcountries,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxdictionaryUpdate);
