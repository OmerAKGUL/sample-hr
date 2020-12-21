import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './jhiuser.reducer';
import { IJhiuser } from 'app/shared/model/jhiuser.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IJhiuserUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const JhiuserUpdate = (props: IJhiuserUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { jhiuserEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/jhiuser');
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
    values.createddate = convertDateTimeToServer(values.createddate);
    values.resetdate = convertDateTimeToServer(values.resetdate);
    values.lastmodifieddate = convertDateTimeToServer(values.lastmodifieddate);

    if (errors.length === 0) {
      const entity = {
        ...jhiuserEntity,
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
          <h2 id="sampleHrApp.jhiuser.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.jhiuser.home.createOrEditLabel">Create or edit a Jhiuser</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : jhiuserEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="jhiuser-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="jhiuser-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="loginnameLabel" for="jhiuser-loginname">
                  <Translate contentKey="sampleHrApp.jhiuser.loginname">Loginname</Translate>
                </Label>
                <AvField id="jhiuser-loginname" type="text" name="loginname" />
              </AvGroup>
              <AvGroup>
                <Label id="passwordhashLabel" for="jhiuser-passwordhash">
                  <Translate contentKey="sampleHrApp.jhiuser.passwordhash">Passwordhash</Translate>
                </Label>
                <AvField id="jhiuser-passwordhash" type="text" name="passwordhash" />
              </AvGroup>
              <AvGroup>
                <Label id="firstnameLabel" for="jhiuser-firstname">
                  <Translate contentKey="sampleHrApp.jhiuser.firstname">Firstname</Translate>
                </Label>
                <AvField id="jhiuser-firstname" type="text" name="firstname" />
              </AvGroup>
              <AvGroup>
                <Label id="lastnameLabel" for="jhiuser-lastname">
                  <Translate contentKey="sampleHrApp.jhiuser.lastname">Lastname</Translate>
                </Label>
                <AvField id="jhiuser-lastname" type="text" name="lastname" />
              </AvGroup>
              <AvGroup>
                <Label id="imageurlLabel" for="jhiuser-imageurl">
                  <Translate contentKey="sampleHrApp.jhiuser.imageurl">Imageurl</Translate>
                </Label>
                <AvField id="jhiuser-imageurl" type="text" name="imageurl" />
              </AvGroup>
              <AvGroup>
                <Label id="langkeyLabel" for="jhiuser-langkey">
                  <Translate contentKey="sampleHrApp.jhiuser.langkey">Langkey</Translate>
                </Label>
                <AvField id="jhiuser-langkey" type="text" name="langkey" />
              </AvGroup>
              <AvGroup>
                <Label id="activationkeyLabel" for="jhiuser-activationkey">
                  <Translate contentKey="sampleHrApp.jhiuser.activationkey">Activationkey</Translate>
                </Label>
                <AvField id="jhiuser-activationkey" type="text" name="activationkey" />
              </AvGroup>
              <AvGroup>
                <Label id="resetkeyLabel" for="jhiuser-resetkey">
                  <Translate contentKey="sampleHrApp.jhiuser.resetkey">Resetkey</Translate>
                </Label>
                <AvField id="jhiuser-resetkey" type="text" name="resetkey" />
              </AvGroup>
              <AvGroup>
                <Label id="createdbyLabel" for="jhiuser-createdby">
                  <Translate contentKey="sampleHrApp.jhiuser.createdby">Createdby</Translate>
                </Label>
                <AvField id="jhiuser-createdby" type="text" name="createdby" />
              </AvGroup>
              <AvGroup>
                <Label id="createddateLabel" for="jhiuser-createddate">
                  <Translate contentKey="sampleHrApp.jhiuser.createddate">Createddate</Translate>
                </Label>
                <AvInput
                  id="jhiuser-createddate"
                  type="datetime-local"
                  className="form-control"
                  name="createddate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.jhiuserEntity.createddate)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="resetdateLabel" for="jhiuser-resetdate">
                  <Translate contentKey="sampleHrApp.jhiuser.resetdate">Resetdate</Translate>
                </Label>
                <AvInput
                  id="jhiuser-resetdate"
                  type="datetime-local"
                  className="form-control"
                  name="resetdate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.jhiuserEntity.resetdate)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="lastmodifiedbyLabel" for="jhiuser-lastmodifiedby">
                  <Translate contentKey="sampleHrApp.jhiuser.lastmodifiedby">Lastmodifiedby</Translate>
                </Label>
                <AvField id="jhiuser-lastmodifiedby" type="text" name="lastmodifiedby" />
              </AvGroup>
              <AvGroup>
                <Label id="lastmodifieddateLabel" for="jhiuser-lastmodifieddate">
                  <Translate contentKey="sampleHrApp.jhiuser.lastmodifieddate">Lastmodifieddate</Translate>
                </Label>
                <AvInput
                  id="jhiuser-lastmodifieddate"
                  type="datetime-local"
                  className="form-control"
                  name="lastmodifieddate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.jhiuserEntity.lastmodifieddate)}
                />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/jhiuser" replace color="info">
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
  jhiuserEntity: storeState.jhiuser.entity,
  loading: storeState.jhiuser.loading,
  updating: storeState.jhiuser.updating,
  updateSuccess: storeState.jhiuser.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(JhiuserUpdate);
