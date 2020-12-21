import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IWlmwldata } from 'app/shared/model/wlmwldata.model';
import { getEntities as getWlmwldata } from 'app/entities/wlmwldata/wlmwldata.reducer';
import { getEntity, updateEntity, createEntity, reset } from './wlmwldatalog.reducer';
import { IWlmwldatalog } from 'app/shared/model/wlmwldatalog.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IWlmwldatalogUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WlmwldatalogUpdate = (props: IWlmwldatalogUpdateProps) => {
  const [wlwldataidId, setWlwldataidId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { wlmwldatalogEntity, wlmwldata, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/wlmwldatalog');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getWlmwldata();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.dtchanged = convertDateTimeToServer(values.dtchanged);
    values.createdt = convertDateTimeToServer(values.createdt);
    values.updatedt = convertDateTimeToServer(values.updatedt);

    if (errors.length === 0) {
      const entity = {
        ...wlmwldatalogEntity,
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
          <h2 id="sampleHrApp.wlmwldatalog.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.wlmwldatalog.home.createOrEditLabel">Create or edit a Wlmwldatalog</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : wlmwldatalogEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="wlmwldatalog-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="wlmwldatalog-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="dtchangedLabel" for="wlmwldatalog-dtchanged">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.dtchanged">Dtchanged</Translate>
                </Label>
                <AvInput
                  id="wlmwldatalog-dtchanged"
                  type="datetime-local"
                  className="form-control"
                  name="dtchanged"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.wlmwldatalogEntity.dtchanged)}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="changeusrLabel" for="wlmwldatalog-changeusr">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.changeusr">Changeusr</Translate>
                </Label>
                <AvField id="wlmwldatalog-changeusr" type="string" className="form-control" name="changeusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wltypeLabel" for="wlmwldatalog-wltype">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.wltype">Wltype</Translate>
                </Label>
                <AvField id="wlmwldatalog-wltype" type="text" name="wltype" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="wlmwldatalog-createdt">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="wlmwldatalog-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.wlmwldatalogEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="wlmwldatalog-updatedt">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="wlmwldatalog-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.wlmwldatalogEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="wlmwldatalog-createusr">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.createusr">Createusr</Translate>
                </Label>
                <AvField id="wlmwldatalog-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="wlmwldatalog-updateusr">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="wlmwldatalog-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="wlmwldatalog-wfstate">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="wlmwldatalog-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="wlmwldatalog-wfprocid">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="wlmwldatalog-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label id="namedataLabel" for="wlmwldatalog-namedata">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.namedata">Namedata</Translate>
                </Label>
                <AvField id="wlmwldatalog-namedata" type="text" name="namedata" />
              </AvGroup>
              <AvGroup>
                <Label id="addressdataLabel" for="wlmwldatalog-addressdata">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.addressdata">Addressdata</Translate>
                </Label>
                <AvField id="wlmwldatalog-addressdata" type="text" name="addressdata" />
              </AvGroup>
              <AvGroup>
                <Label id="citydataLabel" for="wlmwldatalog-citydata">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.citydata">Citydata</Translate>
                </Label>
                <AvField id="wlmwldatalog-citydata" type="text" name="citydata" />
              </AvGroup>
              <AvGroup>
                <Label id="countrydataLabel" for="wlmwldatalog-countrydata">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.countrydata">Countrydata</Translate>
                </Label>
                <AvField id="wlmwldatalog-countrydata" type="text" name="countrydata" />
              </AvGroup>
              <AvGroup>
                <Label id="birthdatedataLabel" for="wlmwldatalog-birthdatedata">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.birthdatedata">Birthdatedata</Translate>
                </Label>
                <AvField id="wlmwldatalog-birthdatedata" type="date" className="form-control" name="birthdatedata" />
              </AvGroup>
              <AvGroup>
                <Label id="tinnumberdataLabel" for="wlmwldatalog-tinnumberdata">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.tinnumberdata">Tinnumberdata</Translate>
                </Label>
                <AvField id="wlmwldatalog-tinnumberdata" type="text" name="tinnumberdata" />
              </AvGroup>
              <AvGroup>
                <Label for="wlmwldatalog-wlwldataid">
                  <Translate contentKey="sampleHrApp.wlmwldatalog.wlwldataid">Wlwldataid</Translate>
                </Label>
                <AvInput id="wlmwldatalog-wlwldataid" type="select" className="form-control" name="wlwldataid.id">
                  <option value="" key="0" />
                  {wlmwldata
                    ? wlmwldata.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/wlmwldatalog" replace color="info">
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
  wlmwldata: storeState.wlmwldata.entities,
  wlmwldatalogEntity: storeState.wlmwldatalog.entity,
  loading: storeState.wlmwldatalog.loading,
  updating: storeState.wlmwldatalog.updating,
  updateSuccess: storeState.wlmwldatalog.updateSuccess,
});

const mapDispatchToProps = {
  getWlmwldata,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WlmwldatalogUpdate);
