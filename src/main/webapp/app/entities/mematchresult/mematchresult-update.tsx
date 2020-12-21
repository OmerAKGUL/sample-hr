import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IMeconfig } from 'app/shared/model/meconfig.model';
import { getEntities as getMeconfigs } from 'app/entities/meconfig/meconfig.reducer';
import { IMeinvestproc } from 'app/shared/model/meinvestproc.model';
import { getEntities as getMeinvestprocs } from 'app/entities/meinvestproc/meinvestproc.reducer';
import { getEntity, updateEntity, createEntity, reset } from './mematchresult.reducer';
import { IMematchresult } from 'app/shared/model/mematchresult.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMematchresultUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MematchresultUpdate = (props: IMematchresultUpdateProps) => {
  const [matchconfigcodeId, setMatchconfigcodeId] = useState('0');
  const [invprocidId, setInvprocidId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { mematchresultEntity, meconfigs, meinvestprocs, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/mematchresult');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getMeconfigs();
    props.getMeinvestprocs();
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
        ...mematchresultEntity,
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
          <h2 id="sampleHrApp.mematchresult.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.mematchresult.home.createOrEditLabel">Create or edit a Mematchresult</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : mematchresultEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="mematchresult-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="mematchresult-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="matchidLabel" for="mematchresult-matchid">
                  <Translate contentKey="sampleHrApp.mematchresult.matchid">Matchid</Translate>
                </Label>
                <AvField
                  id="mematchresult-matchid"
                  type="string"
                  className="form-control"
                  name="matchid"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="matchctxidLabel" for="mematchresult-matchctxid">
                  <Translate contentKey="sampleHrApp.mematchresult.matchctxid">Matchctxid</Translate>
                </Label>
                <AvField id="mematchresult-matchctxid" type="string" className="form-control" name="matchctxid" />
              </AvGroup>
              <AvGroup>
                <Label id="matchwltypeLabel" for="mematchresult-matchwltype">
                  <Translate contentKey="sampleHrApp.mematchresult.matchwltype">Matchwltype</Translate>
                </Label>
                <AvField id="mematchresult-matchwltype" type="text" name="matchwltype" />
              </AvGroup>
              <AvGroup>
                <Label id="matchtxnidLabel" for="mematchresult-matchtxnid">
                  <Translate contentKey="sampleHrApp.mematchresult.matchtxnid">Matchtxnid</Translate>
                </Label>
                <AvField id="mematchresult-matchtxnid" type="string" className="form-control" name="matchtxnid" />
              </AvGroup>
              <AvGroup>
                <Label id="matchscoreLabel" for="mematchresult-matchscore">
                  <Translate contentKey="sampleHrApp.mematchresult.matchscore">Matchscore</Translate>
                </Label>
                <AvField id="mematchresult-matchscore" type="string" className="form-control" name="matchscore" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="mematchresult-createdt">
                  <Translate contentKey="sampleHrApp.mematchresult.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="mematchresult-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.mematchresultEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="mematchresult-updatedt">
                  <Translate contentKey="sampleHrApp.mematchresult.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="mematchresult-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.mematchresultEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="mematchresult-createusr">
                  <Translate contentKey="sampleHrApp.mematchresult.createusr">Createusr</Translate>
                </Label>
                <AvField id="mematchresult-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="mematchresult-updateusr">
                  <Translate contentKey="sampleHrApp.mematchresult.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="mematchresult-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="mematchresult-wfstate">
                  <Translate contentKey="sampleHrApp.mematchresult.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="mematchresult-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="mematchresult-wfprocid">
                  <Translate contentKey="sampleHrApp.mematchresult.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="mematchresult-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label for="mematchresult-matchconfigcode">
                  <Translate contentKey="sampleHrApp.mematchresult.matchconfigcode">Matchconfigcode</Translate>
                </Label>
                <AvInput id="mematchresult-matchconfigcode" type="select" className="form-control" name="matchconfigcode.id">
                  <option value="" key="0" />
                  {meconfigs
                    ? meconfigs.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="mematchresult-invprocid">
                  <Translate contentKey="sampleHrApp.mematchresult.invprocid">Invprocid</Translate>
                </Label>
                <AvInput id="mematchresult-invprocid" type="select" className="form-control" name="invprocid.id">
                  <option value="" key="0" />
                  {meinvestprocs
                    ? meinvestprocs.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/modules/me/mematchresult" replace color="info">
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
  meconfigs: storeState.meconfig.entities,
  meinvestprocs: storeState.meinvestproc.entities,
  mematchresultEntity: storeState.mematchresult.entity,
  loading: storeState.mematchresult.loading,
  updating: storeState.mematchresult.updating,
  updateSuccess: storeState.mematchresult.updateSuccess,
});

const mapDispatchToProps = {
  getMeconfigs,
  getMeinvestprocs,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MematchresultUpdate);
