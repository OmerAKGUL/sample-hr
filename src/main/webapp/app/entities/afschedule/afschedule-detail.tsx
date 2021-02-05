import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afschedule.reducer';
import { IAfschedule } from 'app/shared/model/afschedule.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfscheduleDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfscheduleDetail = (props: IAfscheduleDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afscheduleEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afschedule.detail.title">Afschedule</Translate> [<b>{afscheduleEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.afschedule.name">Name</Translate>
            </span>
          </dt>
          <dd>{afscheduleEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afschedule.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afscheduleEntity.descr}</dd>
          <dt>
            <span id="dtvalidfrom">
              <Translate contentKey="sampleHrApp.afschedule.dtvalidfrom">Dtvalidfrom</Translate>
            </span>
          </dt>
          <dd>
            {afscheduleEntity.dtvalidfrom ? <TextFormat value={afscheduleEntity.dtvalidfrom} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="dtvaliduntil">
              <Translate contentKey="sampleHrApp.afschedule.dtvaliduntil">Dtvaliduntil</Translate>
            </span>
          </dt>
          <dd>
            {afscheduleEntity.dtvaliduntil ? (
              <TextFormat value={afscheduleEntity.dtvaliduntil} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="periodunit">
              <Translate contentKey="sampleHrApp.afschedule.periodunit">Periodunit</Translate>
            </span>
          </dt>
          <dd>{afscheduleEntity.periodunit}</dd>
          <dt>
            <span id="period">
              <Translate contentKey="sampleHrApp.afschedule.period">Period</Translate>
            </span>
          </dt>
          <dd>{afscheduleEntity.period}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.afschedule.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {afscheduleEntity.createdt ? <TextFormat value={afscheduleEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.afschedule.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {afscheduleEntity.updatedt ? <TextFormat value={afscheduleEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.afschedule.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{afscheduleEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.afschedule.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{afscheduleEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.afschedule.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{afscheduleEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.afschedule.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{afscheduleEntity.wfprocid}</dd>
        </dl>
        <Button tag={Link} to="/modules/af/afschedule" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/af/afschedule/${afscheduleEntity.id}`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afschedule }: IRootState) => ({
  afscheduleEntity: afschedule.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfscheduleDetail);
