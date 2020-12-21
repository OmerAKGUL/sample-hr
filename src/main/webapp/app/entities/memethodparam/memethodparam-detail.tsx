import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './memethodparam.reducer';
import { IMemethodparam } from 'app/shared/model/memethodparam.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMemethodparamDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MemethodparamDetail = (props: IMemethodparamDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { memethodparamEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.memethodparam.detail.title">Memethodparam</Translate> [<b>{memethodparamEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="memid">
              <Translate contentKey="sampleHrApp.memethodparam.memid">Memid</Translate>
            </span>
          </dt>
          <dd>{memethodparamEntity.memid}</dd>
          <dt>
            <span id="wlmid">
              <Translate contentKey="sampleHrApp.memethodparam.wlmid">Wlmid</Translate>
            </span>
          </dt>
          <dd>{memethodparamEntity.wlmid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.memethodparam.paramvalcode">Paramvalcode</Translate>
          </dt>
          <dd>{memethodparamEntity.paramvalcode ? memethodparamEntity.paramvalcode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.memethodparam.paramidxno">Paramidxno</Translate>
          </dt>
          <dd>{memethodparamEntity.paramidxno ? memethodparamEntity.paramidxno.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.memethodparam.matchmethodcode">Matchmethodcode</Translate>
          </dt>
          <dd>{memethodparamEntity.matchmethodcode ? memethodparamEntity.matchmethodcode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.memethodparam.wltype">Wltype</Translate>
          </dt>
          <dd>{memethodparamEntity.wltype ? memethodparamEntity.wltype.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/memethodparam" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/memethodparam/${memethodparamEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ memethodparam }: IRootState) => ({
  memethodparamEntity: memethodparam.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MemethodparamDetail);
