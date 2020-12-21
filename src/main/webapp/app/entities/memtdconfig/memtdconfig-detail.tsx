import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './memtdconfig.reducer';
import { IMemtdconfig } from 'app/shared/model/memtdconfig.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMemtdconfigDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MemtdconfigDetail = (props: IMemtdconfigDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { memtdconfigEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.memtdconfig.detail.title">Memtdconfig</Translate> [<b>{memtdconfigEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="memid">
              <Translate contentKey="sampleHrApp.memtdconfig.memid">Memid</Translate>
            </span>
          </dt>
          <dd>{memtdconfigEntity.memid}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.memtdconfig.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {memtdconfigEntity.createdt ? <TextFormat value={memtdconfigEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.memtdconfig.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {memtdconfigEntity.updatedt ? <TextFormat value={memtdconfigEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.memtdconfig.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{memtdconfigEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.memtdconfig.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{memtdconfigEntity.updateusr}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.memtdconfig.methodcode">Methodcode</Translate>
          </dt>
          <dd>{memtdconfigEntity.methodcode ? memtdconfigEntity.methodcode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.memtdconfig.configcode">Configcode</Translate>
          </dt>
          <dd>{memtdconfigEntity.configcode ? memtdconfigEntity.configcode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/memtdconfig" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/memtdconfig/${memtdconfigEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ memtdconfig }: IRootState) => ({
  memtdconfigEntity: memtdconfig.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MemtdconfigDetail);
