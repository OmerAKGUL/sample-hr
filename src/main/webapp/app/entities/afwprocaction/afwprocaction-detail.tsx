import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afwprocaction.reducer';
import { IAfwprocaction } from 'app/shared/model/afwprocaction.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfwprocactionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfwprocactionDetail = (props: IAfwprocactionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afwprocactionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afwprocaction.detail.title">Afwprocaction</Translate> [<b>{afwprocactionEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="actionnote">
              <Translate contentKey="sampleHrApp.afwprocaction.actionnote">Actionnote</Translate>
            </span>
          </dt>
          <dd>{afwprocactionEntity.actionnote}</dd>
          <dt>
            <span id="scheduleddt">
              <Translate contentKey="sampleHrApp.afwprocaction.scheduleddt">Scheduleddt</Translate>
            </span>
          </dt>
          <dd>
            {afwprocactionEntity.scheduleddt ? (
              <TextFormat value={afwprocactionEntity.scheduleddt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="starteddt">
              <Translate contentKey="sampleHrApp.afwprocaction.starteddt">Starteddt</Translate>
            </span>
          </dt>
          <dd>
            {afwprocactionEntity.starteddt ? (
              <TextFormat value={afwprocactionEntity.starteddt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="finisheddt">
              <Translate contentKey="sampleHrApp.afwprocaction.finisheddt">Finisheddt</Translate>
            </span>
          </dt>
          <dd>
            {afwprocactionEntity.finisheddt ? (
              <TextFormat value={afwprocactionEntity.finisheddt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="refdoc1url">
              <Translate contentKey="sampleHrApp.afwprocaction.refdoc1url">Refdoc 1 Url</Translate>
            </span>
          </dt>
          <dd>{afwprocactionEntity.refdoc1url}</dd>
          <dt>
            <span id="refdoc2url">
              <Translate contentKey="sampleHrApp.afwprocaction.refdoc2url">Refdoc 2 Url</Translate>
            </span>
          </dt>
          <dd>{afwprocactionEntity.refdoc2url}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.afwprocaction.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {afwprocactionEntity.createdt ? <TextFormat value={afwprocactionEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.afwprocaction.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {afwprocactionEntity.updatedt ? <TextFormat value={afwprocactionEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.afwprocaction.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{afwprocactionEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.afwprocaction.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{afwprocactionEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.afwprocaction.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{afwprocactionEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.afwprocaction.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{afwprocactionEntity.wfprocid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afwprocaction.procid">Procid</Translate>
          </dt>
          <dd>{afwprocactionEntity.procid ? afwprocactionEntity.procid.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afwprocaction.actioncode">Actioncode</Translate>
          </dt>
          <dd>{afwprocactionEntity.actioncode ? afwprocactionEntity.actioncode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/afwprocaction" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afwprocaction/${afwprocactionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afwprocaction }: IRootState) => ({
  afwprocactionEntity: afwprocaction.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfwprocactionDetail);
