import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IAfmenuitem } from 'app/shared/model/afmenuitem.model';
import { getEntities as getAfmenuitems } from 'app/entities/afmenuitem/afmenuitem.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afmenuchild.reducer';
import { IAfmenuchild } from 'app/shared/model/afmenuchild.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfmenuchildUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfmenuchildUpdate = (props: IAfmenuchildUpdateProps) => {
  const [menuitemcodeId, setMenuitemcodeId] = useState('0');
  const [childcodeId, setChildcodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afmenuchildEntity, afmenuitems, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/afmenuchild');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfmenuitems();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...afmenuchildEntity,
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
          <h2 id="sampleHrApp.afmenuchild.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afmenuchild.home.createOrEditLabel">Create or edit a Afmenuchild</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afmenuchildEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afmenuchild-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afmenuchild-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="afmidLabel" for="afmenuchild-afmid">
                  <Translate contentKey="sampleHrApp.afmenuchild.afmid">Afmid</Translate>
                </Label>
                <AvField id="afmenuchild-afmid" type="string" className="form-control" name="afmid" />
              </AvGroup>
              <AvGroup>
                <Label for="afmenuchild-menuitemcode">
                  <Translate contentKey="sampleHrApp.afmenuchild.menuitemcode">Menuitemcode</Translate>
                </Label>
                <AvInput id="afmenuchild-menuitemcode" type="select" className="form-control" name="menuitemcode.id">
                  <option value="" key="0" />
                  {afmenuitems
                    ? afmenuitems.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.code}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afmenuchild-childcode">
                  <Translate contentKey="sampleHrApp.afmenuchild.childcode">Childcode</Translate>
                </Label>
                <AvInput id="afmenuchild-childcode" type="select" className="form-control" name="childcode.id">
                  <option value="" key="0" />
                  {afmenuitems
                    ? afmenuitems.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.code}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/afmenuchild" replace color="info">
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
  afmenuitems: storeState.afmenuitem.entities,
  afmenuchildEntity: storeState.afmenuchild.entity,
  loading: storeState.afmenuchild.loading,
  updating: storeState.afmenuchild.updating,
  updateSuccess: storeState.afmenuchild.updateSuccess,
});

const mapDispatchToProps = {
  getAfmenuitems,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfmenuchildUpdate);
