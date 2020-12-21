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
import { IItxcusttype } from 'app/shared/model/itxcusttype.model';
import { getEntities as getItxcusttypes } from 'app/entities/itxcusttype/itxcusttype.reducer';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { getEntities as getAfsystems } from 'app/entities/afsystem/afsystem.reducer';
import { IItxorgbranch } from 'app/shared/model/itxorgbranch.model';
import { getEntities as getItxorgbranches } from 'app/entities/itxorgbranch/itxorgbranch.reducer';
import { getEntity, updateEntity, createEntity, reset } from './itxcustinfo.reducer';
import { IItxcustinfo } from 'app/shared/model/itxcustinfo.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxcustinfoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcustinfoUpdate = (props: IItxcustinfoUpdateProps) => {
  const [custorgidId, setCustorgidId] = useState('0');
  const [custtypeId, setCusttypeId] = useState('0');
  const [srcsyscodeId, setSrcsyscodeId] = useState('0');
  const [custorgbrachidId, setCustorgbrachidId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { itxcustinfoEntity, itxorganizations, itxcusttypes, afsystems, itxorgbranches, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/itxcustinfo');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getItxorganizations();
    props.getItxcusttypes();
    props.getAfsystems();
    props.getItxorgbranches();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.createdt = convertDateTimeToServer(values.createdt);
    values.updatedt = convertDateTimeToServer(values.updatedt);

    if (errors.length === 0) {
      const entity = {
        ...itxcustinfoEntity,
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
          <h2 id="sampleHrApp.itxcustinfo.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxcustinfo.home.createOrEditLabel">Create or edit a Itxcustinfo</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxcustinfoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxcustinfo-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxcustinfo-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="srcsyscustidLabel" for="itxcustinfo-srcsyscustid">
                  <Translate contentKey="sampleHrApp.itxcustinfo.srcsyscustid">Srcsyscustid</Translate>
                </Label>
                <AvField id="itxcustinfo-srcsyscustid" type="text" name="srcsyscustid" />
              </AvGroup>
              <AvGroup>
                <Label id="itxidLabel" for="itxcustinfo-itxid">
                  <Translate contentKey="sampleHrApp.itxcustinfo.itxid">Itxid</Translate>
                </Label>
                <AvField id="itxcustinfo-itxid" type="string" className="form-control" name="itxid" />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel" for="itxcustinfo-name">
                  <Translate contentKey="sampleHrApp.itxcustinfo.name">Name</Translate>
                </Label>
                <AvField id="itxcustinfo-name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="midnameLabel" for="itxcustinfo-midname">
                  <Translate contentKey="sampleHrApp.itxcustinfo.midname">Midname</Translate>
                </Label>
                <AvField id="itxcustinfo-midname" type="text" name="midname" />
              </AvGroup>
              <AvGroup>
                <Label id="surnameLabel" for="itxcustinfo-surname">
                  <Translate contentKey="sampleHrApp.itxcustinfo.surname">Surname</Translate>
                </Label>
                <AvField id="itxcustinfo-surname" type="text" name="surname" />
              </AvGroup>
              <AvGroup>
                <Label id="birthdateLabel" for="itxcustinfo-birthdate">
                  <Translate contentKey="sampleHrApp.itxcustinfo.birthdate">Birthdate</Translate>
                </Label>
                <AvField id="itxcustinfo-birthdate" type="date" className="form-control" name="birthdate" />
              </AvGroup>
              <AvGroup>
                <Label id="commtitleLabel" for="itxcustinfo-commtitle">
                  <Translate contentKey="sampleHrApp.itxcustinfo.commtitle">Commtitle</Translate>
                </Label>
                <AvField id="itxcustinfo-commtitle" type="text" name="commtitle" />
              </AvGroup>
              <AvGroup>
                <Label id="addresstypeLabel" for="itxcustinfo-addresstype">
                  <Translate contentKey="sampleHrApp.itxcustinfo.addresstype">Addresstype</Translate>
                </Label>
                <AvField id="itxcustinfo-addresstype" type="text" name="addresstype" />
              </AvGroup>
              <AvGroup>
                <Label id="addressLabel" for="itxcustinfo-address">
                  <Translate contentKey="sampleHrApp.itxcustinfo.address">Address</Translate>
                </Label>
                <AvField id="itxcustinfo-address" type="text" name="address" />
              </AvGroup>
              <AvGroup>
                <Label id="cityLabel" for="itxcustinfo-city">
                  <Translate contentKey="sampleHrApp.itxcustinfo.city">City</Translate>
                </Label>
                <AvField id="itxcustinfo-city" type="text" name="city" />
              </AvGroup>
              <AvGroup>
                <Label id="nationalityLabel" for="itxcustinfo-nationality">
                  <Translate contentKey="sampleHrApp.itxcustinfo.nationality">Nationality</Translate>
                </Label>
                <AvField id="itxcustinfo-nationality" type="text" name="nationality" />
              </AvGroup>
              <AvGroup>
                <Label id="nationalidLabel" for="itxcustinfo-nationalid">
                  <Translate contentKey="sampleHrApp.itxcustinfo.nationalid">Nationalid</Translate>
                </Label>
                <AvField id="itxcustinfo-nationalid" type="text" name="nationalid" />
              </AvGroup>
              <AvGroup>
                <Label id="genderLabel" for="itxcustinfo-gender">
                  <Translate contentKey="sampleHrApp.itxcustinfo.gender">Gender</Translate>
                </Label>
                <AvField id="itxcustinfo-gender" type="text" name="gender" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="itxcustinfo-createdt">
                  <Translate contentKey="sampleHrApp.itxcustinfo.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="itxcustinfo-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.itxcustinfoEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="itxcustinfo-updatedt">
                  <Translate contentKey="sampleHrApp.itxcustinfo.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="itxcustinfo-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.itxcustinfoEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="itxcustinfo-createusr">
                  <Translate contentKey="sampleHrApp.itxcustinfo.createusr">Createusr</Translate>
                </Label>
                <AvField id="itxcustinfo-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="itxcustinfo-updateusr">
                  <Translate contentKey="sampleHrApp.itxcustinfo.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="itxcustinfo-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="itxcustinfo-wfstate">
                  <Translate contentKey="sampleHrApp.itxcustinfo.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="itxcustinfo-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="itxcustinfo-wfprocid">
                  <Translate contentKey="sampleHrApp.itxcustinfo.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="itxcustinfo-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label id="idtype1Label" for="itxcustinfo-idtype1">
                  <Translate contentKey="sampleHrApp.itxcustinfo.idtype1">Idtype 1</Translate>
                </Label>
                <AvInput
                  id="itxcustinfo-idtype1"
                  type="select"
                  className="form-control"
                  name="idtype1"
                  value={(!isNew && itxcustinfoEntity.idtype1) || 'NUFUSCUZDAN'}
                >
                  <option value="NUFUSCUZDAN">{translate('sampleHrApp.Idtype.NUFUSCUZDAN')}</option>
                  <option value="EHLIYET">{translate('sampleHrApp.Idtype.EHLIYET')}</option>
                  <option value="PASAPORT">{translate('sampleHrApp.Idtype.PASAPORT')}</option>
                  <option value="DOGUMSERT">{translate('sampleHrApp.Idtype.DOGUMSERT')}</option>
                  <option value="GOCMENSERT">{translate('sampleHrApp.Idtype.GOCMENSERT')}</option>
                  <option value="DIGER">{translate('sampleHrApp.Idtype.DIGER')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="idno1Label" for="itxcustinfo-idno1">
                  <Translate contentKey="sampleHrApp.itxcustinfo.idno1">Idno 1</Translate>
                </Label>
                <AvField id="itxcustinfo-idno1" type="text" name="idno1" />
              </AvGroup>
              <AvGroup>
                <Label id="idtype2Label" for="itxcustinfo-idtype2">
                  <Translate contentKey="sampleHrApp.itxcustinfo.idtype2">Idtype 2</Translate>
                </Label>
                <AvInput
                  id="itxcustinfo-idtype2"
                  type="select"
                  className="form-control"
                  name="idtype2"
                  value={(!isNew && itxcustinfoEntity.idtype2) || 'NUFUSCUZDAN'}
                >
                  <option value="NUFUSCUZDAN">{translate('sampleHrApp.Idtype.NUFUSCUZDAN')}</option>
                  <option value="EHLIYET">{translate('sampleHrApp.Idtype.EHLIYET')}</option>
                  <option value="PASAPORT">{translate('sampleHrApp.Idtype.PASAPORT')}</option>
                  <option value="DOGUMSERT">{translate('sampleHrApp.Idtype.DOGUMSERT')}</option>
                  <option value="GOCMENSERT">{translate('sampleHrApp.Idtype.GOCMENSERT')}</option>
                  <option value="DIGER">{translate('sampleHrApp.Idtype.DIGER')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="idno2Label" for="itxcustinfo-idno2">
                  <Translate contentKey="sampleHrApp.itxcustinfo.idno2">Idno 2</Translate>
                </Label>
                <AvField id="itxcustinfo-idno2" type="text" name="idno2" />
              </AvGroup>
              <AvGroup>
                <Label id="idtype3Label" for="itxcustinfo-idtype3">
                  <Translate contentKey="sampleHrApp.itxcustinfo.idtype3">Idtype 3</Translate>
                </Label>
                <AvInput
                  id="itxcustinfo-idtype3"
                  type="select"
                  className="form-control"
                  name="idtype3"
                  value={(!isNew && itxcustinfoEntity.idtype3) || 'NUFUSCUZDAN'}
                >
                  <option value="NUFUSCUZDAN">{translate('sampleHrApp.Idtype.NUFUSCUZDAN')}</option>
                  <option value="EHLIYET">{translate('sampleHrApp.Idtype.EHLIYET')}</option>
                  <option value="PASAPORT">{translate('sampleHrApp.Idtype.PASAPORT')}</option>
                  <option value="DOGUMSERT">{translate('sampleHrApp.Idtype.DOGUMSERT')}</option>
                  <option value="GOCMENSERT">{translate('sampleHrApp.Idtype.GOCMENSERT')}</option>
                  <option value="DIGER">{translate('sampleHrApp.Idtype.DIGER')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="idno3Label" for="itxcustinfo-idno3">
                  <Translate contentKey="sampleHrApp.itxcustinfo.idno3">Idno 3</Translate>
                </Label>
                <AvField id="itxcustinfo-idno3" type="text" name="idno3" />
              </AvGroup>
              <AvGroup>
                <Label for="itxcustinfo-custorgid">
                  <Translate contentKey="sampleHrApp.itxcustinfo.custorgid">Custorgid</Translate>
                </Label>
                <AvInput id="itxcustinfo-custorgid" type="select" className="form-control" name="custorgid.id">
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
              <AvGroup>
                <Label for="itxcustinfo-custtype">
                  <Translate contentKey="sampleHrApp.itxcustinfo.custtype">Custtype</Translate>
                </Label>
                <AvInput id="itxcustinfo-custtype" type="select" className="form-control" name="custtype.id">
                  <option value="" key="0" />
                  {itxcusttypes
                    ? itxcusttypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="itxcustinfo-srcsyscode">
                  <Translate contentKey="sampleHrApp.itxcustinfo.srcsyscode">Srcsyscode</Translate>
                </Label>
                <AvInput id="itxcustinfo-srcsyscode" type="select" className="form-control" name="srcsyscode.id">
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
                <Label for="itxcustinfo-custorgbrachid">
                  <Translate contentKey="sampleHrApp.itxcustinfo.custorgbrachid">Custorgbrachid</Translate>
                </Label>
                <AvInput id="itxcustinfo-custorgbrachid" type="select" className="form-control" name="custorgbrachid.id">
                  <option value="" key="0" />
                  {itxorgbranches
                    ? itxorgbranches.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/itxcustinfo" replace color="info">
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
  itxcusttypes: storeState.itxcusttype.entities,
  afsystems: storeState.afsystem.entities,
  itxorgbranches: storeState.itxorgbranch.entities,
  itxcustinfoEntity: storeState.itxcustinfo.entity,
  loading: storeState.itxcustinfo.loading,
  updating: storeState.itxcustinfo.updating,
  updateSuccess: storeState.itxcustinfo.updateSuccess,
});

const mapDispatchToProps = {
  getItxorganizations,
  getItxcusttypes,
  getAfsystems,
  getItxorgbranches,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcustinfoUpdate);
