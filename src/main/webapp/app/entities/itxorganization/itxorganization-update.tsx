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
import { getEntity, updateEntity, createEntity, reset } from './itxorganization.reducer';
import { IItxorganization } from 'app/shared/model/itxorganization.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxorganizationUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxorganizationUpdate = (props: IItxorganizationUpdateProps) => {
  const [regcountryId, setRegcountryId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxorganizationEntity, itxcountries, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxorganization');
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
    values.registerdate = convertDateTimeToServer(values.registerdate);

    if (errors.length === 0) {
      const entity = {
        ...itxorganizationEntity,
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
          <h2 id="sampleHrApp.itxorganization.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxorganization.home.createOrEditLabel">Create or edit a Itxorganization</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxorganizationEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxorganization-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxorganization-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="commtitleLabel" for="itxorganization-commtitle">
                  <Translate contentKey="sampleHrApp.itxorganization.commtitle">Commtitle</Translate>
                </Label>
                <AvField
                  id="itxorganization-commtitle"
                  type="text"
                  name="commtitle"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="localcommtitleLabel" for="itxorganization-localcommtitle">
                  <Translate contentKey="sampleHrApp.itxorganization.localcommtitle">Localcommtitle</Translate>
                </Label>
                <AvField
                  id="itxorganization-localcommtitle"
                  type="text"
                  name="localcommtitle"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="sectorLabel" for="itxorganization-sector">
                  <Translate contentKey="sampleHrApp.itxorganization.sector">Sector</Translate>
                </Label>
                <AvField id="itxorganization-sector" type="text" name="sector" />
              </AvGroup>
              <AvGroup>
                <Label id="segmentLabel" for="itxorganization-segment">
                  <Translate contentKey="sampleHrApp.itxorganization.segment">Segment</Translate>
                </Label>
                <AvField id="itxorganization-segment" type="text" name="segment" />
              </AvGroup>
              <AvGroup>
                <Label id="traderegnoLabel" for="itxorganization-traderegno">
                  <Translate contentKey="sampleHrApp.itxorganization.traderegno">Traderegno</Translate>
                </Label>
                <AvField id="itxorganization-traderegno" type="text" name="traderegno" />
              </AvGroup>
              <AvGroup>
                <Label id="hqaddressLabel" for="itxorganization-hqaddress">
                  <Translate contentKey="sampleHrApp.itxorganization.hqaddress">Hqaddress</Translate>
                </Label>
                <AvField id="itxorganization-hqaddress" type="text" name="hqaddress" />
              </AvGroup>
              <AvGroup>
                <Label id="enterprisetypeLabel" for="itxorganization-enterprisetype">
                  <Translate contentKey="sampleHrApp.itxorganization.enterprisetype">Enterprisetype</Translate>
                </Label>
                <AvField id="itxorganization-enterprisetype" type="text" name="enterprisetype" />
              </AvGroup>
              <AvGroup>
                <Label id="registerdateLabel" for="itxorganization-registerdate">
                  <Translate contentKey="sampleHrApp.itxorganization.registerdate">Registerdate</Translate>
                </Label>
                <AvInput
                  id="itxorganization-registerdate"
                  type="datetime-local"
                  className="form-control"
                  name="registerdate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.itxorganizationEntity.registerdate)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="swiftcodeLabel" for="itxorganization-swiftcode">
                  <Translate contentKey="sampleHrApp.itxorganization.swiftcode">Swiftcode</Translate>
                </Label>
                <AvField id="itxorganization-swiftcode" type="text" name="swiftcode" />
              </AvGroup>
              <AvGroup>
                <Label id="wwwaddrLabel" for="itxorganization-wwwaddr">
                  <Translate contentKey="sampleHrApp.itxorganization.wwwaddr">Wwwaddr</Translate>
                </Label>
                <AvField id="itxorganization-wwwaddr" type="text" name="wwwaddr" />
              </AvGroup>
              <AvGroup>
                <Label for="itxorganization-regcountry">
                  <Translate contentKey="sampleHrApp.itxorganization.regcountry">Regcountry</Translate>
                </Label>
                <AvInput id="itxorganization-regcountry" type="select" className="form-control" name="regcountry.id">
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
              <Button tag={Link} id="cancel-save" to="/itxorganization" replace color="info">
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
  itxorganizationEntity: storeState.itxorganization.entity,
  loading: storeState.itxorganization.loading,
  updating: storeState.itxorganization.updating,
  updateSuccess: storeState.itxorganization.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(ItxorganizationUpdate);
