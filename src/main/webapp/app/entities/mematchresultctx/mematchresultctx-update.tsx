import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IMematchresult } from 'app/shared/model/mematchresult.model';
import { getEntities as getMematchresults } from 'app/entities/mematchresult/mematchresult.reducer';
import { IMematchmethod } from 'app/shared/model/mematchmethod.model';
import { getEntities as getMematchmethods } from 'app/entities/mematchmethod/mematchmethod.reducer';
import { getEntity, updateEntity, createEntity, reset } from './mematchresultctx.reducer';
import { IMematchresultctx } from 'app/shared/model/mematchresultctx.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMematchresultctxUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MematchresultctxUpdate = (props: IMematchresultctxUpdateProps) => {
  const [matchidId, setMatchidId] = useState('0');
  const [matchmtdcodeId, setMatchmtdcodeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { mematchresultctxEntity, mematchresults, mematchmethods, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/mematchresultctx');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getMematchresults();
    props.getMematchmethods();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.matchtime = convertDateTimeToServer(values.matchtime);

    if (errors.length === 0) {
      const entity = {
        ...mematchresultctxEntity,
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
          <h2 id="sampleHrApp.mematchresultctx.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.mematchresultctx.home.createOrEditLabel">Create or edit a Mematchresultctx</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : mematchresultctxEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="mematchresultctx-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="mematchresultctx-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="memidLabel" for="mematchresultctx-memid">
                  <Translate contentKey="sampleHrApp.mematchresultctx.memid">Memid</Translate>
                </Label>
                <AvField
                  id="mematchresultctx-memid"
                  type="string"
                  className="form-control"
                  name="memid"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="matchtimeLabel" for="mematchresultctx-matchtime">
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchtime">Matchtime</Translate>
                </Label>
                <AvInput
                  id="mematchresultctx-matchtime"
                  type="datetime-local"
                  className="form-control"
                  name="matchtime"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.mematchresultctxEntity.matchtime)}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="matchmtdmsgLabel" for="mematchresultctx-matchmtdmsg">
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchmtdmsg">Matchmtdmsg</Translate>
                </Label>
                <AvField id="mematchresultctx-matchmtdmsg" type="text" name="matchmtdmsg" />
              </AvGroup>
              <AvGroup>
                <Label id="matchctxdataLabel" for="mematchresultctx-matchctxdata">
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchctxdata">Matchctxdata</Translate>
                </Label>
                <AvField id="mematchresultctx-matchctxdata" type="text" name="matchctxdata" />
              </AvGroup>
              <AvGroup>
                <Label for="mematchresultctx-matchid">
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchid">Matchid</Translate>
                </Label>
                <AvInput id="mematchresultctx-matchid" type="select" className="form-control" name="matchid.id">
                  <option value="" key="0" />
                  {mematchresults
                    ? mematchresults.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.matchid}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="mematchresultctx-matchmtdcode">
                  <Translate contentKey="sampleHrApp.mematchresultctx.matchmtdcode">Matchmtdcode</Translate>
                </Label>
                <AvInput id="mematchresultctx-matchmtdcode" type="select" className="form-control" name="matchmtdcode.id">
                  <option value="" key="0" />
                  {mematchmethods
                    ? mematchmethods.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/mematchresultctx" replace color="info">
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
  mematchresults: storeState.mematchresult.entities,
  mematchmethods: storeState.mematchmethod.entities,
  mematchresultctxEntity: storeState.mematchresultctx.entity,
  loading: storeState.mematchresultctx.loading,
  updating: storeState.mematchresultctx.updating,
  updateSuccess: storeState.mematchresultctx.updateSuccess,
});

const mapDispatchToProps = {
  getMematchresults,
  getMematchmethods,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MematchresultctxUpdate);
