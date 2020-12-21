import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IWlmwltype } from 'app/shared/model/wlmwltype.model';
import { getEntities as getWlmwltypes } from 'app/entities/wlmwltype/wlmwltype.reducer';
import { getEntity, updateEntity, createEntity, reset } from './wlmwldata.reducer';
import { IWlmwldata } from 'app/shared/model/wlmwldata.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IWlmwldataUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WlmwldataUpdate = (props: IWlmwldataUpdateProps) => {
  const [wltypeId, setWltypeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { wlmwldataEntity, wlmwltypes, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/wlmwldata' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getWlmwltypes();
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
        ...wlmwldataEntity,
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
          <h2 id="sampleHrApp.wlmwldata.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.wlmwldata.home.createOrEditLabel">Create or edit a Wlmwldata</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : wlmwldataEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="wlmwldata-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="wlmwldata-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="createdtLabel" for="wlmwldata-createdt">
                  <Translate contentKey="sampleHrApp.wlmwldata.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="wlmwldata-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.wlmwldataEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="wlmwldata-updatedt">
                  <Translate contentKey="sampleHrApp.wlmwldata.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="wlmwldata-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.wlmwldataEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="wlmwldata-createusr">
                  <Translate contentKey="sampleHrApp.wlmwldata.createusr">Createusr</Translate>
                </Label>
                <AvField id="wlmwldata-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="wlmwldata-updateusr">
                  <Translate contentKey="sampleHrApp.wlmwldata.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="wlmwldata-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="wlmwldata-wfstate">
                  <Translate contentKey="sampleHrApp.wlmwldata.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="wlmwldata-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="wlmwldata-wfprocid">
                  <Translate contentKey="sampleHrApp.wlmwldata.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="wlmwldata-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label id="namedataLabel" for="wlmwldata-namedata">
                  <Translate contentKey="sampleHrApp.wlmwldata.namedata">Namedata</Translate>
                </Label>
                <AvField id="wlmwldata-namedata" type="text" name="namedata" />
              </AvGroup>
              <AvGroup>
                <Label id="addressdataLabel" for="wlmwldata-addressdata">
                  <Translate contentKey="sampleHrApp.wlmwldata.addressdata">Addressdata</Translate>
                </Label>
                <AvField id="wlmwldata-addressdata" type="text" name="addressdata" />
              </AvGroup>
              <AvGroup>
                <Label id="citydataLabel" for="wlmwldata-citydata">
                  <Translate contentKey="sampleHrApp.wlmwldata.citydata">Citydata</Translate>
                </Label>
                <AvField id="wlmwldata-citydata" type="text" name="citydata" />
              </AvGroup>
              <AvGroup>
                <Label id="countrydataLabel" for="wlmwldata-countrydata">
                  <Translate contentKey="sampleHrApp.wlmwldata.countrydata">Countrydata</Translate>
                </Label>
                <AvField id="wlmwldata-countrydata" type="text" name="countrydata" />
              </AvGroup>
              <AvGroup>
                <Label id="birthdatedataLabel" for="wlmwldata-birthdatedata">
                  <Translate contentKey="sampleHrApp.wlmwldata.birthdatedata">Birthdatedata</Translate>
                </Label>
                <AvField id="wlmwldata-birthdatedata" type="date" className="form-control" name="birthdatedata" />
              </AvGroup>
              <AvGroup>
                <Label id="tinnumberdataLabel" for="wlmwldata-tinnumberdata">
                  <Translate contentKey="sampleHrApp.wlmwldata.tinnumberdata">Tinnumberdata</Translate>
                </Label>
                <AvField id="wlmwldata-tinnumberdata" type="text" name="tinnumberdata" />
              </AvGroup>
              <AvGroup>
                <Label for="wlmwldata-wltype">
                  <Translate contentKey="sampleHrApp.wlmwldata.wltype">Wltype</Translate>
                </Label>
                <AvInput id="wlmwldata-wltype" type="select" className="form-control" name="wltype.id">
                  <option value="" key="0" />
                  {wlmwltypes
                    ? wlmwltypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/wlmwldata" replace color="info">
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
  wlmwltypes: storeState.wlmwltype.entities,
  wlmwldataEntity: storeState.wlmwldata.entity,
  loading: storeState.wlmwldata.loading,
  updating: storeState.wlmwldata.updating,
  updateSuccess: storeState.wlmwldata.updateSuccess,
});

const mapDispatchToProps = {
  getWlmwltypes,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WlmwldataUpdate);
