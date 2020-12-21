import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afwfstate.reducer';
import { IAfwfstate } from 'app/shared/model/afwfstate.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfwfstateDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfwfstateDetail = (props: IAfwfstateDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afwfstateEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afwfstate.detail.title">Afwfstate</Translate> [<b>{afwfstateEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.afwfstate.code">Code</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.afwfstate.name">Name</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afwfstate.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.descr}</dd>
          <dt>
            <span id="apprefhandlerfrm">
              <Translate contentKey="sampleHrApp.afwfstate.apprefhandlerfrm">Apprefhandlerfrm</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.apprefhandlerfrm}</dd>
          <dt>
            <span id="apprefhandlerdom">
              <Translate contentKey="sampleHrApp.afwfstate.apprefhandlerdom">Apprefhandlerdom</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.apprefhandlerdom}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.afwfstate.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.createdt ? <TextFormat value={afwfstateEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.afwfstate.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.updatedt ? <TextFormat value={afwfstateEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.afwfstate.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.afwfstate.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.afwfstate.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.afwfstate.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{afwfstateEntity.wfprocid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afwfstate.wfcode">Wfcode</Translate>
          </dt>
          <dd>{afwfstateEntity.wfcode ? afwfstateEntity.wfcode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/afwfstate" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afwfstate/${afwfstateEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afwfstate }: IRootState) => ({
  afwfstateEntity: afwfstate.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfwfstateDetail);
