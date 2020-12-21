import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './itxcountry.reducer';
import { IItxcountry } from 'app/shared/model/itxcountry.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxcountryUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcountryUpdate = (props: IItxcountryUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxcountryEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxcountry');
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
        ...itxcountryEntity,
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
          <h2 id="sampleHrApp.itxcountry.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxcountry.home.createOrEditLabel">Create or edit a Itxcountry</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxcountryEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxcountry-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxcountry-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="isocodeLabel" for="itxcountry-isocode">
                  <Translate contentKey="sampleHrApp.itxcountry.isocode">Isocode</Translate>
                </Label>
                <AvField
                  id="itxcountry-isocode"
                  type="text"
                  name="isocode"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="itxcountry-name">
                  <Translate contentKey="sampleHrApp.itxcountry.name">Name</Translate>
                </Label>
                <AvField id="itxcountry-name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="localnameLabel" for="itxcountry-localname">
                  <Translate contentKey="sampleHrApp.itxcountry.localname">Localname</Translate>
                </Label>
                <AvField id="itxcountry-localname" type="text" name="localname" />
              </AvGroup>
              <AvGroup>
                <Label id="isocode2Label" for="itxcountry-isocode2">
                  <Translate contentKey="sampleHrApp.itxcountry.isocode2">Isocode 2</Translate>
                </Label>
                <AvField id="itxcountry-isocode2" type="text" name="isocode2" />
              </AvGroup>
              <AvGroup>
                <Label id="numcodeLabel" for="itxcountry-numcode">
                  <Translate contentKey="sampleHrApp.itxcountry.numcode">Numcode</Translate>
                </Label>
                <AvField id="itxcountry-numcode" type="string" className="form-control" name="numcode" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/itxcountry" replace color="info">
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
  itxcountryEntity: storeState.itxcountry.entity,
  loading: storeState.itxcountry.loading,
  updating: storeState.itxcountry.updating,
  updateSuccess: storeState.itxcountry.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcountryUpdate);
