import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import VirtualizedSelect from 'react-virtualized-select';

import { IUser } from 'app/shared/model/user.model';
import { getUsers as getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { IAfsrole } from 'app/shared/model/afsrole.model';
import { getEntities as getAfsroles } from 'app/entities/afsrole/afsrole.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afsroleuser.reducer';
import { IAfsroleuser } from 'app/shared/model/afsroleuser.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfsroleuserUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsroleuserUpdate = (props: IAfsroleuserUpdateProps) => {
  const [usridId, setUsridId] = useState({label : '', value : 0});
  const [rolecodeId, setRolecodeId] = useState({label : '', value : 0});
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afsroleuserEntity, users, afsroles, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/modules/afs/afsroleuser');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getUsers();
    props.getAfsroles();
  }, []);
  useEffect(() => {
    props.afsroleuserEntity.usrid ? setUsridId({label : props.afsroleuserEntity.usrid.login,value :props.afsroleuserEntity.usrid.id }): null;
    props.afsroleuserEntity.rolecode ? setRolecodeId({label : props.afsroleuserEntity.rolecode.name,value :props.afsroleuserEntity.rolecode.id }): null;
   
  }, [props.afsroleuserEntity]);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.usrid.id = usridId.value;
    values.rolecode.id = rolecodeId.value;
    if (errors.length === 0) {
      const entity = {
        ...afsroleuserEntity,
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
          <h2 id="sampleHrApp.afsroleuser.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afsroleuser.home.createOrEditLabel">Create or edit a Afsroleuser</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afsroleuserEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afsroleuser-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afsroleuser-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label for="afsroleuser-usrid">
                  <Translate contentKey="sampleHrApp.afsroleuser.usrid">Usrid</Translate>
                </Label>
                <VirtualizedSelect
                      id="afsroleuser-usrid"
                      options={ users.map(otherEntity => ({label:otherEntity.login,value:otherEntity.id})) }
                      onChange={(e) => setUsridId(e)}
                      value={usridId}
                    />
                <AvInput id="afsroleuser-usrid" type="select" className="form-control" name="usrid.id" hidden>
                  <option value="" key="0" />
                  {users
                    ? users.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.login}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afsroleuser-rolecode">
                  <Translate contentKey="sampleHrApp.afsroleuser.rolecode">Rolecode</Translate>
                </Label>
                <VirtualizedSelect
                      id="afsroleuser-rolecode"
                      options={ afsroles.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setRolecodeId(e)}
                      value={rolecodeId}
                    />
                <AvInput id="afsroleuser-rolecode" type="select" className="form-control" name="rolecode.id" hidden>
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
              <Button tag={Link} id="cancel-save" to="/modules/afs/afsroleuser" replace color="info">
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
  users: storeState.userManagement.users,
  afsroles: storeState.afsrole.entities,
  afsroleuserEntity: storeState.afsroleuser.entity,
  loading: storeState.afsroleuser.loading,
  updating: storeState.afsroleuser.updating,
  updateSuccess: storeState.afsroleuser.updateSuccess,
});

const mapDispatchToProps = {
  getUsers,
  getAfsroles,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsroleuserUpdate);
