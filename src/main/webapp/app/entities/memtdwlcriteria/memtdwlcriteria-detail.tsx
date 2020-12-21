import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './memtdwlcriteria.reducer';
import { IMemtdwlcriteria } from 'app/shared/model/memtdwlcriteria.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMemtdwlcriteriaDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MemtdwlcriteriaDetail = (props: IMemtdwlcriteriaDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { memtdwlcriteriaEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.memtdwlcriteria.detail.title">Memtdwlcriteria</Translate> [<b>{memtdwlcriteriaEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="wlmid">
              <Translate contentKey="sampleHrApp.memtdwlcriteria.wlmid">Wlmid</Translate>
            </span>
          </dt>
          <dd>{memtdwlcriteriaEntity.wlmid}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.memtdwlcriteria.name">Name</Translate>
            </span>
          </dt>
          <dd>{memtdwlcriteriaEntity.name}</dd>
          <dt>
            <span id="applyonwlfields">
              <Translate contentKey="sampleHrApp.memtdwlcriteria.applyonwlfields">Applyonwlfields</Translate>
            </span>
          </dt>
          <dd>{memtdwlcriteriaEntity.applyonwlfields}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.memtdwlcriteria.wltypecode">Wltypecode</Translate>
          </dt>
          <dd>{memtdwlcriteriaEntity.wltypecode ? memtdwlcriteriaEntity.wltypecode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.memtdwlcriteria.matchmethodcode">Matchmethodcode</Translate>
          </dt>
          <dd>{memtdwlcriteriaEntity.matchmethodcode ? memtdwlcriteriaEntity.matchmethodcode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/memtdwlcriteria" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/memtdwlcriteria/${memtdwlcriteriaEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ memtdwlcriteria }: IRootState) => ({
  memtdwlcriteriaEntity: memtdwlcriteria.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MemtdwlcriteriaDetail);
