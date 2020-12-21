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
import { getEntity, updateEntity, createEntity, reset } from './itxcustadressinfo.reducer';
import { IItxcustadressinfo } from 'app/shared/model/itxcustadressinfo.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxcustadressinfoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcustadressinfoUpdate = (props: IItxcustadressinfoUpdateProps) => {
  const [countryId, setCountryId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxcustadressinfoEntity, itxcountries, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxcustadressinfo');
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
        ...itxcustadressinfoEntity,
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
          <h2 id="sampleHrApp.itxcustadressinfo.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxcustadressinfo.home.createOrEditLabel">Create or edit a Itxcustadressinfo</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxcustadressinfoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxcustadressinfo-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxcustadressinfo-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="addrtypeLabel" for="itxcustadressinfo-addrtype">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.addrtype">Addrtype</Translate>
                </Label>
                <AvInput
                  id="itxcustadressinfo-addrtype"
                  type="select"
                  className="form-control"
                  name="addrtype"
                  value={(!isNew && itxcustadressinfoEntity.addrtype) || 'IKAMET'}
                >
                  <option value="IKAMET">{translate('sampleHrApp.Addrtype.IKAMET')}</option>
                  <option value="IS">{translate('sampleHrApp.Addrtype.IS')}</option>
                  <option value="SIRKET">{translate('sampleHrApp.Addrtype.SIRKET')}</option>
                  <option value="DIGER">{translate('sampleHrApp.Addrtype.DIGER')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="addresstxtLabel" for="itxcustadressinfo-addresstxt">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.addresstxt">Addresstxt</Translate>
                </Label>
                <AvField id="itxcustadressinfo-addresstxt" type="text" name="addresstxt" />
              </AvGroup>
              <AvGroup>
                <Label id="addrline1Label" for="itxcustadressinfo-addrline1">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.addrline1">Addrline 1</Translate>
                </Label>
                <AvField id="itxcustadressinfo-addrline1" type="text" name="addrline1" />
              </AvGroup>
              <AvGroup>
                <Label id="addrline2Label" for="itxcustadressinfo-addrline2">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.addrline2">Addrline 2</Translate>
                </Label>
                <AvField id="itxcustadressinfo-addrline2" type="text" name="addrline2" />
              </AvGroup>
              <AvGroup>
                <Label id="postcodeLabel" for="itxcustadressinfo-postcode">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.postcode">Postcode</Translate>
                </Label>
                <AvField id="itxcustadressinfo-postcode" type="text" name="postcode" />
              </AvGroup>
              <AvGroup>
                <Label id="street1Label" for="itxcustadressinfo-street1">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.street1">Street 1</Translate>
                </Label>
                <AvField id="itxcustadressinfo-street1" type="text" name="street1" />
              </AvGroup>
              <AvGroup>
                <Label id="street2Label" for="itxcustadressinfo-street2">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.street2">Street 2</Translate>
                </Label>
                <AvField id="itxcustadressinfo-street2" type="text" name="street2" />
              </AvGroup>
              <AvGroup>
                <Label id="street3Label" for="itxcustadressinfo-street3">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.street3">Street 3</Translate>
                </Label>
                <AvField id="itxcustadressinfo-street3" type="text" name="street3" />
              </AvGroup>
              <AvGroup>
                <Label id="townLabel" for="itxcustadressinfo-town">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.town">Town</Translate>
                </Label>
                <AvField id="itxcustadressinfo-town" type="text" name="town" />
              </AvGroup>
              <AvGroup>
                <Label id="countyLabel" for="itxcustadressinfo-county">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.county">County</Translate>
                </Label>
                <AvField id="itxcustadressinfo-county" type="text" name="county" />
              </AvGroup>
              <AvGroup>
                <Label id="cityLabel" for="itxcustadressinfo-city">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.city">City</Translate>
                </Label>
                <AvField id="itxcustadressinfo-city" type="text" name="city" />
              </AvGroup>
              <AvGroup>
                <Label for="itxcustadressinfo-country">
                  <Translate contentKey="sampleHrApp.itxcustadressinfo.country">Country</Translate>
                </Label>
                <AvInput id="itxcustadressinfo-country" type="select" className="form-control" name="country.id">
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
              <Button tag={Link} id="cancel-save" to="/itxcustadressinfo" replace color="info">
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
  itxcustadressinfoEntity: storeState.itxcustadressinfo.entity,
  loading: storeState.itxcustadressinfo.loading,
  updating: storeState.itxcustadressinfo.updating,
  updateSuccess: storeState.itxcustadressinfo.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(ItxcustadressinfoUpdate);
