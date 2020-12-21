import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './iwlimportqueue.reducer';
import { IIwlimportqueue } from 'app/shared/model/iwlimportqueue.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IIwlimportqueueDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const IwlimportqueueDetail = (props: IIwlimportqueueDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { iwlimportqueueEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.iwlimportqueue.detail.title">Iwlimportqueue</Translate> [<b>{iwlimportqueueEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="etljobstart">
              <Translate contentKey="sampleHrApp.iwlimportqueue.etljobstart">Etljobstart</Translate>
            </span>
          </dt>
          <dd>
            {iwlimportqueueEntity.etljobstart ? (
              <TextFormat value={iwlimportqueueEntity.etljobstart} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="etljobsessiond">
              <Translate contentKey="sampleHrApp.iwlimportqueue.etljobsessiond">Etljobsessiond</Translate>
            </span>
          </dt>
          <dd>{iwlimportqueueEntity.etljobsessiond}</dd>
          <dt>
            <span id="srcfileurl">
              <Translate contentKey="sampleHrApp.iwlimportqueue.srcfileurl">Srcfileurl</Translate>
            </span>
          </dt>
          <dd>{iwlimportqueueEntity.srcfileurl}</dd>
          <dt>
            <span id="tgtfileurl">
              <Translate contentKey="sampleHrApp.iwlimportqueue.tgtfileurl">Tgtfileurl</Translate>
            </span>
          </dt>
          <dd>{iwlimportqueueEntity.tgtfileurl}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.iwlimportqueue.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {iwlimportqueueEntity.createdt ? (
              <TextFormat value={iwlimportqueueEntity.createdt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.iwlimportqueue.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {iwlimportqueueEntity.updatedt ? (
              <TextFormat value={iwlimportqueueEntity.updatedt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.iwlimportqueue.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{iwlimportqueueEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.iwlimportqueue.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{iwlimportqueueEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.iwlimportqueue.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{iwlimportqueueEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.iwlimportqueue.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{iwlimportqueueEntity.wfprocid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.iwlimportqueue.etljobtype">Etljobtype</Translate>
          </dt>
          <dd>{iwlimportqueueEntity.etljobtype ? iwlimportqueueEntity.etljobtype.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/iwlimportqueue" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/iwlimportqueue/${iwlimportqueueEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ iwlimportqueue }: IRootState) => ({
  iwlimportqueueEntity: iwlimportqueue.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(IwlimportqueueDetail);
