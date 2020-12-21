import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './mematchresultctx.reducer';
import { IMematchresultctx } from 'app/shared/model/mematchresultctx.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMematchresultctxDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MematchresultctxDetail = (props: IMematchresultctxDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { mematchresultctxEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.mematchresultctx.detail.title">Mematchresultctx</Translate> [<b>{mematchresultctxEntity.id}</b>
          ]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="memid">
              <Translate contentKey="sampleHrApp.mematchresultctx.memid">Memid</Translate>
            </span>
          </dt>
          <dd>{mematchresultctxEntity.memid}</dd>
          <dt>
            <span id="matchtime">
              <Translate contentKey="sampleHrApp.mematchresultctx.matchtime">Matchtime</Translate>
            </span>
          </dt>
          <dd>
            {mematchresultctxEntity.matchtime ? (
              <TextFormat value={mematchresultctxEntity.matchtime} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="matchmtdmsg">
              <Translate contentKey="sampleHrApp.mematchresultctx.matchmtdmsg">Matchmtdmsg</Translate>
            </span>
          </dt>
          <dd>{mematchresultctxEntity.matchmtdmsg}</dd>
          <dt>
            <span id="matchctxdata">
              <Translate contentKey="sampleHrApp.mematchresultctx.matchctxdata">Matchctxdata</Translate>
            </span>
          </dt>
          <dd>{mematchresultctxEntity.matchctxdata}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.mematchresultctx.matchid">Matchid</Translate>
          </dt>
          <dd>{mematchresultctxEntity.matchid ? mematchresultctxEntity.matchid.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.mematchresultctx.matchmtdcode">Matchmtdcode</Translate>
          </dt>
          <dd>{mematchresultctxEntity.matchmtdcode ? mematchresultctxEntity.matchmtdcode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/mematchresultctx" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/mematchresultctx/${mematchresultctxEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ mematchresultctx }: IRootState) => ({
  mematchresultctxEntity: mematchresultctx.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MematchresultctxDetail);
