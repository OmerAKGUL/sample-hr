import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './mematchresult.reducer';
import { IMematchresult } from 'app/shared/model/mematchresult.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMematchresultDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MematchresultDetail = (props: IMematchresultDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { mematchresultEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.mematchresult.detail.title">Mematchresult</Translate> [<b>{mematchresultEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="matchid">
              <Translate contentKey="sampleHrApp.mematchresult.matchid">Matchid</Translate>
            </span>
          </dt>
          <dd>{mematchresultEntity.matchid}</dd>
          <dt>
            <span id="matchctxid">
              <Translate contentKey="sampleHrApp.mematchresult.matchctxid">Matchctxid</Translate>
            </span>
          </dt>
          <dd>{mematchresultEntity.matchctxid}</dd>
          <dt>
            <span id="matchwltype">
              <Translate contentKey="sampleHrApp.mematchresult.matchwltype">Matchwltype</Translate>
            </span>
          </dt>
          <dd>{mematchresultEntity.matchwltype}</dd>
          <dt>
            <span id="matchtxnid">
              <Translate contentKey="sampleHrApp.mematchresult.matchtxnid">Matchtxnid</Translate>
            </span>
          </dt>
          <dd>{mematchresultEntity.matchtxnid}</dd>
          <dt>
            <span id="matchscore">
              <Translate contentKey="sampleHrApp.mematchresult.matchscore">Matchscore</Translate>
            </span>
          </dt>
          <dd>{mematchresultEntity.matchscore}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.mematchresult.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {mematchresultEntity.createdt ? <TextFormat value={mematchresultEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.mematchresult.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {mematchresultEntity.updatedt ? <TextFormat value={mematchresultEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.mematchresult.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{mematchresultEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.mematchresult.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{mematchresultEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.mematchresult.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{mematchresultEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.mematchresult.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{mematchresultEntity.wfprocid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.mematchresult.matchconfigcode">Matchconfigcode</Translate>
          </dt>
          <dd>{mematchresultEntity.matchconfigcode ? mematchresultEntity.matchconfigcode.name : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.mematchresult.invprocid">Invprocid</Translate>
          </dt>
          <dd>{mematchresultEntity.invprocid ? mematchresultEntity.invprocid.invprofile.name : ''}</dd>
        </dl>
        <Button tag={Link} to="/modules/me/mematchresult" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/me/mematchresult/${mematchresultEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ mematchresult }: IRootState) => ({
  mematchresultEntity: mematchresult.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MematchresultDetail);
