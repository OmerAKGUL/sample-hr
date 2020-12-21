import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IItxorganization } from 'app/shared/model/itxorganization.model';
import { getEntities as getItxorganizations } from 'app/entities/itxorganization/itxorganization.reducer';
import { getEntity, updateEntity, createEntity, reset } from './itxorgbranch.reducer';
import { IItxorgbranch } from 'app/shared/model/itxorgbranch.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxorgbranchUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxorgbranchUpdate = (props: IItxorgbranchUpdateProps) => {
  const [orgidId, setOrgidId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxorgbranchEntity, itxorganizations, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxorgbranch');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getItxorganizations();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...itxorgbranchEntity,
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
          <h2 id="sampleHrApp.itxorgbranch.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxorgbranch.home.createOrEditLabel">Create or edit a Itxorgbranch</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxorgbranchEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxorgbranch-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxorgbranch-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="codeLabel" for="itxorgbranch-code">
                  <Translate contentKey="sampleHrApp.itxorgbranch.code">Code</Translate>
                </Label>
                <AvField
                  id="itxorgbranch-code"
                  type="text"
                  name="code"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="itxorgbranch-name">
                  <Translate contentKey="sampleHrApp.itxorgbranch.name">Name</Translate>
                </Label>
                <AvField id="itxorgbranch-name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="localnameLabel" for="itxorgbranch-localname">
                  <Translate contentKey="sampleHrApp.itxorgbranch.localname">Localname</Translate>
                </Label>
                <AvField id="itxorgbranch-localname" type="text" name="localname" />
              </AvGroup>
              <AvGroup>
                <Label id="brachtypeLabel" for="itxorgbranch-brachtype">
                  <Translate contentKey="sampleHrApp.itxorgbranch.brachtype">Brachtype</Translate>
                </Label>
                <AvField id="itxorgbranch-brachtype" type="text" name="brachtype" />
              </AvGroup>
              <AvGroup>
                <Label for="itxorgbranch-orgid">
                  <Translate contentKey="sampleHrApp.itxorgbranch.orgid">Orgid</Translate>
                </Label>
                <AvInput id="itxorgbranch-orgid" type="select" className="form-control" name="orgid.id">
                  <option value="" key="0" />
                  {itxorganizations
                    ? itxorganizations.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.commtitle}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/itxorgbranch" replace color="info">
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
  itxorganizations: storeState.itxorganization.entities,
  itxorgbranchEntity: storeState.itxorgbranch.entity,
  loading: storeState.itxorgbranch.loading,
  updating: storeState.itxorgbranch.updating,
  updateSuccess: storeState.itxorgbranch.updateSuccess,
});

const mapDispatchToProps = {
  getItxorganizations,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxorgbranchUpdate);
