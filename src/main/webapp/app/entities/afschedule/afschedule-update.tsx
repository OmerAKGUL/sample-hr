import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './afschedule.reducer';
import { IAfschedule } from 'app/shared/model/afschedule.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfscheduleUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfscheduleUpdate = (props: IAfscheduleUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afscheduleEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afschedule');
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
    values.dtvalidfrom = convertDateTimeToServer(values.dtvalidfrom);
    values.dtvaliduntil = convertDateTimeToServer(values.dtvaliduntil);
    values.createdt = convertDateTimeToServer(values.createdt);
    values.updatedt = convertDateTimeToServer(values.updatedt);

    if (errors.length === 0) {
      const entity = {
        ...afscheduleEntity,
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
          <h2 id="sampleHrApp.afschedule.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afschedule.home.createOrEditLabel">Create or edit a Afschedule</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afscheduleEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afschedule-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afschedule-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="afschedule-name">
                  <Translate contentKey="sampleHrApp.afschedule.name">Name</Translate>
                </Label>
                <AvField
                  id="afschedule-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="afschedule-descr">
                  <Translate contentKey="sampleHrApp.afschedule.descr">Descr</Translate>
                </Label>
                <AvField id="afschedule-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="dtvalidfromLabel" for="afschedule-dtvalidfrom">
                  <Translate contentKey="sampleHrApp.afschedule.dtvalidfrom">Dtvalidfrom</Translate>
                </Label>
                <AvInput
                  id="afschedule-dtvalidfrom"
                  type="datetime-local"
                  className="form-control"
                  name="dtvalidfrom"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afscheduleEntity.dtvalidfrom)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="dtvaliduntilLabel" for="afschedule-dtvaliduntil">
                  <Translate contentKey="sampleHrApp.afschedule.dtvaliduntil">Dtvaliduntil</Translate>
                </Label>
                <AvInput
                  id="afschedule-dtvaliduntil"
                  type="datetime-local"
                  className="form-control"
                  name="dtvaliduntil"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afscheduleEntity.dtvaliduntil)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="periodunitLabel" for="afschedule-periodunit">
                  <Translate contentKey="sampleHrApp.afschedule.periodunit">Periodunit</Translate>
                </Label>
                <AvInput
                  id="afschedule-periodunit"
                  type="select"
                  className="form-control"
                  name="periodunit"
                  value={(!isNew && afscheduleEntity.periodunit) || 'MILLISEC'}
                >
                  <option value="MILLISEC">{translate('sampleHrApp.Periodunit.MILLISEC')}</option>
                  <option value="SECOND">{translate('sampleHrApp.Periodunit.SECOND')}</option>
                  <option value="MINUTE">{translate('sampleHrApp.Periodunit.MINUTE')}</option>
                  <option value="HOUR">{translate('sampleHrApp.Periodunit.HOUR')}</option>
                  <option value="DAY">{translate('sampleHrApp.Periodunit.DAY')}</option>
                  <option value="MONTH">{translate('sampleHrApp.Periodunit.MONTH')}</option>
                  <option value="YEAR">{translate('sampleHrApp.Periodunit.YEAR')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="periodLabel" for="afschedule-period">
                  <Translate contentKey="sampleHrApp.afschedule.period">Period</Translate>
                </Label>
                <AvField id="afschedule-period" type="string" className="form-control" name="period" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="afschedule-createdt">
                  <Translate contentKey="sampleHrApp.afschedule.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="afschedule-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afscheduleEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="afschedule-updatedt">
                  <Translate contentKey="sampleHrApp.afschedule.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="afschedule-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afscheduleEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="afschedule-createusr">
                  <Translate contentKey="sampleHrApp.afschedule.createusr">Createusr</Translate>
                </Label>
                <AvField id="afschedule-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="afschedule-updateusr">
                  <Translate contentKey="sampleHrApp.afschedule.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="afschedule-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="afschedule-wfstate">
                  <Translate contentKey="sampleHrApp.afschedule.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="afschedule-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="afschedule-wfprocid">
                  <Translate contentKey="sampleHrApp.afschedule.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="afschedule-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afschedule" replace color="info">
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
  afscheduleEntity: storeState.afschedule.entity,
  loading: storeState.afschedule.loading,
  updating: storeState.afschedule.updating,
  updateSuccess: storeState.afschedule.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfscheduleUpdate);
