import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfsrole } from 'app/shared/model/afsrole.model';
import { getEntities as getAfsroles } from 'app/entities/afsrole/afsrole.reducer';
import { IAfform } from 'app/shared/model/afform.model';
import { getEntities as getAfforms } from 'app/entities/afform/afform.reducer';
import { IAfdatafilter } from 'app/shared/model/afdatafilter.model';
import { getEntities as getAfdatafilters } from 'app/entities/afdatafilter/afdatafilter.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afformdatafilter.reducer';
import { IAfformdatafilter } from 'app/shared/model/afformdatafilter.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfformdatafilterUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfformdatafilterUpdate = (props: IAfformdatafilterUpdateProps) => {
  const [approlecodeId, setApprolecodeId] = useState('0');
  const [appformcodeId, setAppformcodeId] = useState('0');
  const [appdatafiltercodeId, setAppdatafiltercodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afformdatafilterEntity, afsroles, afforms, afdatafilters, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afformdatafilter');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfsroles();
    props.getAfforms();
    props.getAfdatafilters();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...afformdatafilterEntity,
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
          <h2 id="sampleHrApp.afformdatafilter.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afformdatafilter.home.createOrEditLabel">Create or edit a Afformdatafilter</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afformdatafilterEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afformdatafilter-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afformdatafilter-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="afsidLabel" for="afformdatafilter-afsid">
                  <Translate contentKey="sampleHrApp.afformdatafilter.afsid">Afsid</Translate>
                </Label>
                <AvField id="afformdatafilter-afsid" type="string" className="form-control" name="afsid" />
              </AvGroup>
              <AvGroup>
                <Label id="affidLabel" for="afformdatafilter-affid">
                  <Translate contentKey="sampleHrApp.afformdatafilter.affid">Affid</Translate>
                </Label>
                <AvField id="afformdatafilter-affid" type="string" className="form-control" name="affid" />
              </AvGroup>
              <AvGroup>
                <Label for="afformdatafilter-approlecode">
                  <Translate contentKey="sampleHrApp.afformdatafilter.approlecode">Approlecode</Translate>
                </Label>
                <AvInput id="afformdatafilter-approlecode" type="select" className="form-control" name="approlecode.id">
                  <option value="" key="0" />
                  {afsroles
                    ? afsroles.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afformdatafilter-appformcode">
                  <Translate contentKey="sampleHrApp.afformdatafilter.appformcode">Appformcode</Translate>
                </Label>
                <AvInput id="afformdatafilter-appformcode" type="select" className="form-control" name="appformcode.id">
                  <option value="" key="0" />
                  {afforms
                    ? afforms.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.title}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afformdatafilter-appdatafiltercode">
                  <Translate contentKey="sampleHrApp.afformdatafilter.appdatafiltercode">Appdatafiltercode</Translate>
                </Label>
                <AvInput id="afformdatafilter-appdatafiltercode" type="select" className="form-control" name="appdatafiltercode.id">
                  <option value="" key="0" />
                  {afdatafilters
                    ? afdatafilters.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afformdatafilter" replace color="info">
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
  afsroles: storeState.afsrole.entities,
  afforms: storeState.afform.entities,
  afdatafilters: storeState.afdatafilter.entities,
  afformdatafilterEntity: storeState.afformdatafilter.entity,
  loading: storeState.afformdatafilter.loading,
  updating: storeState.afformdatafilter.updating,
  updateSuccess: storeState.afformdatafilter.updateSuccess,
});

const mapDispatchToProps = {
  getAfsroles,
  getAfforms,
  getAfdatafilters,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfformdatafilterUpdate);
