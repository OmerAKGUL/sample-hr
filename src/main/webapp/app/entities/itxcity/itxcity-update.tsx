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
import { getEntity, updateEntity, createEntity, reset } from './itxcity.reducer';
import { IItxcity } from 'app/shared/model/itxcity.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxcityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcityUpdate = (props: IItxcityUpdateProps) => {
  const [countryisocodeId, setCountryisocodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxcityEntity, itxcountries, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxcity');
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
        ...itxcityEntity,
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
          <h2 id="sampleHrApp.itxcity.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxcity.home.createOrEditLabel">Create or edit a Itxcity</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxcityEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxcity-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxcity-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="itxcity-name">
                  <Translate contentKey="sampleHrApp.itxcity.name">Name</Translate>
                </Label>
                <AvField
                  id="itxcity-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="localnameLabel" for="itxcity-localname">
                  <Translate contentKey="sampleHrApp.itxcity.localname">Localname</Translate>
                </Label>
                <AvField id="itxcity-localname" type="text" name="localname" />
              </AvGroup>
              <AvGroup>
                <Label id="phonecodeLabel" for="itxcity-phonecode">
                  <Translate contentKey="sampleHrApp.itxcity.phonecode">Phonecode</Translate>
                </Label>
                <AvField id="itxcity-phonecode" type="text" name="phonecode" />
              </AvGroup>
              <AvGroup>
                <Label for="itxcity-countryisocode">
                  <Translate contentKey="sampleHrApp.itxcity.countryisocode">Countryisocode</Translate>
                </Label>
                <AvInput id="itxcity-countryisocode" type="select" className="form-control" name="countryisocode.id">
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
              <Button tag={Link} id="cancel-save" to="/itxcity" replace color="info">
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
  itxcityEntity: storeState.itxcity.entity,
  loading: storeState.itxcity.loading,
  updating: storeState.itxcity.updating,
  updateSuccess: storeState.itxcity.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(ItxcityUpdate);
