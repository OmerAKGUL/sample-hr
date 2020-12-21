import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import VirtualizedSelect from 'react-virtualized-select'
import Downshift from 'downshift'

import '../../../../../../node_modules/react-select/dist/react-select.css'
import '../../../../../../node_modules/react-virtualized/styles.css'
import '../../../../../../node_modules/react-virtualized-select/styles.css'

import { IAfsystem } from 'app/shared/model/afsystem.model';
import { getEntities as getAfsystems } from 'app/entities/afsystem/afsystem.reducer';
import { IAfschedule } from 'app/shared/model/afschedule.model';
import { getEntities as getAfschedules } from 'app/entities/afschedule/afschedule.reducer';
import { getEntity, updateEntity, createEntity, reset } from './afetljobtype.reducer';
import { IAfetljobtype } from 'app/shared/model/afetljobtype.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAfetljobtypeUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfetljobtypeUpdate = (props: IAfetljobtypeUpdateProps) => {
  const [srcsyscodeId, setSrcsyscodeId] = useState('0');
  const [tgtsyscodeId, setTgtsyscodeId] = useState('0');
  const [scheduleidId, setScheduleidId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { afetljobtypeEntity, afsystems, afschedules, loading, updating } = props;
  const [selectedSrcCode,setSelectedSrcCode]= useState({label : '', value : 0});
  const [selectedTgtCode, setSelectedTgtCode] = useState({label : '', value : 0});
  const [selectedSchedule, setSelectedSchedule] = useState({label : '', value : 0});
  /* const tgtCodeEntity = Array.from(new Array(afsystems.length), (_, index) => ({
	  label: afsystems[index].name,
	  value: afsystems[index].id,
	  selected: "selected" }));
 
 const srcCodeEntity = Array.from(new Array(afsystems.length), (_, index) => ({
	  label: afsystems[index].name,
	  value: afsystems[index].id
	}));
	
  const scheduleEntity = Array.from(new Array(afschedules.length), (_, index) => ({
	  label: afschedules[index].name,
	  value: afschedules[index].id }));
*/

  const handleClose = () => {
    props.history.push('/modules/iwl/afetljobtype');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
	
    props.getAfsystems();
    props.getAfschedules();
  }, []);

	useEffect(() => {
	props.afetljobtypeEntity.srcsyscode ? setSelectedSrcCode({label : props.afetljobtypeEntity.srcsyscode.name,value :props.afetljobtypeEntity.srcsyscode.id }): null;
	props.afetljobtypeEntity.tgtsyscode ? setSelectedTgtCode({label : props.afetljobtypeEntity.tgtsyscode.name,value :props.afetljobtypeEntity.tgtsyscode.id }): null;
  	props.afetljobtypeEntity.scheduleid ? setSelectedSchedule({label : props.afetljobtypeEntity.scheduleid.name,value :props.afetljobtypeEntity.scheduleid.id }): null;
    
}, [props.afetljobtypeEntity]);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);
	
  const saveEntity = (event, errors, values) => {
    values.createdt = convertDateTimeToServer(values.createdt);
    values.updatedt = convertDateTimeToServer(values.updatedt);
	values.srcsyscode.id = selectedSrcCode != null ? selectedSrcCode.value : "";
	values.tgtsyscode.id = selectedTgtCode != null ? selectedTgtCode.value : "";
	values.scheduleid.id = selectedSchedule != null ? selectedSchedule.value : "";
    if (errors.length === 0) {
      const entity = {
        ...afetljobtypeEntity,
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
          <h2 id="sampleHrApp.afetljobtype.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.afetljobtype.home.createOrEditLabel">Create or edit a Afetljobtype</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : afetljobtypeEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="afetljobtype-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="afetljobtype-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="jobnameLabel" for="afetljobtype-jobname">
                  <Translate contentKey="sampleHrApp.afetljobtype.jobname">Jobname</Translate>
                </Label>
                <AvField
                  id="afetljobtype-jobname"
                  type="text"
                  name="jobname"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="apprefidLabel" for="afetljobtype-apprefid">
                  <Translate contentKey="sampleHrApp.afetljobtype.apprefid">Apprefid</Translate>
                </Label>
                <AvField id="afetljobtype-apprefid" type="text" name="apprefid" />
              </AvGroup>
              <AvGroup>
                <Label id="srcdataprofileLabel" for="afetljobtype-srcdataprofile">
                  <Translate contentKey="sampleHrApp.afetljobtype.srcdataprofile">Srcdataprofile</Translate>
                </Label>
                <AvField id="afetljobtype-srcdataprofile" type="text" name="srcdataprofile" />
              </AvGroup>
              <AvGroup>
                <Label id="tgtdataprofileLabel" for="afetljobtype-tgtdataprofile">
                  <Translate contentKey="sampleHrApp.afetljobtype.tgtdataprofile">Tgtdataprofile</Translate>
                </Label>
                <AvField id="afetljobtype-tgtdataprofile" type="text" name="tgtdataprofile" />
              </AvGroup>
              <AvGroup>
                <Label id="afsidLabel" for="afetljobtype-afsid">
                  <Translate contentKey="sampleHrApp.afetljobtype.afsid">Afsid</Translate>
                </Label>
                <AvField id="afetljobtype-afsid" type="string" className="form-control" name="afsid" />
              </AvGroup>
              <AvGroup>
                <Label id="srclocurlLabel" for="afetljobtype-srclocurl">
                  <Translate contentKey="sampleHrApp.afetljobtype.srclocurl">Srclocurl</Translate>
                </Label>
                <AvField id="afetljobtype-srclocurl" type="text" name="srclocurl" />
              </AvGroup>
              <AvGroup>
                <Label id="tgtlocurlLabel" for="afetljobtype-tgtlocurl">
                  <Translate contentKey="sampleHrApp.afetljobtype.tgtlocurl">Tgtlocurl</Translate>
                </Label>
                <AvField id="afetljobtype-tgtlocurl" type="text" name="tgtlocurl" />
              </AvGroup>
              <AvGroup>
                <Label id="srcconntypeLabel" for="afetljobtype-srcconntype">
                  <Translate contentKey="sampleHrApp.afetljobtype.srcconntype">Srcconntype</Translate>
                </Label>
                <AvField id="afetljobtype-srcconntype" type="text" name="srcconntype" />
              </AvGroup>
              <AvGroup>
                <Label id="tgtconntypeLabel" for="afetljobtype-tgtconntype">
                  <Translate contentKey="sampleHrApp.afetljobtype.tgtconntype">Tgtconntype</Translate>
                </Label>
                <AvField id="afetljobtype-tgtconntype" type="text" name="tgtconntype" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="afetljobtype-createdt">
                  <Translate contentKey="sampleHrApp.afetljobtype.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="afetljobtype-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afetljobtypeEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="afetljobtype-updatedt">
                  <Translate contentKey="sampleHrApp.afetljobtype.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="afetljobtype-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.afetljobtypeEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="afetljobtype-createusr">
                  <Translate contentKey="sampleHrApp.afetljobtype.createusr">Createusr</Translate>
                </Label>
                <AvField id="afetljobtype-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="afetljobtype-updateusr">
                  <Translate contentKey="sampleHrApp.afetljobtype.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="afetljobtype-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="afetljobtype-wfstate">
                  <Translate contentKey="sampleHrApp.afetljobtype.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="afetljobtype-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="afetljobtype-wfprocid">
                  <Translate contentKey="sampleHrApp.afetljobtype.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="afetljobtype-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label for="afetljobtype-srcsyscode">
                  <Translate contentKey="sampleHrApp.afetljobtype.srcsyscode">Srcsyscode</Translate>
                </Label>

				<VirtualizedSelect
					id="afetljobtype-srcsyscode"
			        options={ afsystems.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id})) }
			        onChange={(e) => setSelectedSrcCode(e)}
					value={selectedSrcCode}
			      />

                <AvInput id="afetljobtype-srcsyscode" type="select" className="form-control" name="srcsyscode.id" hidden>
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
                <Label for="afetljobtype-tgtsyscode">
                  <Translate contentKey="sampleHrApp.afetljobtype.tgtsyscode">Tgtsyscode</Translate>
                </Label>


				<VirtualizedSelect
			        options={afsystems.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id}))}
			        onChange={(e) => setSelectedTgtCode(e)}
					value={selectedTgtCode}
			      />
                <AvInput id="afetljobtype-tgtsyscode" type="select" className="form-control" name="tgtsyscode.id" hidden>
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
                <Label for="afetljobtype-scheduleid">
                  <Translate contentKey="sampleHrApp.afetljobtype.scheduleid">Scheduleid</Translate>
                </Label>
				<VirtualizedSelect
			        options={afschedules.map(otherEntity => ({label:otherEntity.name,value:otherEntity.id}))}
			        onChange={(e) => setSelectedSchedule(e)}
					value={selectedSchedule}
			      />
                <AvInput id="afetljobtype-scheduleid" type="select" className="form-control" name="scheduleid.id" hidden>
                  <option value="" key="0" />
                  {afschedules
                    ? afschedules.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/modules/iwl/afetljobtype" replace color="info">
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
  afschedules: storeState.afschedule.entities,
  afetljobtypeEntity: storeState.afetljobtype.entity,
  loading: storeState.afetljobtype.loading,
  updating: storeState.afetljobtype.updating,
  updateSuccess: storeState.afetljobtype.updateSuccess,
});

const mapDispatchToProps = {
  getAfsystems,
  getAfschedules,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfetljobtypeUpdate);
