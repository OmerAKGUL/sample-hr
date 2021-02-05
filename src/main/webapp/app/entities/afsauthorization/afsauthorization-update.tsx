import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import VirtualizedSelect from 'react-virtualized-select';

import { IAfsrole } from 'app/shared/model/afsrole.model';
import { getEntities as getAfsroles } from 'app/entities/afsrole/afsrole.reducer';
import { IAfwfaction } from 'app/shared/model/afwfaction.model';
import { getEntities as getAfwfactions } from 'app/entities/afwfaction/afwfaction.reducer';
import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { getEntities as getAfsysmodules } from 'app/entities/afsysmodule/afsysmodule.reducer';
import { IAfmenuitem } from 'app/shared/model/afmenuitem.model';
import { getEntities as getAfmenuitems } from 'app/entities/afmenuitem/afmenuitem.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afsauthorization.reducer';
import { IAfsauthorization } from 'app/shared/model/afsauthorization.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfsauthorizationUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsauthorizationUpdate = (props: IAfsauthorizationUpdateProps) => {
  const [rolecodeId, setRolecodeId] = useState({label : '', value : 0});
  const [acccodeId, setAcccodeId] = useState({label : '', value : 0});
  const [modulecodeId, setModulecodeId] = useState({label : '', value : 0});
  const [menuitemcodeId, setMenuitemcodeId] = useState({label : '', value : 0});
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afsauthorizationEntity, afsroles, afwfactions, afsysmodules, afmenuitems, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/modules/afs/afsauthorization');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getAfsroles();
    props.getAfwfactions();
    props.getAfsysmodules();
    props.getAfmenuitems();
  }, []);
  useEffect(() => {
    props.afsauthorizationEntity.rolecode ? setRolecodeId({label : props.afsauthorizationEntity.rolecode.name,value :props.afsauthorizationEntity.rolecode.id }): null;
    props.afsauthorizationEntity.acccode ? setAcccodeId({label : props.afsauthorizationEntity.acccode.name,value :props.afsauthorizationEntity.acccode.id }): null;
    props.afsauthorizationEntity.modulecode ? setModulecodeId({label : props.afsauthorizationEntity.modulecode.name,value :props.afsauthorizationEntity.modulecode.id }): null;
    props.afsauthorizationEntity.menuitemcode ? setMenuitemcodeId({label : props.afsauthorizationEntity.menuitemcode.name,value :props.afsauthorizationEntity.menuitemcode.id }): null;
  }, [props.afsauthorizationEntity]);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.rolecode.id = rolecodeId.value;
    values.acccode.id = acccodeId.value;
    values.modulecode.id = modulecodeId.value;
    values.menuitemcode.id = menuitemcodeId.value;
    if (errors.length === 0) {
      const entity = {
        ...afsauthorizationEntity,
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
          <h2 id="sampleHrApp.afsauthorization.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afsauthorization.home.createOrEditLabel">Create or edit a Afsauthorization</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afsauthorizationEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afsauthorization-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afsauthorization-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="authtypeLabel" for="afsauthorization-authtype">
                  <Translate contentKey="sampleHrApp.afsauthorization.authtype">Authtype</Translate>
                </Label>
                <AvField
                  id="afsauthorization-authtype"
                  type="text"
                  name="authtype"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="afsidLabel" for="afsauthorization-afsid">
                  <Translate contentKey="sampleHrApp.afsauthorization.afsid">Afsid</Translate>
                </Label>
                <AvField id="afsauthorization-afsid" type="string" className="form-control" name="afsid" />
              </AvGroup>
              <AvGroup>
                <Label id="afsid2Label" for="afsauthorization-afsid2">
                  <Translate contentKey="sampleHrApp.afsauthorization.afsid2">Afsid 2</Translate>
                </Label>
                <AvField id="afsauthorization-afsid2" type="string" className="form-control" name="afsid2" />
              </AvGroup>
              <AvGroup>
                <Label id="afwidLabel" for="afsauthorization-afwid">
                  <Translate contentKey="sampleHrApp.afsauthorization.afwid">Afwid</Translate>
                </Label>
                <AvField id="afsauthorization-afwid" type="string" className="form-control" name="afwid" />
              </AvGroup>
              <AvGroup>
                <Label for="afsauthorization-rolecode">
                  <Translate contentKey="sampleHrApp.afsauthorization.rolecode">Rolecode</Translate>
                </Label>
                
                <VirtualizedSelect
                      id="afsauthorization-rolecode"
                      options={ afsroles.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setRolecodeId(e)}
                      value={rolecodeId}
                    />
                <AvInput id="afsauthorization-rolecode" type="select" className="form-control" name="rolecode.id" hidden>
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
                <Label for="afsauthorization-acccode">
                  <Translate contentKey="sampleHrApp.afsauthorization.acccode">Acccode</Translate>
                </Label>
                <VirtualizedSelect
                      id="afsauthorization-acccode"
                      options={ afwfactions.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setAcccodeId(e)}
                      value={acccodeId}
                    />
                <AvInput id="afsauthorization-acccode" type="select" className="form-control" name="acccode.id" hidden>
                  <option value="" key="0" />
                  {afwfactions
                    ? afwfactions.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afsauthorization-modulecode">
                  <Translate contentKey="sampleHrApp.afsauthorization.modulecode">Modulecode</Translate>
                </Label>
                <VirtualizedSelect
                      id="afsauthorization-modulecode"
                      options={ afsysmodules.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setModulecodeId(e)}
                      value={modulecodeId}
                    />
                <AvInput id="afsauthorization-modulecode" type="select" className="form-control" name="modulecode.id" hidden>
                  <option value="" key="0" />
                  {afsysmodules
                    ? afsysmodules.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="afsauthorization-menuitemcode">
                  <Translate contentKey="sampleHrApp.afsauthorization.menuitemcode">Menuitemcode</Translate>
                </Label>
                <VirtualizedSelect
                      id="afsauthorization-menuitemcode"
                      options={ afmenuitems.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
                      onChange={(e) => setMenuitemcodeId(e)}
                      value={menuitemcodeId}
                    />
                <AvInput id="afsauthorization-menuitemcode" type="select" className="form-control" name="menuitemcode.id" hidden>
                  <option value="" key="0" />
                  {afmenuitems
                    ? afmenuitems.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.name}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/modules/afs/afsauthorization" replace color="info">
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
  afwfactions: storeState.afwfaction.entities,
  afsysmodules: storeState.afsysmodule.entities,
  afmenuitems: storeState.afmenuitem.entities,
  afsauthorizationEntity: storeState.afsauthorization.entity,
  loading: storeState.afsauthorization.loading,
  updating: storeState.afsauthorization.updating,
  updateSuccess: storeState.afsauthorization.updateSuccess,
});

const mapDispatchToProps = {
  getAfsroles,
  getAfwfactions,
  getAfsysmodules,
  getAfmenuitems,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsauthorizationUpdate);
