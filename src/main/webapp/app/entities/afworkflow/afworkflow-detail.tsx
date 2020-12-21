import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afworkflow.reducer';
import { IAfworkflow } from 'app/shared/model/afworkflow.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfworkflowDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfworkflowDetail = (props: IAfworkflowDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afworkflowEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afworkflow.detail.title">Afworkflow</Translate> [<b>{afworkflowEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.afworkflow.code">Code</Translate>
            </span>
          </dt>
          <dd>{afworkflowEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.afworkflow.name">Name</Translate>
            </span>
          </dt>
          <dd>{afworkflowEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afworkflow.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afworkflowEntity.descr}</dd>
          <dt>
            <span id="apprefmngfrm">
              <Translate contentKey="sampleHrApp.afworkflow.apprefmngfrm">Apprefmngfrm</Translate>
            </span>
          </dt>
          <dd>{afworkflowEntity.apprefmngfrm}</dd>
          <dt>
            <span id="apprefmngdomain">
              <Translate contentKey="sampleHrApp.afworkflow.apprefmngdomain">Apprefmngdomain</Translate>
            </span>
          </dt>
          <dd>{afworkflowEntity.apprefmngdomain}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.afworkflow.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {afworkflowEntity.createdt ? <TextFormat value={afworkflowEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.afworkflow.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {afworkflowEntity.updatedt ? <TextFormat value={afworkflowEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.afworkflow.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{afworkflowEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.afworkflow.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{afworkflowEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.afworkflow.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{afworkflowEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.afworkflow.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{afworkflowEntity.wfprocid}</dd>
        </dl>
        <Button tag={Link} to="/afworkflow" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afworkflow/${afworkflowEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afworkflow }: IRootState) => ({
  afworkflowEntity: afworkflow.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfworkflowDetail);
