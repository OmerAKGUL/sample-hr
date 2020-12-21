import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './wlmwltype.reducer';
import { IWlmwltype } from 'app/shared/model/wlmwltype.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IWlmwltypeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WlmwltypeDetail = (props: IWlmwltypeDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { wlmwltypeEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.wlmwltype.detail.title">Wlmwltype</Translate> [<b>{wlmwltypeEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.wlmwltype.code">Code</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.wlmwltype.name">Name</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.wlmwltype.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.descr}</dd>
          <dt>
            <span id="publishercat">
              <Translate contentKey="sampleHrApp.wlmwltype.publishercat">Publishercat</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.publishercat}</dd>
          <dt>
            <span id="publisherorgid">
              <Translate contentKey="sampleHrApp.wlmwltype.publisherorgid">Publisherorgid</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.publisherorgid}</dd>
          <dt>
            <span id="publishername">
              <Translate contentKey="sampleHrApp.wlmwltype.publishername">Publishername</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.publishername}</dd>
          <dt>
            <span id="publishformat">
              <Translate contentKey="sampleHrApp.wlmwltype.publishformat">Publishformat</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.publishformat}</dd>
          <dt>
            <span id="filteringtype">
              <Translate contentKey="sampleHrApp.wlmwltype.filteringtype">Filteringtype</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.filteringtype}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.wlmwltype.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.createdt ? <TextFormat value={wlmwltypeEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.wlmwltype.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.updatedt ? <TextFormat value={wlmwltypeEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.wlmwltype.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.wlmwltype.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.wlmwltype.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.wlmwltype.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{wlmwltypeEntity.wfprocid}</dd>
        </dl>
        <Button tag={Link} to="/wlmwltype" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/wlmwltype/${wlmwltypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ wlmwltype }: IRootState) => ({
  wlmwltypeEntity: wlmwltype.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WlmwltypeDetail);
