import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './itxaccounttype.reducer';
import { IItxaccounttype } from 'app/shared/model/itxaccounttype.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxaccounttypeUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxaccounttypeUpdate = (props: IItxaccounttypeUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxaccounttypeEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxaccounttype');
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
    if (errors.length === 0) {
      const entity = {
        ...itxaccounttypeEntity,
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
          <h2 id="sampleHrApp.itxaccounttype.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxaccounttype.home.createOrEditLabel">Create or edit a Itxaccounttype</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxaccounttypeEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxaccounttype-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxaccounttype-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="itxaccounttype-name">
                  <Translate contentKey="sampleHrApp.itxaccounttype.name">Name</Translate>
                </Label>
                <AvField id="itxaccounttype-name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="descrLabel" for="itxaccounttype-descr">
                  <Translate contentKey="sampleHrApp.itxaccounttype.descr">Descr</Translate>
                </Label>
                <AvField id="itxaccounttype-descr" type="text" name="descr" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/itxaccounttype" replace color="info">
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
  itxaccounttypeEntity: storeState.itxaccounttype.entity,
  loading: storeState.itxaccounttype.loading,
  updating: storeState.itxaccounttype.updating,
  updateSuccess: storeState.itxaccounttype.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxaccounttypeUpdate);
