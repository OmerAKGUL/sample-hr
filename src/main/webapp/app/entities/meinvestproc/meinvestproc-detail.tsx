import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './meinvestproc.reducer';
import { IMeinvestproc } from 'app/shared/model/meinvestproc.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMeinvestprocDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MeinvestprocDetail = (props: IMeinvestprocDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { meinvestprocEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.meinvestproc.detail.title">Meinvestproc</Translate> [<b>{meinvestprocEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.meinvestproc.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{meinvestprocEntity.descr}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.meinvestproc.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {meinvestprocEntity.createdt ? <TextFormat value={meinvestprocEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.meinvestproc.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {meinvestprocEntity.updatedt ? <TextFormat value={meinvestprocEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.meinvestproc.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{meinvestprocEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.meinvestproc.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{meinvestprocEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.meinvestproc.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{meinvestprocEntity.wfstate}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meinvestproc.wfprocid">Wfprocid</Translate>
          </dt>
          <dd>{meinvestprocEntity.wfprocid ? meinvestprocEntity.wfprocid.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meinvestproc.invprofile">Invprofile</Translate>
          </dt>
          <dd>{meinvestprocEntity.invprofile ? meinvestprocEntity.invprofile.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/meinvestproc" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/meinvestproc/${meinvestprocEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ meinvestproc }: IRootState) => ({
  meinvestprocEntity: meinvestproc.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MeinvestprocDetail);
