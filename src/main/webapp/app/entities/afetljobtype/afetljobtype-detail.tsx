import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afetljobtype.reducer';
import { IAfetljobtype } from 'app/shared/model/afetljobtype.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfetljobtypeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfetljobtypeDetail = (props: IAfetljobtypeDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afetljobtypeEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afetljobtype.detail.title">Afetljobtype</Translate> [<b>{afetljobtypeEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="jobname">
              <Translate contentKey="sampleHrApp.afetljobtype.jobname">Jobname</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.jobname}</dd>
          <dt>
            <span id="apprefid">
              <Translate contentKey="sampleHrApp.afetljobtype.apprefid">Apprefid</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.apprefid}</dd>
          <dt>
            <span id="srcdataprofile">
              <Translate contentKey="sampleHrApp.afetljobtype.srcdataprofile">Srcdataprofile</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.srcdataprofile}</dd>
          <dt>
            <span id="tgtdataprofile">
              <Translate contentKey="sampleHrApp.afetljobtype.tgtdataprofile">Tgtdataprofile</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.tgtdataprofile}</dd>
          <dt>
            <span id="afsid">
              <Translate contentKey="sampleHrApp.afetljobtype.afsid">Afsid</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.afsid}</dd>
          <dt>
            <span id="srclocurl">
              <Translate contentKey="sampleHrApp.afetljobtype.srclocurl">Srclocurl</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.srclocurl}</dd>
          <dt>
            <span id="tgtlocurl">
              <Translate contentKey="sampleHrApp.afetljobtype.tgtlocurl">Tgtlocurl</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.tgtlocurl}</dd>
          <dt>
            <span id="srcconntype">
              <Translate contentKey="sampleHrApp.afetljobtype.srcconntype">Srcconntype</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.srcconntype}</dd>
          <dt>
            <span id="tgtconntype">
              <Translate contentKey="sampleHrApp.afetljobtype.tgtconntype">Tgtconntype</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.tgtconntype}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.afetljobtype.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {afetljobtypeEntity.createdt ? <TextFormat value={afetljobtypeEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.afetljobtype.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {afetljobtypeEntity.updatedt ? <TextFormat value={afetljobtypeEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.afetljobtype.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.afetljobtype.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.afetljobtype.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.afetljobtype.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{afetljobtypeEntity.wfprocid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afetljobtype.srcsyscode">Srcsyscode</Translate>
          </dt>
          <dd>{afetljobtypeEntity.srcsyscode ? afetljobtypeEntity.srcsyscode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afetljobtype.tgtsyscode">Tgtsyscode</Translate>
          </dt>
          <dd>{afetljobtypeEntity.tgtsyscode ? afetljobtypeEntity.tgtsyscode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afetljobtype.scheduleid">Scheduleid</Translate>
          </dt>
          <dd>{afetljobtypeEntity.scheduleid ? afetljobtypeEntity.scheduleid.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/modules/iwl/afetljobtype" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/iwl/afetljobtype/${afetljobtypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afetljobtype }: IRootState) => ({
  afetljobtypeEntity: afetljobtype.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfetljobtypeDetail);
