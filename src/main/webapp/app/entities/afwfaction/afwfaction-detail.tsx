import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afwfaction.reducer';
import { IAfwfaction } from 'app/shared/model/afwfaction.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfwfactionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfwfactionDetail = (props: IAfwfactionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afwfactionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afwfaction.detail.title">Afwfaction</Translate> [<b>{afwfactionEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.afwfaction.code">Code</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.afwfaction.name">Name</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afwfaction.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.descr}</dd>
          <dt>
            <span id="apprefhandler">
              <Translate contentKey="sampleHrApp.afwfaction.apprefhandler">Apprefhandler</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.apprefhandler}</dd>
          <dt>
            <span id="afsid">
              <Translate contentKey="sampleHrApp.afwfaction.afsid">Afsid</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.afsid}</dd>
          <dt>
            <span id="afmid">
              <Translate contentKey="sampleHrApp.afwfaction.afmid">Afmid</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.afmid}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.afwfaction.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {afwfactionEntity.createdt ? <TextFormat value={afwfactionEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.afwfaction.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {afwfactionEntity.updatedt ? <TextFormat value={afwfactionEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.afwfaction.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.afwfaction.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.afwfaction.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.afwfaction.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{afwfactionEntity.wfprocid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afwfaction.appmenucode">Appmenucode</Translate>
          </dt>
          <dd>{afwfactionEntity.appmenucode ? afwfactionEntity.appmenucode.name : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afwfaction.appformcode">Appformcode</Translate>
          </dt>
          <dd>{afwfactionEntity.appformcode ? afwfactionEntity.appformcode.title : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afwfaction.appmodulecode">Appmodulecode</Translate>
          </dt>
          <dd>{afwfactionEntity.appmodulecode ? afwfactionEntity.appmodulecode.name : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afwfaction.wfcode">Wfcode</Translate>
          </dt>
          <dd>{afwfactionEntity.wfcode ? afwfactionEntity.wfcode.name : ''}</dd>
        </dl>
        <Button tag={Link} to="/modules/af/afwfaction" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/af/afwfaction/${afwfactionEntity.id}`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afwfaction }: IRootState) => ({
  afwfactionEntity: afwfaction.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfwfactionDetail);
