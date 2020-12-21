import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ILocation } from 'app/shared/model/location.model';
import { getEntities as getLocations } from 'app/entities/location/location.reducer';
import { getEntity, updateEntity, createEntity, reset } from './department.reducer';
import { IDepartment } from 'app/shared/model/department.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

// VeloxApp imports
import Location from 'app/entities/location/location';

import {AppMsgType} from '../../veloxap/module/framework/app/AppTypes';
import {AppLayoutContext} from '../../veloxap/module//framework/app/AppLayout';


export interface IDepartmentUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const DepartmentUpdate = (props: IDepartmentUpdateProps) => {

  const [locationId, setLocationId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);
  const { departmentEntity, locations, loading, updating } = props;

  // veloxapp: use veloxapp context
  const {setMsgBarMsg, setSelectorCtx } = React.useContext(AppLayoutContext);
  // veloxapp: function for selection data binding
  const setLocationSelectionAtOrigin = (selectedVals:string[])=>{
    // set first value for location-id
    if(selectedVals&&selectedVals[0]) {
      if(document.getElementsByName("location.id")[0])
        document.getElementsByName("location.id")[0].innerHTML = selectedVals[0];
    }

    // set next value for location-city name
    if(selectedVals&&selectedVals[1]) {
      if(document.getElementsByName("location.id")[0])
        document.getElementsByName("location.id")[0].innerHTML = selectedVals[0];
    }
  }
  // veloxapp: function for selection data binding
  const refreshDSelectorListCompLocation = (attrs?:string[],attrVals?:string[])=>{
  }

  // veloxapp: data selector triggers
  const DSelectLocation = ()=>{
    // get edited values
    let editCityValue = (document.getElementById("department-location-city") as HTMLInputElement).value;
    if(!editCityValue)
      editCityValue="";

    setSelectorCtx("Select Location for the Department","Location",["id","city"],["",editCityValue],["id","city"],Location,setLocationSelectionAtOrigin,refreshDSelectorListCompLocation);
  }

  const handleClose = () => {
    props.history.push('/department');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getLocations();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...departmentEntity,
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
          <h2 id="sampleHrApp.department.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.department.home.createOrEditLabel">Create or edit a Department</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : departmentEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="department-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="department-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="departmentNameLabel" for="department-departmentName">
                  <Translate contentKey="sampleHrApp.department.departmentName">Department Name</Translate>
                </Label>
                <AvField
                  id="department-departmentName"
                  type="text"
                  name="departmentName"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label for="department-location">
                  <Translate contentKey="sampleHrApp.department.location">Location</Translate>
                </Label>
                <AvInput id="department-location" type="select" className="form-control" name="location.id">
                  <option value="" key="0" />
                  {locations
                    ? locations.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>


                <Label for="department-location-city">
                  <Translate contentKey="sampleHrApp.department.location.city">City</Translate>
                </Label>
                <AvInput id="department-location-city" className="form-control" name="location.city" onfocusout={()=>{ alert("onfocusout") }}>
                </AvInput>
                <Button onClick={()=>{DSelectLocation();}}>...</Button>

              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/department" replace color="info">
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
  locations: storeState.location.entities,
  departmentEntity: storeState.department.entity,
  loading: storeState.department.loading,
  updating: storeState.department.updating,
  updateSuccess: storeState.department.updateSuccess,
});

const mapDispatchToProps = {
  getLocations,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentUpdate);
