import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './wlmwltype.reducer';
import { IWlmwltype } from 'app/shared/model/wlmwltype.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IWlmwltypeUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WlmwltypeUpdate = (props: IWlmwltypeUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { wlmwltypeEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/wlmwltype');
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
    values.createdt = convertDateTimeToServer(values.createdt);
    values.updatedt = convertDateTimeToServer(values.updatedt);

    if (errors.length === 0) {
      const entity = {
        ...wlmwltypeEntity,
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
          <h2 id="sampleHrApp.wlmwltype.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.wlmwltype.home.createOrEditLabel">Create or edit a Wlmwltype</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : wlmwltypeEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="wlmwltype-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="wlmwltype-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="wlmwltype-code">
                  <Translate contentKey="sampleHrApp.wlmwltype.code">Code</Translate>
                </Label>
                <AvField
                  id="wlmwltype-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="wlmwltype-name">
                  <Translate contentKey="sampleHrApp.wlmwltype.name">Name</Translate>
                </Label>
                <AvField
                  id="wlmwltype-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="wlmwltype-descr">
                  <Translate contentKey="sampleHrApp.wlmwltype.descr">Descr</Translate>
                </Label>
                <AvField id="wlmwltype-descr" type="text" name="descr" />
              </AvGroup>
              <AvGroup>
                <Label id="publishercatLabel" for="wlmwltype-publishercat">
                  <Translate contentKey="sampleHrApp.wlmwltype.publishercat">Publishercat</Translate>
                </Label>
                <AvField id="wlmwltype-publishercat" type="text" name="publishercat" />
              </AvGroup>
              <AvGroup>
                <Label id="publisherorgidLabel" for="wlmwltype-publisherorgid">
                  <Translate contentKey="sampleHrApp.wlmwltype.publisherorgid">Publisherorgid</Translate>
                </Label>
                <AvField id="wlmwltype-publisherorgid" type="string" className="form-control" name="publisherorgid" />
              </AvGroup>
              <AvGroup>
                <Label id="publishernameLabel" for="wlmwltype-publishername">
                  <Translate contentKey="sampleHrApp.wlmwltype.publishername">Publishername</Translate>
                </Label>
                <AvField id="wlmwltype-publishername" type="text" name="publishername" />
              </AvGroup>
              <AvGroup>
                <Label id="publishformatLabel" for="wlmwltype-publishformat">
                  <Translate contentKey="sampleHrApp.wlmwltype.publishformat">Publishformat</Translate>
                </Label>
                <AvField id="wlmwltype-publishformat" type="text" name="publishformat" />
              </AvGroup>
              <AvGroup>
                <Label id="filteringtypeLabel" for="wlmwltype-filteringtype">
                  <Translate contentKey="sampleHrApp.wlmwltype.filteringtype">Filteringtype</Translate>
                </Label>
                <AvField id="wlmwltype-filteringtype" type="text" name="filteringtype" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="wlmwltype-createdt">
                  <Translate contentKey="sampleHrApp.wlmwltype.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="wlmwltype-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.wlmwltypeEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="wlmwltype-updatedt">
                  <Translate contentKey="sampleHrApp.wlmwltype.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="wlmwltype-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.wlmwltypeEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="wlmwltype-createusr">
                  <Translate contentKey="sampleHrApp.wlmwltype.createusr">Createusr</Translate>
                </Label>
                <AvField id="wlmwltype-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="wlmwltype-updateusr">
                  <Translate contentKey="sampleHrApp.wlmwltype.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="wlmwltype-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="wlmwltype-wfstate">
                  <Translate contentKey="sampleHrApp.wlmwltype.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="wlmwltype-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="wlmwltype-wfprocid">
                  <Translate contentKey="sampleHrApp.wlmwltype.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="wlmwltype-wfprocid" type="text" name="wfprocid" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/wlmwltype" replace color="info">
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
  wlmwltypeEntity: storeState.wlmwltype.entity,
  loading: storeState.wlmwltype.loading,
  updating: storeState.wlmwltype.updating,
  updateSuccess: storeState.wlmwltype.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WlmwltypeUpdate);
