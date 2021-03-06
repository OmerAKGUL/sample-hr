import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afwprocess.reducer';
import { IAfwprocess } from 'app/shared/model/afwprocess.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfwprocessDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfwprocessDetail = (props: IAfwprocessDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afwprocessEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afwprocess.detail.title">Afwprocess</Translate> [<b>{afwprocessEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="entity">
              <Translate contentKey="sampleHrApp.afwprocess.entity">Entity</Translate>
            </span>
          </dt>
          <dd>{afwprocessEntity.entity}</dd>
          <dt>
            <span id="apprefmngfrm">
              <Translate contentKey="sampleHrApp.afwprocess.apprefmngfrm">Apprefmngfrm</Translate>
            </span>
          </dt>
          <dd>{afwprocessEntity.apprefmngfrm}</dd>
          <dt>
            <span id="apprefmngdomain">
              <Translate contentKey="sampleHrApp.afwprocess.apprefmngdomain">Apprefmngdomain</Translate>
            </span>
          </dt>
          <dd>{afwprocessEntity.apprefmngdomain}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.afwprocess.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {afwprocessEntity.createdt ? <TextFormat value={afwprocessEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.afwprocess.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {afwprocessEntity.updatedt ? <TextFormat value={afwprocessEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.afwprocess.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{afwprocessEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.afwprocess.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{afwprocessEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.afwprocess.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{afwprocessEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.afwprocess.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{afwprocessEntity.wfprocid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afwprocess.wfcode">Wfcode</Translate>
          </dt>
          <dd>{afwprocessEntity.wfcode ? afwprocessEntity.wfcode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/afwprocess" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afwprocess/${afwprocessEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afwprocess }: IRootState) => ({
  afwprocessEntity: afwprocess.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfwprocessDetail);
