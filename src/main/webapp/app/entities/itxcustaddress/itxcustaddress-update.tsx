import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IItxcustinfo } from 'app/shared/model/itxcustinfo.model';
import { getEntities as getItxcustinfos } from 'app/entities/itxcustinfo/itxcustinfo.reducer';
import { IItxcustadressinfo } from 'app/shared/model/itxcustadressinfo.model';
import { getEntities as getItxcustadressinfos } from 'app/entities/itxcustadressinfo/itxcustadressinfo.reducer';
import { getEntity, updateEntity, createEntity, reset } from './itxcustaddress.reducer';
import { IItxcustaddress } from 'app/shared/model/itxcustaddress.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxcustaddressUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcustaddressUpdate = (props: IItxcustaddressUpdateProps) => {
  const [custidId, setCustidId] = useState('0');
  const [addridId, setAddridId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxcustaddressEntity, itxcustinfos, itxcustadressinfos, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxcustaddress');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getItxcustinfos();
    props.getItxcustadressinfos();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...itxcustaddressEntity,
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
          <h2 id="sampleHrApp.itxcustaddress.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxcustaddress.home.createOrEditLabel">Create or edit a Itxcustaddress</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxcustaddressEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxcustaddress-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxcustaddress-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label for="itxcustaddress-custid">
                  <Translate contentKey="sampleHrApp.itxcustaddress.custid">Custid</Translate>
                </Label>
                <AvInput id="itxcustaddress-custid" type="select" className="form-control" name="custid.id">
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
              <AvGroup>
                <Label for="itxcustaddress-addrid">
                  <Translate contentKey="sampleHrApp.itxcustaddress.addrid">Addrid</Translate>
                </Label>
                <AvInput id="itxcustaddress-addrid" type="select" className="form-control" name="addrid.id">
                  <option value="" key="0" />
                  {itxcustadressinfos
                    ? itxcustadressinfos.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.addresstxt}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/itxcustaddress" replace color="info">
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
  itxcustinfos: storeState.itxcustinfo.entities,
  itxcustadressinfos: storeState.itxcustadressinfo.entities,
  itxcustaddressEntity: storeState.itxcustaddress.entity,
  loading: storeState.itxcustaddress.loading,
  updating: storeState.itxcustaddress.updating,
  updateSuccess: storeState.itxcustaddress.updateSuccess,
});

const mapDispatchToProps = {
  getItxcustinfos,
  getItxcustadressinfos,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcustaddressUpdate);
