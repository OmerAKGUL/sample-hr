import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfsystem } from 'app/shared/model/afsystem.model';
import { getEntities as getAfsystems } from 'app/entities/afsystem/afsystem.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afmsg.reducer';
import { IAfmsg } from 'app/shared/model/afmsg.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfmsgUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfmsgUpdate = (props: IAfmsgUpdateProps) => {
  const [appsyscodeId, setAppsyscodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afmsgEntity, afsystems, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afmsg');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfsystems();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...afmsgEntity,
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
          <h2 id="sampleHrApp.afmsg.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afmsg.home.createOrEditLabel">Create or edit a Afmsg</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afmsgEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afmsg-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afmsg-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="appmsgtypeLabel" for="afmsg-appmsgtype">
                  <Translate contentKey="sampleHrApp.afmsg.appmsgtype">Appmsgtype</Translate>
                </Label>
                <AvField id="afmsg-appmsgtype" type="text" name="appmsgtype" />
              </AvGroup>
              <AvGroup>
                <Label id="apprefctxinfoLabel" for="afmsg-apprefctxinfo">
                  <Translate contentKey="sampleHrApp.afmsg.apprefctxinfo">Apprefctxinfo</Translate>
                </Label>
                <AvField id="afmsg-apprefctxinfo" type="text" name="apprefctxinfo" />
              </AvGroup>
              <AvGroup>
                <Label id="appmsgcodeLabel" for="afmsg-appmsgcode">
                  <Translate contentKey="sampleHrApp.afmsg.appmsgcode">Appmsgcode</Translate>
                </Label>
                <AvField id="afmsg-appmsgcode" type="text" name="appmsgcode" />
              </AvGroup>
              <AvGroup>
                <Label id="langisocodeLabel" for="afmsg-langisocode">
                  <Translate contentKey="sampleHrApp.afmsg.langisocode">Langisocode</Translate>
                </Label>
                <AvField
                  id="afmsg-langisocode"
                  type="text"
                  name="langisocode"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="appmsgtxtLabel" for="afmsg-appmsgtxt">
                  <Translate contentKey="sampleHrApp.afmsg.appmsgtxt">Appmsgtxt</Translate>
                </Label>
                <AvField id="afmsg-appmsgtxt" type="text" name="appmsgtxt" />
              </AvGroup>
              <AvGroup>
                <Label id="msgseverityLabel" for="afmsg-msgseverity">
                  <Translate contentKey="sampleHrApp.afmsg.msgseverity">Msgseverity</Translate>
                </Label>
                <AvField id="afmsg-msgseverity" type="string" className="form-control" name="msgseverity" />
              </AvGroup>
              <AvGroup>
                <Label for="afmsg-appsyscode">
                  <Translate contentKey="sampleHrApp.afmsg.appsyscode">Appsyscode</Translate>
                </Label>
                <AvInput id="afmsg-appsyscode" type="select" className="form-control" name="appsyscode.id">
                  <option value="" key="0" />
                  {afsystems
                    ? afsystems.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afmsg" replace color="info">
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
  afsystems: storeState.afsystem.entities,
  afmsgEntity: storeState.afmsg.entity,
  loading: storeState.afmsg.loading,
  updating: storeState.afmsg.updating,
  updateSuccess: storeState.afmsg.updateSuccess,
});

const mapDispatchToProps = {
  getAfsystems,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfmsgUpdate);
