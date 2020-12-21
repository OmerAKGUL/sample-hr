import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IItxaccounttype } from 'app/shared/model/itxaccounttype.model';
import { getEntities as getItxaccounttypes } from 'app/entities/itxaccounttype/itxaccounttype.reducer';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { getEntities as getAfsystems } from 'app/entities/afsystem/afsystem.reducer';
import { IItxcustinfo } from 'app/shared/model/itxcustinfo.model';
import { getEntities as getItxcustinfos } from 'app/entities/itxcustinfo/itxcustinfo.reducer';
import { getEntity, updateEntity, createEntity, reset } from './itxaccounttinfo.reducer';
import { IItxaccounttinfo } from 'app/shared/model/itxaccounttinfo.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxaccounttinfoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxaccounttinfoUpdate = (props: IItxaccounttinfoUpdateProps) => {
  const [typeidId, setTypeidId] = useState('0');
  const [srcsyscodeId, setSrcsyscodeId] = useState('0');
  const [ownercustidId, setOwnercustidId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxaccounttinfoEntity, itxaccounttypes, afsystems, itxcustinfos, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxaccounttinfo');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getItxaccounttypes();
    props.getAfsystems();
    props.getItxcustinfos();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...itxaccounttinfoEntity,
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
          <h2 id="sampleHrApp.itxaccounttinfo.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxaccounttinfo.home.createOrEditLabel">Create or edit a Itxaccounttinfo</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxaccounttinfoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxaccounttinfo-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxaccounttinfo-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="srcsysacccodeLabel" for="itxaccounttinfo-srcsysacccode">
                  <Translate contentKey="sampleHrApp.itxaccounttinfo.srcsysacccode">Srcsysacccode</Translate>
                </Label>
                <AvField id="itxaccounttinfo-srcsysacccode" type="text" name="srcsysacccode" />
              </AvGroup>
              <AvGroup>
                <Label for="itxaccounttinfo-typeid">
                  <Translate contentKey="sampleHrApp.itxaccounttinfo.typeid">Typeid</Translate>
                </Label>
                <AvInput id="itxaccounttinfo-typeid" type="select" className="form-control" name="typeid.id">
                  <option value="" key="0" />
                  {itxaccounttypes
                    ? itxaccounttypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="itxaccounttinfo-srcsyscode">
                  <Translate contentKey="sampleHrApp.itxaccounttinfo.srcsyscode">Srcsyscode</Translate>
                </Label>
                <AvInput id="itxaccounttinfo-srcsyscode" type="select" className="form-control" name="srcsyscode.id">
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
              <AvGroup>
                <Label for="itxaccounttinfo-ownercustid">
                  <Translate contentKey="sampleHrApp.itxaccounttinfo.ownercustid">Ownercustid</Translate>
                </Label>
                <AvInput id="itxaccounttinfo-ownercustid" type="select" className="form-control" name="ownercustid.id">
                  <option value="" key="0" />
                  {itxcustinfos
                    ? itxcustinfos.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/itxaccounttinfo" replace color="info">
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
  itxaccounttypes: storeState.itxaccounttype.entities,
  afsystems: storeState.afsystem.entities,
  itxcustinfos: storeState.itxcustinfo.entities,
  itxaccounttinfoEntity: storeState.itxaccounttinfo.entity,
  loading: storeState.itxaccounttinfo.loading,
  updating: storeState.itxaccounttinfo.updating,
  updateSuccess: storeState.itxaccounttinfo.updateSuccess,
});

const mapDispatchToProps = {
  getItxaccounttypes,
  getAfsystems,
  getItxcustinfos,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxaccounttinfoUpdate);
