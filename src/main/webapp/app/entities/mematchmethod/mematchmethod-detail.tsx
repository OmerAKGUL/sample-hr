import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './mematchmethod.reducer';
import { IMematchmethod } from 'app/shared/model/mematchmethod.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMematchmethodDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MematchmethodDetail = (props: IMematchmethodDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { mematchmethodEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.mematchmethod.detail.title">Mematchmethod</Translate> [<b>{mematchmethodEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.mematchmethod.code">Code</Translate>
            </span>
          </dt>
          <dd>{mematchmethodEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.mematchmethod.name">Name</Translate>
            </span>
          </dt>
          <dd>{mematchmethodEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.mematchmethod.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{mematchmethodEntity.descr}</dd>
          <dt>
            <span id="applyonwlfields">
              <Translate contentKey="sampleHrApp.mematchmethod.applyonwlfields">Applyonwlfields</Translate>
            </span>
          </dt>
          <dd>{mematchmethodEntity.applyonwlfields}</dd>
        </dl>
        <Button tag={Link} to="/mematchmethod" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/mematchmethod/${mematchmethodEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ mematchmethod }: IRootState) => ({
  mematchmethodEntity: mematchmethod.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MematchmethodDetail);
