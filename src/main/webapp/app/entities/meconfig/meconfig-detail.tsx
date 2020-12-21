import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './meconfig.reducer';
import { IMeconfig } from 'app/shared/model/meconfig.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMeconfigDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MeconfigDetail = (props: IMeconfigDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { meconfigEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.meconfig.detail.title">Meconfig</Translate> [<b>{meconfigEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.meconfig.code">Code</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.meconfig.name">Name</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.meconfig.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.descr}</dd>
          <dt>
            <span id="wlfieldlist">
              <Translate contentKey="sampleHrApp.meconfig.wlfieldlist">Wlfieldlist</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.wlfieldlist}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.meconfig.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.createdt ? <TextFormat value={meconfigEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.meconfig.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.updatedt ? <TextFormat value={meconfigEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.meconfig.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.meconfig.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.meconfig.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.meconfig.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{meconfigEntity.wfprocid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meconfig.scheduleid">Scheduleid</Translate>
          </dt>
          <dd>{meconfigEntity.scheduleid ? meconfigEntity.scheduleid.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/modules/me/meconfig" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/me/meconfig/${meconfigEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ meconfig }: IRootState) => ({
  meconfigEntity: meconfig.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MeconfigDetail);
